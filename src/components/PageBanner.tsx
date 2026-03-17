import { Link } from "react-router-dom";
import heroFarm from "@/assets/hero-farm.jpg";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => (
  <section className="relative h-[300px] overflow-hidden">
    <img src={heroFarm} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
          <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
          <span>›</span>
          <span className="text-gold">{breadcrumb}</span>
        </div>
      </div>
    </div>
  </section>
);

export default PageBanner;
