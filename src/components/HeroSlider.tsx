import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import heroStrawberries from "@/assets/hero-strawberries.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import heroMixed from "@/assets/hero-mixed.jpg";

const slides = [
  {
    image: heroStrawberries,
    subtitle: "تغليف بالملصق الخاص بك وأحجام عبوات متنوعة",
    title: "أعلى معايير الجودة والتغليف",
    cta: "اكتشف المزيد",
    link: "/about",
  },
  {
    image: heroFarm,
    subtitle: "من أخصب أراضي مصر المروية بمياه النيل",
    title: "فواكه وخضروات مجمدة فاخرة",
    cta: "تعرف علينا",
    link: "/about",
  },
  {
    image: heroMixed,
    subtitle: "نكهة طبيعية وطعم أصيل يلبي تطلعات الأسواق العالمية",
    title: "بأحدث تقنيات التجميد السريع IQF",
    cta: "منتجاتنا",
    link: "/fruits",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[80vh] md:h-screen max-h-[800px] md:max-h-[900px] min-h-[450px] md:min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 hero-gradient" />
          {/* Extra dark overlay at bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-1 bg-gold rounded-full mb-6"
              />
              <p className="text-gold text-lg md:text-xl mb-4 font-semibold tracking-wide">
                {slides[current].subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground !leading-[1.4] mb-8 text-shadow-hero">
                {slides[current].title}
              </h1>
              <div className="flex items-center gap-3 sm:gap-4">
                <Link
                  to={slides[current].link}
                  className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  {slides[current].cta}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 glass text-primary-foreground px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-primary-foreground/20 transition-all"
                >
                  تواصل معنا
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button
          onClick={prev}
          className="glass rounded-full p-3 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button
          onClick={next}
          className="glass rounded-full p-3 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="absolute bottom-0 left-0 z-20 flex bg-background md:hidden">
        <button
          onClick={next}
          className="px-6 py-5 text-foreground hover:bg-muted transition-colors border-l border-border"
        >
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>
        <button
          onClick={prev}
          className="px-6 py-5 text-foreground hover:bg-muted transition-colors"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-3 rounded-full transition-all overflow-hidden"
            style={{ width: i === current ? 48 : 12 }}
          >
            <div className={`absolute inset-0 rounded-full ${i === current ? "bg-gold" : "bg-primary-foreground/40"}`} />
            {i === current && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gold origin-right"
                style={{ transformOrigin: "right" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="hsl(120, 20%, 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;
