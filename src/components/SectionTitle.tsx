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
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <span className="text-gold font-semibold text-lg">{subtitle}</span>
    <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
  </motion.div>
);

export default SectionTitle;
