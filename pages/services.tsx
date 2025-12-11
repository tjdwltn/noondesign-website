import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services } from "@/sections/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}




