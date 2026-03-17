import strawberry from "@/assets/products/strawberry.jpg";
import mango from "@/assets/products/mango.jpg";
import pomegranate from "@/assets/products/pomegranate.jpg";
import apricot from "@/assets/products/apricot.jpg";
import fig from "@/assets/products/fig.jpg";
import guava from "@/assets/products/guava.jpg";
import kiwi from "@/assets/products/kiwi.jpg";
import greenBeans from "@/assets/products/green-beans.jpg";
import peas from "@/assets/products/peas.jpg";
import broadBeans from "@/assets/products/broad-beans.jpg";
import mixedVegetables from "@/assets/products/mixed-vegetables.jpg";
import broccoli from "@/assets/products/broccoli.jpg";
import spinach from "@/assets/products/spinach.jpg";
import okra from "@/assets/products/okra.jpg";
import molokhia from "@/assets/products/molokhia.jpg";
import artichoke from "@/assets/products/artichoke.jpg";
import sweetCorn from "@/assets/products/sweet-corn.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  category: "fruits" | "vegetables";
  description: string;
}

export const fruits: Product[] = [
  { id: "strawberry", name: "فراولة مجمدة", image: strawberry, category: "fruits", description: "فراولة مصرية طازجة مجمدة بتقنية IQF للحفاظ على اللون والطعم الطبيعي" },
  { id: "mango", name: "مانجو مجمدة", image: mango, category: "fruits", description: "قطع مانجو مصرية فاخرة مجمدة بتقنية التبريد السريع" },
  { id: "pomegranate", name: "رمان مجمد", image: pomegranate, category: "fruits", description: "حبات رمان مصري مجمدة غنية بمضادات الأكسدة" },
  { id: "apricot", name: "مشمش مجمد", image: apricot, category: "fruits", description: "مشمش مصري مجمد بنكهة طبيعية مميزة" },
  { id: "fig", name: "تين مجمد", image: fig, category: "fruits", description: "تين مصري طبيعي مجمد بأعلى معايير الجودة" },
  { id: "guava", name: "جوافة مجمدة", image: guava, category: "fruits", description: "جوافة مصرية مجمدة بطعم استوائي مميز" },
  { id: "kiwi", name: "كيوي مجمد", image: kiwi, category: "fruits", description: "شرائح كيوي مجمدة غنية بفيتامين سي" },
];

export const vegetables: Product[] = [
  { id: "green-beans", name: "فاصوليا خضراء مجمدة", image: greenBeans, category: "vegetables", description: "فاصوليا خضراء طازجة مجمدة بتقنية التبريد السريع" },
  { id: "peas", name: "بازلاء مجمدة", image: peas, category: "vegetables", description: "بازلاء خضراء مجمدة بنكهة طبيعية طازجة" },
  { id: "broad-beans", name: "فول مجمد", image: broadBeans, category: "vegetables", description: "فول أخضر مصري مجمد بأعلى جودة" },
  { id: "mixed-vegetables", name: "خضروات مشكلة مجمدة", image: mixedVegetables, category: "vegetables", description: "تشكيلة متنوعة من الخضروات المجمدة الطازجة" },
  { id: "broccoli", name: "بروكلي مجمد", image: broccoli, category: "vegetables", description: "زهرات بروكلي مجمدة غنية بالعناصر الغذائية" },
  { id: "spinach", name: "سبانخ مجمدة", image: spinach, category: "vegetables", description: "سبانخ مصرية مجمدة طازجة وغنية بالحديد" },
  { id: "okra", name: "بامية مجمدة", image: okra, category: "vegetables", description: "بامية مصرية صغيرة مجمدة بجودة عالية" },
  { id: "molokhia", name: "ملوخية مجمدة", image: molokhia, category: "vegetables", description: "ملوخية مصرية مفرومة مجمدة بنكهة أصيلة" },
  { id: "artichoke", name: "خرشوف مجمد", image: artichoke, category: "vegetables", description: "قلوب خرشوف مجمدة طازجة ولذيذة" },
  { id: "sweet-corn", name: "ذرة حلوة مجمدة", image: sweetCorn, category: "vegetables", description: "حبوب ذرة حلوة مجمدة بطعم طبيعي" },
];

export const allProducts = [...fruits, ...vegetables];
