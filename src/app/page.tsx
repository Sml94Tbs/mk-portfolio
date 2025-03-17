import About from "@/app/components/contents/about";
import Accueil from "@/app/components/contents/home";
export default function Home() {
  return (
    <main>
      <div id="accueil">
        <Accueil />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
