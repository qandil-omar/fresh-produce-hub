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
  packaging: string[];
  sizes: string[];
  season: string;
  benefits: string;
}

const defaultPackaging = ["أكياس 400 جرام", "أكياس 2.5 كجم", "كراتين 10 كجم (B2B)"];

export const fruits: Product[] = [
  { 
    id: "strawberry", 
    name: "فراولة مجمدة", 
    image: strawberry, 
    category: "fruits", 
    description: "فراولة مصرية طازجة مجمدة بتقنية IQF للحفاظ على اللون والطعم الطبيعي. مثالية للعصائر والحلويات والمربى.",
    packaging: defaultPackaging,
    sizes: ["15-25 مم", "25-35 مم", "غير معاير"],
    season: "ديسمبر إلى أبريل",
    benefits: "غنية بفيتامين C ومضادات الأكسدة."
  },
  { 
    id: "mango", 
    name: "مانجو مجمدة", 
    image: mango, 
    category: "fruits", 
    description: "قطع مانجو مصرية فاخرة مجمدة بتقنية التبريد السريع. نختار أفضل الأصناف لضمان الحلاوة الكثيفة.",
    packaging: defaultPackaging,
    sizes: ["مكعبات 10x10 مم", "أنصاف", "شرائح"],
    season: "يوليو إلى سبتمبر",
    benefits: "مصدر ممتاز لفيتامين A و C."
  },
  { 
    id: "pomegranate", 
    name: "رمان مجمد", 
    image: pomegranate, 
    category: "fruits", 
    description: "حبات رمان مصري مجمدة غنية بمضادات الأكسدة. مفروطة آلياً ومعبأة بتقنية تحفظ السوائل الداخلية.",
    packaging: defaultPackaging,
    sizes: ["حبات كاملة"],
    season: "سبتمبر إلى نوفمبر",
    benefits: "يدعم صحة القلب ومليء بمضادات الأكسدة."
  },
  { 
    id: "apricot", 
    name: "مشمش مجمد", 
    image: apricot, 
    category: "fruits", 
    description: "مشمش مصري مجمد بنكهة طبيعية مميزة، يتم اختيار الثمار عند درجة النضج المثلى للحصول على أقصى حلاوة.",
    packaging: defaultPackaging,
    sizes: ["أنصاف خالية من النوى"],
    season: "مايو إلى يونيو",
    benefits: "غني بالألياف وفيتامين A."
  },
  { 
    id: "fig", 
    name: "تين مجمد", 
    image: fig, 
    category: "fruits", 
    description: "تين مصري طبيعي مجمد بأعلى معايير الجودة، طعم سكري رائع وملمس ناعم.",
    packaging: defaultPackaging,
    sizes: ["أنصاف", "كامل"],
    season: "يوليو إلى سبتمبر",
    benefits: "يعزز صحة الجهاز الهضمي."
  },
  { 
    id: "guava", 
    name: "جوافة مجمدة", 
    image: guava, 
    category: "fruits", 
    description: "جوافة مصرية مجمدة بطعم استوائي مميز، معزولة البذور وجاهزة للعصر والاستخدام الصناعي.",
    packaging: ["عجينة جوافة", "كراتين 10 كجم"],
    sizes: ["مهروس", "أنصاف بدون بذور"],
    season: "أغسطس إلى أكتوبر",
    benefits: "ترفع المناعة لاحتوائها العالي على فيتامين سي."
  },
  { 
    id: "kiwi", 
    name: "كيوي مجمد", 
    image: kiwi, 
    category: "fruits", 
    description: "شرائح كيوي مجمدة غنية بفيتامين سي، مقطعة بعناية وتحتفظ بشكلها ومذاقها اللاذع المحبب.",
    packaging: defaultPackaging,
    sizes: ["مكعبات", "شرائح"],
    season: "على مدار العام (مستورد ومعبأ محلياً)",
    benefits: "يساعد في الهضم ويعزز المناعة."
  },
];

