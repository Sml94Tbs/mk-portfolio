import About from "@/app/components/contents/about";
import Accueil from "@/app/components/contents/home";
import Skills from "@/app/components/contents/skill";
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
    </main>
  );
}
