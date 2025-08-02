import { Zap, Shield, Heart } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Special Offers & Deals
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Don't miss out on limited-time discounts and exclusive member
          benefits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white text-lg px-12 py-4 rounded-lg shadow-md hover:bg-primary/90 transition-colors">
            View All Deals
          </button>
          <button className="border border-primary text-primary text-lg px-12 py-4 rounded-lg hover:bg-primary/10 transition-colors">
            Sign Up for Alerts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
          <p className="text-muted-foreground">
            Free delivery on orders over $50
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-muted-foreground">Protected transactions & data</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-muted-foreground">30-day hassle-free returns</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
