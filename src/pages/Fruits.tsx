import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { fruits } from "@/data/products";

const Fruits = () => {
  return (
    <div>
      <PageBanner title="فاكهة مجمدة" breadcrumb="فاكهة مجمدة" />
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle="تشكيلة فاخرة من الفواكه المجمدة"
            title="فواكه مصرية مجمدة بتقنية التبريد السريع"
          />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            أصبحنا جزءاً أساسياً من الأسواق العالمية من خلال تشكيلتنا المتميزة من الفواكه المجمدة عالية الجودة، المقدمة تحت علامتنا التجارية الخاصة وكذلك بتغليف خاص حسب طلب العملاء.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fruits.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fruits;
