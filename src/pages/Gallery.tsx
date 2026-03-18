import { motion } from "framer-motion";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1596489397223-ebd274cc8e85?auto=format&fit=crop&q=80",
    title: "عملية فرز الفراولة",
    category: "الإنتاج"
  },
  {
    url: "https://images.unsplash.com/photo-1568584711812-70fb98a12e3c?auto=format&fit=crop&q=80",
    title: "مزارعنا",
    category: "الحصاد"
  },
  {
    url: "https://images.unsplash.com/photo-1599335497424-6fc6551b4b9b?auto=format&fit=crop&q=80",
    title: "تعبئة الخضروات B2B",
    category: "لتغليف"
  },
  {
    url: "https://images.unsplash.com/photo-1595185966453-731eebe7bed7?auto=format&fit=crop&q=80",
    title: "تقطيع آلي للبروكلي",
    category: "الإنتاج"
  },
  {
    url: "https://images.unsplash.com/photo-1559869502-38d2f1f0a672?auto=format&fit=crop&q=80",
    title: "مخازن التبريد (-18°C)",
    category: "المرافق"
  },
  {
    url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80",
    title: "نفق التجميد السريع (IQF)",
    category: "المرافق"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container px-4">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            معرض <span className="text-primary text-glow">الصور</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            جولة بصرية في منشآتنا، من الحقول والمزارع الخصبة إلى خطوط المعالجة الدقيقة وأنفاق التجميد السريع الحديثة.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-square bg-muted cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-primary font-medium text-sm mb-1">{image.category}</div>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
