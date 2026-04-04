import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="gradient-green text-primary-foreground py-2 text-sm">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://wa.me/201010122421" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone size={14} />
              <span dir="ltr">+20 1010122421</span>
            </a>
            <a href="mailto:info@agroplus-eg.com" className="hidden sm:flex items-center gap-1 hover:text-gold transition-colors">
              <Mail size={14} />
              <span>info@agroplus-eg.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 border-l border-primary-foreground/20 pl-4">
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={16} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="hover:text-gold transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3a3.34 3.34 0 0 0-1.4 3.1c.14 1.14.88 2.18 1.91 2.7.91.49 2.05.51 3.01.07 1.14-.53 1.93-1.75 2.02-3.02.07-4.14.02-8.28.04-12.42z"/>
                </svg>
              </a>
            </div>
            <div className="text-primary-foreground/80 font-medium">
              Agro Plus Premium Exporters
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-card shadow-lg sticky top-0 z-50">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Agro Plus" className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`font-semibold transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
              الرئيسية
            </Link>
            <Link to="/about" className={`font-semibold transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>
              عن الشركة
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 font-semibold transition-colors hover:text-primary text-foreground">
                المنتجات
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px] z-50">
                <Link to="/fruits" className="block px-4 py-3 hover:bg-muted transition-colors rounded-t-lg font-medium">
                  فاكهة مجمدة
                </Link>
                <Link to="/vegetables" className="block px-4 py-3 hover:bg-muted transition-colors rounded-b-lg font-medium">
                  خضروات مجمدة
                </Link>
              </div>
            </div>
            <Link to="/gallery" className={`font-semibold transition-colors hover:text-primary ${isActive("/gallery") ? "text-primary" : "text-foreground"}`}>
              معرض الصور
            </Link>
            <Link to="/contact" className={`font-semibold transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}>
              اتصل بنا
            </Link>
          </div>

          <Link to="/contact" className="hidden lg:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            تواصل معنا
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border pb-4">
            <div className="container flex flex-col gap-2 pt-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="py-2 font-semibold hover:text-primary">الرئيسية</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="py-2 font-semibold hover:text-primary">عن الشركة</Link>

              <button onClick={() => setProductsOpen(!productsOpen)} className="py-2 font-semibold hover:text-primary text-right flex items-center gap-1">
                المنتجات <ChevronDown size={16} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="pr-4 flex flex-col gap-1">
                  <Link to="/fruits" onClick={() => setIsOpen(false)} className="py-2 text-muted-foreground hover:text-primary">فاكهة مجمدة</Link>
                  <Link to="/vegetables" onClick={() => setIsOpen(false)} className="py-2 text-muted-foreground hover:text-primary">خضروات مجمدة</Link>
                </div>
              )}
              <Link to="/gallery" onClick={() => setIsOpen(false)} className="py-2 font-semibold hover:text-primary">معرض الصور</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="py-2 font-semibold hover:text-primary">اتصل بنا</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
