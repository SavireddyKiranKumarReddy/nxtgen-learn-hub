import { UserPlus, BookText, Upload, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up",
      description: "Register as a Student or Teacher with email verification for secure access.",
      color: "primary",
    },
    {
      number: "02",
      icon: BookText,
      title: "Create or Enroll",
      description: "Teachers create comprehensive courses while students easily join and explore.",
      color: "secondary",
    },
    {
      number: "03",
      icon: Upload,
      title: "Learn & Submit",
      description: "Access rich course materials, complete engaging assignments, and collaborate.",
      color: "accent",
    },
    {
      number: "04",
      icon: LineChart,
      title: "Track Progress",
      description: "View detailed grades, performance insights, and personalized analytics.",
      color: "primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with nxtgen LMS in four simple steps
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2"></div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 group h-full">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-${step.color}/10 flex items-center justify-center mb-4 group-hover:bg-${step.color}/20 transition-colors`}>
                      <step.icon className={`h-6 w-6 text-${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to transform your learning experience?
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
              <span className="text-sm font-medium">Simple • Secure • Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
