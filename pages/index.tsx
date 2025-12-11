import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Portfolio } from "@/sections/Portfolio";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio limit={5} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

