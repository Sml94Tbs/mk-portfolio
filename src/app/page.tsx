import About from "@/app/components/contents/about";
import Accueil from "@/app/components/contents/home";
import Skills from "@/app/components/contents/skill";
import Portfolio from "@/app/components/contents/portfolio";
export default function Home() {
  return (
    <main>
      <div id="accueil">
        <Accueil />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio/>
      </div>
    </main>
  );
}
