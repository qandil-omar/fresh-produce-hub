import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, Scissors, Droplets, Snowflake, Package, Truck } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import heroStrawberries from "@/assets/hero-strawberries.jpg";
import heroMixed from "@/assets/hero-mixed.jpg";

const productionSteps = [
  { icon: Sprout, title: "الزراعة", desc: "نختار أفضل الأصناف والبذور، ونراقب المحاصيل من البداية وحتى الحصاد في أوج النضج، مع التركيز على استخدام الأسمدة الطبيعية وتجنب المبيدات الضارة." },
  { icon: Scissors, title: "الانتقاء والفرز", desc: "نتابع عملية القطف بعناية فائقة لضمان اختيار الثمار الأكثر نضجاً وطراوة، ثم نقوم بالفرز والغسيل لإزالة أي شوائب وضمان نظافة تامة." },
  { icon: Droplets, title: "التبريد المبدئي", desc: "يتم تبريد المنتجات استعداداً لعملية التجميد السريع، حيث تصل إلى درجة حرارة -18 مئوية، مع التخلص من الرطوبة الزائدة لضمان جودة التجميد." },
  { icon: Snowflake, title: "التجميد السريع IQF", desc: "نستخدم أحدث تقنيات التجميد السريع حيث تُجمَّد المنتجات بسرعة حتى القلب عند -40 درجة مئوية، مما يحافظ على النكهة والملمس والقيمة الغذائية." },
  { icon: Package, title: "التعبئة والتخزين", desc: "نوفر تعبئة بالجملة والتجزئة بأحجام مختلفة، مع تخزين آمن في مستودعات يتم التحكم بدرجة حرارتها لضمان وصول المنتجات بأفضل حال." },
  { icon: Truck, title: "الشحن والتوصيل", desc: "نوصل منتجاتنا إلى أي مكان في العالم في الوقت المحدد، مع الحفاظ على سلسلة التبريد طوال رحلة الشحن." },
];

const About = () => {
  return (
    <div>
      <PageBanner title="عن الشركة" breadcrumb="عن الشركة" />

      {/* Main About */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={heroStrawberries}
                alt="فراولة"
                className="rounded-xl shadow-lg col-span-2"
              />
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={heroMixed}
                alt="منتجات مجمدة"
                className="rounded-xl shadow-lg col-span-2"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold">مرحباً بكم في أجرو بلس للتصدير</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                تشكيلة واسعة من الفواكه والخضروات المجمدة بتقنية IQF
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                أجرو بلس شركة مصرية متخصصة في تصدير مختلف أنواع الفواكه والخضروات المجمدة باستخدام تقنية التبريد السريع IQF، لنضمن لعملائنا أعلى مستويات الجودة مع خيارات تغليف متنوعة تناسب احتياجات الأسواق المختلفة.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                منذ انطلاقتنا، حرصنا على الالتزام بالمعايير الدولية للجودة والسلامة الغذائية، مما مكّننا من بناء شراكات تجارية قوية وموثوقة مع عملاء في مختلف أنحاء العالم.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                بفضل المناخ المثالي في مصر والتربة الخصبة المروية بمياه نهر النيل، نفخر بتقديم منتجات بنكهة طبيعية فريدة وجودة استثنائية لا مثيل لها.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  +441 شحنة ناجحة
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  خدمة 24/7
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  منتجات IQF فاخرة
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  جودة معتمدة دولياً
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 section-light">
        <div className="container">
          <SectionTitle subtitle="علامتنا التجارية" title="من أجود المنتجات المصرية" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                نمتلك تشكيلة مميزة من أفضل المنتجات المجمدة المصرية، اكتسبت سمعة طيبة في الأسواق الدولية على مدى سنوات من العمل المتواصل والتطوير المستمر.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                مع الطقس المشمس في مصر والتربة الخصبة التي يرويها نهر النيل، نوفر أعلى جودة من الفواكه والخضروات الطازجة المجمدة لعملائنا حول العالم.
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> فواكه وخضروات مجمدة فاخرة</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> تلبية جميع متطلبات العملاء</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> سهلة التحضير والاستخدام</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> تشكيلة متنوعة من المنتجات المميزة</li>
              </ul>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={heroStrawberries}
              alt="منتجات أجرو بلس"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "الرسالة", desc: "تقديم أعلى مستويات الجودة من الفواكه والخضروات المجمدة بأحدث تقنيات التجميد وبأسعار تنافسية لعملائنا في مختلف الأسواق العالمية." },
              { title: "الرؤية", desc: "أن نكون من رواد السوق في مجال تصدير الفواكه والخضروات المجمدة محلياً وعالمياً من خلال التطوير المستمر والاستثمار في الكوادر والمرافق." },
              { title: "أسواقنا", desc: "نصدّر منتجاتنا إلى العديد من الدول حول العالم بما في ذلك روسيا وبولندا والولايات المتحدة، مع تطلعات مستمرة للتوسع في الأسواق الأوروبية والآسيوية." },
              { title: "هدفنا", desc: "التوسع المستمر في تشكيلة منتجاتنا بإضافة أصناف فريدة تلبي متطلبات عملائنا مع ضمان التطوير الدائم لجودة جميع منتجاتنا." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 section-green">
        <div className="container">
          <SectionTitle subtitle="مراحل الإنتاج" title="كيف نحافظ على الطعم الطبيعي" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/10 p-6 rounded-xl backdrop-blur-sm border border-primary-foreground/20"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <step.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">هل ترغب في التعاون معنا؟</h2>
          <p className="text-primary-foreground/80 mb-8">تواصل معنا اليوم لمعرفة المزيد عن منتجاتنا وخدماتنا</p>
          <Link to="/contact" className="inline-flex bg-gold text-accent-foreground px-8 py-3 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
            تواصل معنا
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
