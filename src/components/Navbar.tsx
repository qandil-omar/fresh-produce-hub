import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
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
            <a href="tel:+201010122421" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone size={14} />
              <span>01010122421</span>
            </a>
            <a href="mailto:info@agroplus-eg.com" className="hidden sm:flex items-center gap-1 hover:text-gold transition-colors">
              <Mail size={14} />
              <span>info@agroplus-eg.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Agro Plus Premium Exporters
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
