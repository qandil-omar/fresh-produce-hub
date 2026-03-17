import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Leaf, Award, Snowflake, Truck, Package, Factory } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { fruits, vegetables } from "@/data/products";
import heroMixed from "@/assets/hero-mixed.jpg";

const values = [
  { icon: Users, title: "العملاء أولاً", desc: "شراكات قائمة على الثقة والنجاح المشترك" },
  { icon: ShieldCheck, title: "الجودة العالية", desc: "رقابة صارمة في كل مراحل الإنتاج" },
  { icon: Leaf, title: "الاستدامة", desc: "الحفاظ على البيئة أولوية قصوى" },
  { icon: Award, title: "التميز", desc: "معايير دولية في التصنيع والتصدير" },
];

const whyUs = [
  { icon: Snowflake, title: "طازج دائماً", desc: "أجود المحاصيل من أفضل المزارع المصرية" },
  { icon: Factory, title: "جودة ثابتة", desc: "أحدث تقنيات التجميد السريع IQF في خطوط إنتاجنا" },
  { icon: Package, title: "تعبئة متنوعة", desc: "أحجام وتغليف مختلفة تناسب جميع الأسواق" },
  { icon: Truck, title: "توصيل عالمي", desc: "سلسلة إمداد متكاملة تضمن وصول منتجاتك بأفضل حال" },
];

const stats = [
  { value: "5000+", label: "طن", sublabel: "سعة تخزينية" },
  { value: "10+", label: "سنوات", sublabel: "من الخبرة" },
  { value: "7", label: "فاكهة", sublabel: "مجمدة" },
  { value: "17", label: "خضروات", sublabel: "مجمدة" },
];

const Index = () => {
  return (
    <div>
      <HeroSlider />

      {/* Values */}
      <section className="py-16 section-light">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={heroMixed} alt="منتجاتنا" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
                <span className="text-4xl font-bold">10+</span>
                <p className="text-sm">سنوات من التميز</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold">مرحباً بكم في أجرو بلس</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                متخصصون في إنتاج وتصدير الفواكه والخضروات المجمدة
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                أجرو بلس شركة مصرية متخصصة في تصدير أجود أنواع الفواكه والخضروات المجمدة بتقنية التبريد السريع IQF، نحرص على تقديم أعلى مستويات الجودة مع تغليف احترافي يناسب متطلبات الأسواق العالمية بالجملة والتجزئة.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                بفضل تربة مصر الغنية المروية بمياه نهر النيل، نوفر منتجات بنكهة طبيعية استثنائية تُسعد العائلات في مختلف أنحاء العالم.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  أفضل المزارعين المصريين
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  منتجات بجودة عالمية
                </div>
              </div>
              <Link to="/about" className="inline-flex mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                اكتشف المزيد
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionTitle subtitle="أفضل تشكيلة من المنتجات المجمدة" title="فواكه وخضروات مجمدة فاخرة" />
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/fruits" className="group block relative rounded-2xl overflow-hidden h-[300px]">
                <img src={fruits[0].image} alt="فاكهة مجمدة" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 right-6">
                  <h3 className="text-2xl font-bold text-primary-foreground">فاكهة مجمدة</h3>
                  <p className="text-primary-foreground/80">منتجات فاخرة بجودة عالية</p>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/vegetables" className="group block relative rounded-2xl overflow-hidden h-[300px]">
                <img src={vegetables[4].image} alt="خضروات مجمدة" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 right-6">
                  <h3 className="text-2xl font-bold text-primary-foreground">خضروات مجمدة</h3>
                  <p className="text-primary-foreground/80">تشكيلة واسعة لكل الاحتياجات</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <SectionTitle subtitle="من أجود المنتجات المصرية" title="أبرز منتجاتنا المجمدة" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...fruits.slice(0, 4), ...vegetables.slice(0, 4)].map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/fruits" className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 section-green">
        <div className="container">
          <SectionTitle subtitle="طريقة عملنا" title="لماذا أجرو بلس؟" light />
          <p className="text-center text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            نقدم لشركائنا التجاريين منتجات بأعلى معايير الجودة، مصنّعة بأحدث التقنيات والمعدات المبتكرة، من أغنى الأراضي الزراعية المصرية التي يغذيها نهر النيل.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm border border-primary-foreground/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                  <item.icon className="text-gold" size={32} />
                </div>
                <h3 className="font-bold text-primary-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <SectionTitle subtitle="أجرو بلس بالأرقام" title="الحفاظ على النكهة والجودة بتقنية التجميد السريع" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-sm border border-border"
              >
                <span className="text-4xl md:text-5xl font-bold text-primary">{s.value}</span>
                <p className="font-semibold text-foreground mt-2">{s.label}</p>
                <p className="text-muted-foreground text-sm">{s.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              عمليات فحص دقيقة من الحصاد إلى التغليف
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              نلتزم بأعلى معايير الجودة والسلامة الغذائية في كل مرحلة من مراحل الإنتاج لنقدم لكم أفضل المنتجات المجمدة.
            </p>
            <Link to="/contact" className="inline-flex bg-gold text-accent-foreground px-8 py-3 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
              تواصل معنا الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
