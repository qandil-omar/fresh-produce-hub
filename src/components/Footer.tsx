import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="section-green text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Agro Plus" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              أجرو بلس شركة مصرية رائدة في تصدير الفواكه والخضروات المجمدة بتقنية التبريد السريع IQF، نقدم أجود المنتجات المصرية للأسواق العالمية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">الرئيسية</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">عن الشركة</Link>
              <Link to="/fruits" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">فاكهة مجمدة</Link>
              <Link to="/vegetables" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">خضروات مجمدة</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">اتصل بنا</Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">منتجاتنا</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <span>فراولة مجمدة</span>
              <span>مانجو مجمدة</span>
              <span>بازلاء مجمدة</span>
              <span>خضروات مشكلة</span>
              <span>بروكلي مجمد</span>
              <span>بامية مجمدة</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">تواصل معنا</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+201234567890" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Phone size={16} />
                <span>+20 123 456 7890</span>
              </a>
              <a href="tel:+201234567891" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Phone size={16} />
                <span>+20 123 456 7891</span>
              </a>
              <a href="mailto:info@agroplus-eg.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Mail size={16} />
                <span>info@agroplus-eg.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>المنطقة الصناعية، الإسماعيلية، مصر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Agro Plus Premium Exporters. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
