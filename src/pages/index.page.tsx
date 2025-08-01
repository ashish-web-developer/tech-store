// styled theme
import { useTheme } from "styled-components";
// components
import Hero from "@/components/hero/hero.component";
import ProductsGallery from "@/components/products-gallery/products-gallery.component";
import FeatureCard from "@/components/feature-card/feature-card.component";

// icons
import { Zap, Shield, Rocket, Globe, Users, Heart } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Audio & Headphones",
    description:
      "Premium headphones, earbuds, and speakers from top brands with crystal clear sound quality.",
  },
  {
    icon: Shield,
    title: "Smartphones",
    description:
      "Latest flagship phones with cutting-edge features, cameras, and lightning-fast performance.",
  },
  {
    icon: Rocket,
    title: "Laptops & Computers",
    description:
      "High-performance laptops and desktops for work, gaming, and creative professionals.",
  },
  {
    icon: Globe,
    title: "Wearables",
    description:
      "Smart watches and fitness trackers to monitor your health and stay connected on the go.",
  },
  {
    icon: Users,
    title: "Gaming",
    description:
      "Gaming consoles, accessories, and gear for the ultimate gaming experience.",
  },
  {
    icon: Heart,
    title: "Cameras",
    description:
      "Professional cameras and photography equipment to capture life's precious moments.",
  },
];
export default function Index() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      <ProductsGallery />
      {/* Product Categories */}
      <section
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="text-center mb-16">
            <h2
              style={{
                color: theme.palette.info.main,
              }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Shop by Category
            </h2>
            <p
              style={{
                color: theme.palette.info.main,
              }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Browse our extensive collection of premium tech products across
              all major categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <FeatureCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
