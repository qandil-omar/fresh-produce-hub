import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, ShieldCheck, Leaf, Award, Snowflake, Truck, Package, Factory, ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { fruits, vegetables } from "@/data/products";
import heroMixed from "@/assets/hero-mixed.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

/* ─── Animated Counter ─── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("ar-EG"));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [target, count]);

  return (
    <span className="flex items-baseline justify-center gap-1">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix && <span className="text-2xl">{suffix}</span>}
    </span>
  );
};

/* ─── Data ─── */
const values = [
  { icon: Users, title: "العملاء أولاً", desc: "شراكات قائمة على الثقة والنجاح المشترك" },
  { icon: ShieldCheck, title: "الجودة العالية", desc: "رقابة صارمة في كل مراحل الإنتاج" },
  { icon: Leaf, title: "الاستدامة", desc: "الحفاظ على البيئة أولوية قصوى" },
  { icon: Award, title: "التميز", desc: "معايير دولية في التصنيع والتصدير" },
];

const whyUs = [
  { icon: Snowflake, title: "طازج دائماً", desc: "أجود المحاصيل من أفضل المزارع المصرية", num: "01" },
  { icon: Factory, title: "جودة ثابتة", desc: "أحدث تقنيات التجميد السريع IQF في خطوط إنتاجنا", num: "02" },
  { icon: Package, title: "تعبئة متنوعة", desc: "أحجام وتغليف مختلفة تناسب جميع الأسواق", num: "03" },
  { icon: Truck, title: "توصيل عالمي", desc: "سلسلة إمداد متكاملة تضمن وصول منتجاتك بأفضل حال", num: "04" },
];

const stats = [
  { value: 5000, label: "طن", sublabel: "سعة تخزينية", suffix: "+" },
  { value: 10, label: "سنوات", sublabel: "من الخبرة", suffix: "+" },
  { value: 7, label: "فاكهة", sublabel: "مجمدة", suffix: "" },
  { value: 17, label: "خضروات", sublabel: "مجمدة", suffix: "" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      <HeroSlider />

      {/* ══════ Values ══════ */}
      <section className="py-20 -mt-1 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group text-center p-8 bg-card rounded-2xl card-lift border border-border overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[80px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <v.icon className="text-primary" size={30} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ About Section ══════ */}
      <section className="py-24 section-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10">
                <img src={heroMixed} alt="منتجاتنا" className="rounded-3xl shadow-2xl w-full" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-4 lg:-left-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl z-20"
              >
                <span className="text-5xl font-extrabold gradient-text">10+</span>
                <p className="text-sm mt-1 text-primary-foreground/80">سنوات من التميز</p>
              </motion.div>
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-bold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary">
                مرحباً بكم في أجرو بلس
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
                متخصصون في إنتاج وتصدير الفواكه والخضروات المجمدة
              </h2>
              <p className="text-muted-foreground leading-loose mb-4 text-lg">
                أجرو بلس شركة مصرية متخصصة في تصدير أجود أنواع الفواكه والخضروات المجمدة بتقنية التبريد السريع IQF، نحرص على تقديم أعلى مستويات الجودة مع تغليف احترافي يناسب متطلبات الأسواق العالمية.
              </p>
              <p className="text-muted-foreground leading-loose mb-8 text-lg">
                بفضل تربة مصر الغنية المروية بمياه نهر النيل، نوفر منتجات بنكهة طبيعية استثنائية تُسعد العائلات في مختلف أنحاء العالم.
              </p>
              <div className="flex gap-6 flex-wrap mb-8">
                {["أفضل المزارعين المصريين", "منتجات بجودة عالمية", "تقنية IQF متطورة"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-foreground font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    {t}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:gap-3"
              >
                اكتشف المزيد
                <ArrowLeft size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ Products Categories ══════ */}
      <section className="py-24">
        <div className="container">
          <SectionTitle subtitle="أفضل تشكيلة من المنتجات المجمدة" title="فواكه وخضروات مجمدة فاخرة" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { link: "/fruits", img: fruits[0].image, title: "فاكهة مجمدة", desc: "منتجات فاخرة بجودة عالية" },
              { link: "/vegetables", img: vegetables[4].image, title: "خضروات مجمدة", desc: "تشكيلة واسعة لكل الاحتياجات" },
            ].map((cat, i) => (
              <motion.div
                key={cat.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Link to={cat.link} className="group block relative rounded-3xl overflow-hidden h-[350px]">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <h3 className="text-3xl font-extrabold text-primary-foreground mb-2">{cat.title}</h3>
                    <p className="text-primary-foreground/80 text-lg">{cat.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-gold font-bold group-hover:gap-3 transition-all">
                      تصفح المنتجات
                      <ArrowLeft size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Featured Products ══════ */}
      <section className="py-24 section-light">
        <div className="container">
          <SectionTitle subtitle="من أجود المنتجات المصرية" title="أبرز منتجاتنا المجمدة" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...fruits.slice(0, 4), ...vegetables.slice(0, 4)].map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/fruits"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              عرض جميع المنتجات
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ Why Us ══════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroFarm} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground/90" />
        </div>

        <div className="container relative z-10">
          <SectionTitle subtitle="طريقة عملنا" title="لماذا أجرو بلس؟" light />
          <p className="text-center text-primary-foreground/70 max-w-3xl mx-auto mb-14 leading-relaxed text-lg">
            نقدم لشركائنا التجاريين منتجات بأعلى معايير الجودة، مصنّعة بأحدث التقنيات والمعدات المبتكرة، من أغنى الأراضي الزراعية المصرية التي يغذيها نهر النيل.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center p-8 glass rounded-2xl group hover:bg-primary-foreground/15 transition-all duration-500"
              >
                <span className="absolute top-4 left-4 text-5xl font-extrabold text-primary-foreground/5 group-hover:text-gold/20 transition-colors">
                  {item.num}
                </span>
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <item.icon className="text-gold" size={32} />
                </div>
                <h3 className="font-bold text-primary-foreground text-xl mb-3">{item.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Stats ══════ */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionTitle subtitle="أجرو بلس بالأرقام" title="الحفاظ على النكهة والجودة بتقنية التجميد السريع" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-card rounded-2xl card-lift border border-border"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <p className="font-bold text-foreground text-lg">{s.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 gradient-green relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-foreground/5" />

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-bold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-gold">
              ضمان الجودة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              عمليات فحص دقيقة <br /> من الحصاد إلى التغليف
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              نلتزم بأعلى معايير الجودة والسلامة الغذائية في كل مرحلة من مراحل الإنتاج لنقدم لكم أفضل المنتجات المجمدة.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              تواصل معنا الآن
              <ArrowLeft size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
