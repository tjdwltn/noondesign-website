import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/sections/Portfolio";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}




