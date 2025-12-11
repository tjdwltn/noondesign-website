import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/sections/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}




