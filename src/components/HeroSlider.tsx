import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroStrawberries from "@/assets/hero-strawberries.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import heroMixed from "@/assets/hero-mixed.jpg";

const slides = [
  {
    image: heroStrawberries,
    subtitle: "تغليف بالملصق الخاص بك وأحجام عبوات متنوعة",
    title: "أعلى معايير الجودة والتغليف",
  },
  {
    image: heroFarm,
    subtitle: "من أخصب أراضي مصر المروية بمياه النيل",
    title: "فواكه وخضروات مجمدة فاخرة",
  },
  {
    image: heroMixed,
    subtitle: "نكهة طبيعية وطعم أصيل يلبي تطلعات الأسواق العالمية",
    title: "بأحدث تقنيات التجميد السريع IQF",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[750px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-gold text-lg mb-3 font-medium">{slides[current].subtitle}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                {slides[current].title}
              </h1>
              <Link
                to="/about"
                className="inline-flex bg-gold text-accent-foreground px-8 py-3 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
              >
                اكتشف المزيد
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-gold w-8" : "bg-primary-foreground/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
