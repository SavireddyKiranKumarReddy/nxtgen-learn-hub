import { Mail, Github, Linkedin, Twitter, Globe } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "kiransavireddy@gmail.com",
      href: "mailto:kiransavireddy@gmail.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "nxtgensec",
      href: "https://github.com/nxtgensec",
      color: "foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nxtgen-lms",
      href: "https://linkedin.com/company/nxtgensec",
      color: "primary",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@nxtgensec",
      href: "https://twitter.com/nxtgensec",
      color: "primary",
    },
    {
      icon: Globe,
      label: "Website",
      value: "nxtgensec.org",
      href: "https://nxtgensec.org",
      color: "secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with us through your preferred platform
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Card */}
                <div className="relative glass-card p-6 rounded-xl hover:bg-card/80 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${link.color}/10 flex items-center justify-center group-hover:bg-${link.color}/20 transition-colors`}>
                      <link.icon className={`h-6 w-6 text-${link.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground mb-1">{link.label}</div>
                      <div className="font-medium truncate group-hover:text-primary transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Contact Card */}
          <div className="glass-card p-8 sm:p-12 rounded-2xl glow-primary text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Primary Contact</h3>
            <p className="text-muted-foreground">
              For inquiries, partnerships, or support, reach out to us directly
            </p>
            <a
              href="mailto:kiransavireddy@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>kiransavireddy@gmail.com</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours during business days
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-medium text-primary">Available 24/7</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                <span className="text-sm font-medium text-secondary">Fast Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
