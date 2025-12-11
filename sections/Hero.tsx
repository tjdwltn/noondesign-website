import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function Hero() {
  return (
    <section
      className="section-padding border-b border-black/5 bg-[#f5f5f5] bg-[url('/hero-bg.png')] bg-cover bg-center"
      aria-labelledby="hero-heading"
    >
      <div className="container flex min-h-[60vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl space-y-4 text-center"
        >
          <h1
            id="hero-heading"
            className={`${playfair.className} text-4xl tracking-tightMinus sm:text-5xl md:text-6xl`}
          >
            nooNdesign
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white md:text-lg">
            We pay attention to the past, Learn the present, and Build the future of visual culture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


