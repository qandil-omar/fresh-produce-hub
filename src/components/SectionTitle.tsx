import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <span className={`inline-block text-sm font-bold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full ${light ? "bg-primary-foreground/10 text-gold" : "bg-primary/10 text-primary"}`}>
      {subtitle}
    </span>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="flex items-center justify-center gap-2 mt-5">
      <div className="w-12 h-0.5 bg-gold rounded-full" />
      <div className="w-3 h-3 rounded-full border-2 border-gold" />
      <div className="w-12 h-0.5 bg-gold rounded-full" />
    </div>
  </motion.div>
);

export default SectionTitle;
