import { SectionHeader } from "./About";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { BatSignal } from "./BatSignal";

const contacts = [
  { icon: Mail, label: "Email", value: "prabal9713@gmail.com", href: "mailto:prabal9713@gmail.com" },
  { icon: Phone, label: "Bat-Phone", value: "+91 83493 46608", href: "tel:+918349346608" },
  { icon: Github, label: "GitHub", value: "prabal-parmar", href: "https://github.com/prabal-parmar" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/prabal-parmar" },
  { icon: MapPin, label: "Location", value: "Indore, India", href: "#" },
];

export const Contact = () => (
  <section id="contact" className="relative py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionHeader kicker="The Bat-Signal" title="Summon Me" />

      <div className="mt-16 bat-border p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <BatSignal size={400} />
        </div>
        <div className="relative">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Got a mission for Gotham's developer? Need a vigilante for your next product, hackathon,
            or open-source crusade? Light the signal — I'm watching.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bat-border text-left"
              >
                <c.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{c.label}</div>
                  <div className="text-sm text-foreground truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:prabal9713@gmail.com"
            className="mt-10 inline-block px-10 py-4 bg-primary text-primary-foreground font-display tracking-widest text-sm hover:shadow-[0_0_40px_oklch(0.85_0.18_90_/_60%)] transition-all bat-clip"
          >
            DROP A MESSAGE
          </a>
        </div>
      </div>
    </div>
  </section>
);
