import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="section-green text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="bg-white p-4 rounded-xl inline-block mb-5 shadow-lg">
              <img src={logo} alt="Agro Plus" className="h-14 max-w-[150px] object-contain" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm mb-6">
              أجرو بلس شركة مصرية رائدة في تصدير الفواكه والخضروات المجمدة بتقنية التبريد السريع IQF، نقدم أجود المنتجات المصرية للأسواق العالمية.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-accent-foreground transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3a3.34 3.34 0 0 0-1.4 3.1c.14 1.14.88 2.18 1.91 2.7.91.49 2.05.51 3.01.07 1.14-.53 1.93-1.75 2.02-3.02.07-4.14.02-8.28.04-12.42z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">الرئيسية</Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">عن الشركة</Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">معرض الصور</Link>
              <Link to="/fruits" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">فاكهة مجمدة</Link>
              <Link to="/vegetables" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">خضروات مجمدة</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">اتصل بنا</Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">منتجاتنا</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/product/frozen-strawberry" className="hover:text-gold transition-colors">فراولة مجمدة</Link>
              <Link to="/product/frozen-mango" className="hover:text-gold transition-colors">مانجو مجمدة</Link>
              <Link to="/product/frozen-peas" className="hover:text-gold transition-colors">بازلاء مجمدة</Link>
              <Link to="/product/frozen-mixed-vegetables" className="hover:text-gold transition-colors">خضروات مشكلة</Link>
              <Link to="/product/frozen-broccoli" className="hover:text-gold transition-colors">بروكلي مجمد</Link>
              <Link to="/product/frozen-okra" className="hover:text-gold transition-colors">بامية مجمدة</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">تواصل معنا</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/201010122421" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Phone size={16} />
                <span dir="ltr">+20 1010122421</span>
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
