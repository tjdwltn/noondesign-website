import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/sections/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}




