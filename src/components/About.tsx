import { BookOpen, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Access to diverse course materials and resources",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Connect students and educators seamlessly",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Real-time performance insights and analytics",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your data",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">nxtgen LMS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              nxtgen LMS is an intuitive platform designed to simplify digital learning for students and educators. 
              Built with cutting-edge technology, it ensures seamless course management, assignment tracking, and performance evaluation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">What Makes Us Unique?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe learning should be accessible, engaging, and efficient. Our platform combines modern design 
                with powerful features to create an unparalleled educational experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From interactive course management to real-time collaboration tools, nxtgen LMS empowers educators 
                to teach effectively and students to learn efficiently.
              </p>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-2xl glow-primary">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Intuitive User Interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-medium">Role-Based Access Control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground font-medium">Real-Time Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Advanced Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-medium">Mobile Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
