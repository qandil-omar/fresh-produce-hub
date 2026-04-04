import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { vegetables } from "@/data/products";

const Vegetables = () => {
  return (
    <div>
      <PageBanner title="خضروات مجمدة" breadcrumb="خضروات مجمدة" />
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle="تشكيلة واسعة من الخضروات المجمدة"
            title="خضروات مصرية مجمدة بأعلى معايير الجودة"
          />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            نقدم مجموعة شاملة من الخضروات المصرية المجمدة بتقنية التبريد السريع IQF، مع خيارات تعبئة متنوعة تناسب احتياجات جميع العملاء والأسواق.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vegetables.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vegetables;
