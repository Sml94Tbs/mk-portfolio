import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parser = new Parser();

async function fetchAndWriteFeed() {
  const feed = await parser.parseURL('https://www.google.fr/alerts/feeds/03186188144268102640/6897667250426976061');

  const cleanedItems = feed.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    snippet: item.contentSnippet,
  }));

  const fileContent = `export const googleAlerts = ${JSON.stringify(cleanedItems, null, 2)};\n`;

  const outputPath = path.resolve(__dirname, '../../app/data/googleAlerts.ts'); // <-- adapte ce chemin si besoin
  fs.writeFileSync(outputPath, fileContent);

  console.log(`✅ Fichier généré : ${outputPath}`);
}

fetchAndWriteFeed();
