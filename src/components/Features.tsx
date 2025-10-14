import { Shield, BookOpen, Upload, Award, MessageSquare, Layout } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Login & Role-Based Access",
      description: "Enterprise-grade security with role-specific permissions and authenticated access control.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: BookOpen,
      title: "Interactive Course Management",
      description: "Create, organize, and manage courses with rich multimedia content and structured modules.",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: Upload,
      title: "Assignment Upload & Tracking",
      description: "Seamless assignment submission with version control and real-time progress tracking.",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: Award,
      title: "Real-time Grading System",
      description: "Instant feedback with automated grading and detailed performance analytics.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: MessageSquare,
      title: "Discussion Forum",
      description: "Collaborative learning space for peer interaction and instructor guidance.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Layout,
      title: "Clean, Responsive UI",
      description: "Modern, intuitive interface that works perfectly on all devices and screen sizes.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Powerful <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a complete learning management experience
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                
                {/* Card */}
                <div className="relative glass-card p-8 rounded-xl h-full hover:bg-card/80 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl glass-card max-w-2xl">
              <h3 className="text-2xl font-bold">Ready to Experience These Features?</h3>
              <p className="text-muted-foreground">
                Join thousands of educators and students already using nxtgen LMS
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-sm font-medium text-primary">No Credit Card Required</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                  <span className="text-sm font-medium text-secondary">Free Trial Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
