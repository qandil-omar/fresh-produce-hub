import { useParams, Link } from "react-router-dom";
import { ArrowRight, Package, Calendar, Info, CheckCircle2 } from "lucide-react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary mb-4">المنتج غير موجود</h1>
        <Link to="/">
          <Button variant="outline">العودة للرئيسية</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        
        <Link 
          to={`/${product.category}`} 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowRight className="ml-2 w-4 h-4" />
          العودة لقائمة المنتجات
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft h-[400px] lg:h-[600px] relative group p-4 flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-700 ease-out"
             />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 w-fit">
              {product.category === "fruits" ? "فواكه مجمدة (IQF)" : "خضروات مجمدة (IQF)"}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-loose">
              {product.name}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              
              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-center text-primary mb-3">
                  <Package className="w-5 h-5 ml-2" />
                  <h3 className="font-bold">خيارات التعبئة (B2B)</h3>
                </div>
                <ul className="space-y-2">
                  {product.packaging.map((pack, i) => (
                    <li key={i} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 ml-2" />
                      {pack}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-center text-primary mb-3">
                  <Info className="w-5 h-5 ml-2" />
                  <h3 className="font-bold">المقاسات والتقطيع</h3>
                </div>
                <ul className="space-y-2">
                  {product.sizes.map((size, i) => (
                    <li key={i} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 ml-2" />
                      {size}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-5 rounded-xl border border-border shadow-sm sm:col-span-2 flex flex-col sm:flex-row gap-6">
                
                <div className="flex-1">
                  <div className="flex items-center text-primary mb-3">
                    <Calendar className="w-5 h-5 ml-2" />
                    <h3 className="font-bold">موسم التوفر</h3>
                  </div>
                  <p className="text-muted-foreground text-sm flex items-center">
                     {product.season}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center text-primary mb-3">
                    <CheckCircle2 className="w-5 h-5 ml-2" />
                    <h3 className="font-bold">الفوائد والجودة</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {product.benefits}
                  </p>
                </div>
                
              </div>
              
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-base h-14 px-8 shadow-glow hover:-translate-y-1 transition-transform">
                  طلب تسعير للكميات
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center sm:text-right">
              * الأوزان الجملة و Privat Label متوفرة حسب طلب المستورد.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
