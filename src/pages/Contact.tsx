import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  return (
    <div>
      <PageBanner title="اتصل بنا" breadcrumb="اتصل بنا" />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">عن أجرو بلس</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  أجرو بلس شركة مصرية رائدة في تصدير الفواكه والخضروات المجمدة بتقنية التبريد السريع IQF. منتجاتنا متوفرة تحت علامتنا التجارية التي اكتسبت سمعة ممتازة في الأسواق الدولية.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">بيانات التواصل</h3>
                {[
                  { icon: Phone, label: "إدارة المبيعات", value: "+20 123 456 7890", href: "tel:+201234567890" },
                  { icon: Phone, label: "خط ثانٍ", value: "+20 123 456 7891", href: "tel:+201234567891" },
                  { icon: Mail, label: "البريد الإلكتروني", value: "info@agroplus-eg.com", href: "mailto:info@agroplus-eg.com" },
                  { icon: Clock, label: "ساعات العمل", value: "السبت - الخميس: 9 صباحاً - 5 مساءً", href: null },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">العنوان</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">أجرو بلس للتصدير</p>
                    <p>المنطقة الصناعية، الإسماعيلية، مصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <SectionTitle subtitle="تواصل معنا الآن" title="لا تتردد في التواصل معنا في أي وقت" />
              <p className="text-muted-foreground text-center mb-8 -mt-6">
                يرجى ملء النموذج التالي وسنقوم بالرد عليكم في أقرب وقت ممكن.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">الاسم الكامل</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">الموضوع</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">الرسالة</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
