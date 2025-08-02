// styled theme
import { useTheme } from "styled-components";
// components
import Hero from "@/components/hero/hero.component";
import ProductsGallery from "@/components/products-gallery/products-gallery.component";
import Offer from "@/components/offer/offer.component";
import ProductCategory from "@/components/product-category/product-category.component";

// icons
import { Zap, Shield, Rocket, Globe, Users, Heart } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Audio & Headphones",
    description:
      "Explore our range of premium headphones, wireless earbuds, and speakers designed for immersive sound and unmatched clarity.",
  },
  {
    icon: Shield,
    title: "Smartphones",
    description:
      "Discover the latest smartphones packed with advanced features, stunning cameras, and blazing-fast performance to keep you connected.",
  },
  {
    icon: Rocket,
    title: "Laptops & Computers",
    description:
      "From powerful workstations to sleek ultrabooks, find the perfect laptop or desktop tailored for productivity, gaming, and creativity.",
  },
  {
    icon: Globe,
    title: "Wearables",
    description:
      "Track your fitness, monitor your health, and stay connected on the go with our collection of smartwatches and wearables.",
  },
  {
    icon: Users,
    title: "Gaming",
    description:
      "Level up your play with the latest gaming consoles, high-performance accessories, and must-have gear for every gamer.",
  },
  {
    icon: Heart,
    title: "Cameras",
    description:
      "Capture every detail with professional-grade cameras, lenses, and photography accessories built for creators and enthusiasts.",
  },
];

export default function Index() {
  const theme = useTheme();
  return (
    <>
      <Hero />
      <ProductCategory categories={categories} />
      {/* Products Section */}
      <section
        className="py-20"
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: theme.palette.info.main,
            }}
          >
            Featured Products
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{
              color: theme.palette.info.light,
            }}
          >
            Discover our hand-picked selection of premium products with
            exclusive discounts.
          </p>
        </div>
        <ProductsGallery />
      </section>
      <Offer />
    </>
  );
}
