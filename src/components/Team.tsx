import { Github, Linkedin, Globe, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Kiran Kumar Reddy",
      role: "Team Lead | FE + BE Developer",
      website: "kiran.nxtgensec.org",
      email: "kiransavireddy@gmail.com",
      gradient: "from-primary to-primary-glow",
    },
    {
      name: "Mahesh Seerala",
      role: "Database Developer",
      website: "mahesh.nxtgensec.org",
      email: "mahesh@nxtgensec.org",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      name: "Kamal",
      role: "Quality Assurance Tester",
      website: "kamal.nxtgensec.org",
      email: "kamal@nxtgensec.org",
      gradient: "from-accent to-accent-glow",
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate minds behind nxtgen LMS
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group">
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                
                {/* Card */}
                <div className="relative glass-card p-8 rounded-2xl h-full hover:bg-card/80 transition-all duration-300">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-2 mb-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`https://${member.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors group/icon"
                      aria-label="Website"
                    >
                      <Globe className="h-5 w-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg hover:bg-muted transition-colors group/icon"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors group/icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors group/icon"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl glass-card max-w-3xl">
              <h3 className="text-2xl font-bold">Building the Future of Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our diverse team brings together expertise in full-stack development, database architecture, 
                and quality assurance to create a platform that truly makes a difference in digital learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
