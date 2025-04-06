import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parser = new Parser();

// async function fetchAndWriteFeed() {
//   const feed = await parser.parseURL('https://www.google.fr/alerts/feeds/03186188144268102640/6897667250426976061');

//   const cleanedItems = feed.items.map(item => ({
//     title: item.title,
//     link: item.link,
//     pubDate: item.pubDate,
//     snippet: item.contentSnippet,
//   }));

//   const fileContent = `export const googleAlerts = ${JSON.stringify(cleanedItems, null, 2)};\n`;

//   const outputPath = path.resolve(__dirname, '../../app/data/googleAlerts.ts'); // <-- adapte ce chemin si besoin
//   fs.writeFileSync(outputPath, fileContent);

//   console.log(`✅ Fichier généré : ${outputPath}`);
// }

// fetchAndWriteFeed();

const feeds = [
  {
    name: 'Cloud Computing',
    url: 'https://www.google.fr/alerts/feeds/03186188144268102640/15784537869239598227'
  },
  {
    name: 'Virtualisation',
    url: 'https://www.google.fr/alerts/feeds/03186188144268102640/1081509848825045067'
  },
  {
    name: 'IPv6, SDN, SD-WAN',
    url: 'https://www.google.fr/alerts/feeds/03186188144268102640/15532501029854704925'
  },
];

async function fetchAllFeeds() {
  const results: Record<string, any[]> = {};

  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url);
      results[feed.name] = parsed.items.map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        snippet: item.contentSnippet,
      }));
    } catch (error) {
      console.error(`❌ Erreur pour ${feed.name} :`, error);
      results[feed.name] = [];
    }
  }

  const fileContent = `export const googleAlerts = ${JSON.stringify(results, null, 2)};\n`;

  const outputPath = path.resolve(__dirname, '../../app/data/googleAlerts.ts');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, fileContent);

  console.log(`✅ Tous les flux ont été écrits dans ${outputPath}`);
}

fetchAllFeeds();