export const vegetables: Product[] = [
  { 
    id: "green-beans", 
    name: "فاصوليا خضراء مجمدة", 
    image: greenBeans, 
    category: "vegetables", 
    description: "فاصوليا خضراء طازجة مجمدة بتقنية التبريد السريع. تحافظ على القرمشة واللون الأخضر الناصع.",
    packaging: defaultPackaging,
    sizes: ["مقطعة 3-4 سم", "كاملة (بالمقاس)"],
    season: "أكتوبر إلى يونيو",
    benefits: "مصدر جيد للبروتين النباتي والألياف."
  },
  { 
    id: "peas", 
    name: "بازلاء مجمدة", 
    image: peas, 
    category: "vegetables", 
    description: "بازلاء خضراء مجمدة بنكهة طبيعية طازجة. تفرز آلياً لضمان تجانس الحجم.",
    packaging: defaultPackaging,
    sizes: ["حبات 7-10 مم"],
    season: "نوفمبر إلى مارس",
    benefits: "غنية بالفيتامينات K و C."
  },
  { 
    id: "broad-beans", 
    name: "فول مجمد", 
    image: broadBeans, 
    category: "vegetables", 
    description: "فول أخضر مصري مجمد بأعلى جودة. يتوفر بقشره أو مقشر حسب طلب العميل.",
    packaging: defaultPackaging,
    sizes: ["حبات مقشرة", "بالقشر"],
    season: "يناير إلى أبريل",
    benefits: "يمد الجسم بالطاقة والبروتين."
  },
  { 
    id: "mixed-vegetables", 
    name: "خضروات مشكلة مجمدة", 
    image: mixedVegetables, 
    category: "vegetables", 
    description: "تشكيلة متنوعة من الخضروات المجمدة الطازجة (بازلاء، جزر، فاصوليا، ذرة) لسهولة وسرعة الطهي.",
    packaging: defaultPackaging,
    sizes: ["خليط قياسي", "مكعبات متوسطة"],
    season: "على مدار العام",
    benefits: "وجبة غذائية متكاملة في كيس واحد."
  },
  { 
    id: "broccoli", 
    name: "بروكلي مجمد", 
    image: broccoli, 
    category: "vegetables", 
    description: "زهرات بروكلي مجمدة غنية بالعناصر الغذائية. تُسلق سلقاً خفيفاً (Blanched) قبل التجميد.",
    packaging: defaultPackaging,
    sizes: ["زهرات 20-40 مم", "زهرات 40-60 مم"],
    season: "ديسمبر إلى أبريل",
    benefits: "يدعم صحة العظام والقلب."
  },
  { 
    id: "spinach", 
    name: "سبانخ مجمدة", 
    image: spinach, 
    category: "vegetables", 
    description: "سبانخ مصرية مجمدة طازجة وغنية بالحديد. معالجة ومفرومة لتكون جاهزة للطبخ الفوري.",
    packaging: defaultPackaging,
    sizes: ["مفروم خشن", "مفروم ناعم"],
    season: "نوفمبر إلى أبريل",
    benefits: "تحارب فقر الدم لاحتوائها على الحديد."
  },
  { 
    id: "okra", 
    name: "بامية مجمدة", 
    image: okra, 
    category: "vegetables", 
    description: "بامية مصرية صغيرة (زيرو) أو متوسطة، مجمدة بجودة عالية وتحتفظ بلونها وشكلها المتناسق.",
    packaging: defaultPackaging,
    sizes: ["إكسترا (زيرو)", "ممتازة (ميديم)", "عادية"],
    season: "مايو إلى سبتمبر",
    benefits: "مفيدة لمرضى السكري والقولون."
  },
  { 
    id: "molokhia", 
    name: "ملوخية مجمدة", 
    image: molokhia, 
    category: "vegetables", 
    description: "ملوخية مصرية مفرومة مجمدة بنكهة أصيلة وتجهيز يضمن القوام 'المطاطي' المطلوب للوصفات الأصلية.",
    packaging: ["أكياس 400 جرام"],
    sizes: ["مفروم ناعم"],
    season: "مايو إلى سبتمبر",
    benefits: "تسهل الهضم وتدعم الجهاز المناعي."
  },
  { 
    id: "artichoke", 
    name: "خرشوف مجمد", 
    image: artichoke, 
    category: "vegetables", 
    description: "قلوب خرشوف مجمدة طازجة ولذيذة، مقشرة بعناية وخالية من الأوراق الخشنة.",
    packaging: defaultPackaging,
    sizes: ["قيعان (Bottoms)", "أرباع (Quarters)"],
    season: "ديسمبر إلى مايو",
    benefits: "ممتاز لصحة الكبد وتخفيض الكوليسترول."
  },
  { 
    id: "sweet-corn", 
    name: "ذرة حلوة مجمدة", 
    image: sweetCorn, 
    category: "vegetables", 
    description: "حبوب ذرة حلوة مجمدة بطعم طبيعي، مقرمشة وحلوة ومثالية للسلطات والشوربات.",
    packaging: defaultPackaging,
    sizes: ["حبوب كاملة"],
    season: "يوليو إلى أكتوبر",
    benefits: "غنية بالألياف والمعادن."
  },
  // New Vegetables to match competitor depth
  { 
    id: "peas-carrots", 
    name: "بازلاء وجزر مجمد", 
    image: "https://images.unsplash.com/photo-1596489397223-ebd274cc8e85?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "مزيج متوازن من حبوب البازلاء الخضراء ومكعبات الجزر الطازج، مثالي وسريع التحضير للوجبات اليومية.",
    packaging: defaultPackaging,
    sizes: ["مكعبات 10x10 مم (للجزر)"],
    season: "نوفمبر إلى أبريل",
    benefits: "تركيبة مثالية للرؤية والمناعة."
  },
  { 
    id: "cauliflower", 
    name: "قرنبيط مجمد", 
    image: "https://images.unsplash.com/photo-1568584711812-70fb98a12e3c?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "زهرات قرنبيط بيضاء ناصعة مجمدة باحترافية، تُسلق حرارياً لإيقاف الإنزيمات قبل تجميدها السريع لضمان جودتها.",
    packaging: defaultPackaging,
    sizes: ["زهرات 30-50 مم"],
    season: "ديسمبر إلى أبريل",
    benefits: "غني بمضادات الأكسدة الداعمة لخلايا الجسم."
  },
  { 
    id: "vine-leaves", 
    name: "ورق عنب مجمد", 
    image: "https://images.unsplash.com/photo-1599335497424-6fc6551b4b9b?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "أوراق عنب مصرية بناتي مجمدة، تُقطف في أوج نعومتها وتُفرز للحصول على أوراق بحجم مثالي للحشي.",
    packaging: ["أكياس 800 جرام", "كراتين 5 كجم"],
    sizes: ["أوراق متوسطة منتظمة"],
    season: "أبريل إلى يونيو",
    benefits: "يدعم الدورة الدموية وصحة القلب."
  },
  { 
    id: "taro", 
    name: "قلقاس مجمد", 
    image: "https://images.unsplash.com/photo-1595185966453-731eebe7bed7?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "مكعبات قلقاس مجمدة طازجة، جاهزة للطهي مباشرة بدون أي مجهود في التقشير أو التقطيع، مع الحفاظ على القوام المثالي.",
    packaging: defaultPackaging,
    sizes: ["مكعبات متجانسة"],
    season: "سبتمبر إلى فبراير",
    benefits: "محمل بالكربوهيدرات الصحية الداعمة للطاقة."
  },
  { 
    id: "olives", 
    name: "زيتون أخضر مجمد/مبرد", 
    image: "https://images.unsplash.com/photo-1559869502-38d2f1f0a672?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "زيتون مصري فاخر، يعالج ويجهز للاستخدام في الصناعات الغذائية مع خيارات نزع النوى أو الشرائح.",
    packaging: ["براميل 150 كجم", "جرادل 10 كجم", "أكياس فكيوم"],
    sizes: ["شرائح", "كامل", "بدون نوى"],
    season: "سبتمبر إلى نوفمبر",
    benefits: "مصدر هائل للدهون الصحية النقية."
  },
  { 
    id: "carrots", 
    name: "جزر مجمد", 
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80", 
    category: "vegetables", 
    description: "جزر برتقالي ناصع مجمد بعد تنظيفه وتقطيعه بدقة. يوفر وقت التجهيز في المصانع والمطابخ.",
    packaging: defaultPackaging,
    sizes: ["مكعبات", "شرائح"],
    season: "ديسمبر إلى أبريل",
    benefits: "أساسي لصحة العين لاحتوائه على البيتا كاروتين."
  }
];

export const allProducts = [...fruits, ...vegetables];
