import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { ScrollReveal } from "./effects/ScrollReveal";
import { BatSignal } from "./BatSignal";
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "prabal9713@gmail.com",
    href: "mailto:prabal9713@gmail.com",
  },
  { icon: Phone, label: "Bat-Phone", value: "+91 83493 46608", href: "tel:+918349346608" },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "prabal-parmar",
    href: "https://github.com/prabal-parmar",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/prabal-parmar",
  },
  { icon: MapPin, label: "Location", value: "Indore, India", href: "#" },
];

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mission Brief from ${formState.name || "Anonymous"}`);
    const body = encodeURIComponent(formState.message);
    window.location.href = `mailto:prabal9713@gmail.com?subject=${subject}&body=${body}${formState.email ? `%0A%0AReply-to: ${formState.email}` : ""}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal>
          <SectionHeader kicker="The Bat-Signal" title="Summon Me" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.div
            className="mt-16 glass-panel glow-border p-8 md:p-14 relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 60px rgba(245,197,24,0.08)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <BatSignal size={400} />
            </div>

            <div className="absolute top-4 left-4 right-4 flex items-center gap-2 font-mono text-[9px] text-[#00C2FF]/50 tracking-widest">
              <Terminal className="w-3 h-3" />
              <span>GOTHAM_SECURE_CHANNEL.exe</span>
              <span className="ml-auto flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F5C518]/60" />
                <span className="w-2 h-2 rounded-full bg-[#00C2FF]/40" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </span>
            </div>

            <div className="relative mt-8">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center leading-relaxed">
                Got a mission for Gotham&apos;s developer? Need a vigilante for your next product,
                hackathon, or open-source crusade? Light the signal — I&apos;m watching.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12">
                {contacts.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 bat-border text-left group"
                  >
                    <motion.div
                      className="p-2 border border-[rgba(0,194,255,0.2)] rounded-sm"
                      whileHover={{
                        boxShadow: "0 0 16px rgba(0,194,255,0.3)",
                        borderColor: "rgba(245,197,24,0.5)",
                      }}
                    >
                      <c.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-[#00C2FF] transition-colors" />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-[10px] tracking-[0.3em] text-[#00C2FF]/60 uppercase font-mono">
                        {c.label}
                      </div>
                      <div className="text-sm text-foreground truncate group-hover:text-primary transition-colors">
                        {c.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#00C2FF]/50 uppercase mb-4 text-center">
                  &gt; Compose encrypted transmission_
                </p>

                {[
                  {
                    id: "name",
                    label: "OPERATIVE_NAME",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                  {
                    id: "email",
                    label: "COMMS_CHANNEL",
                    type: "email",
                    placeholder: "",
                  },
                ].map((field) => (
                  <motion.div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className={`absolute left-4 transition-all duration-300 font-mono text-[9px] tracking-widest pointer-events-none ${
                        focused === field.id || formState[field.id as keyof typeof formState]
                          ? "-top-2 text-primary bg-[#111111] px-1"
                          : "top-3.5 text-muted-foreground"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, [field.id]: e.target.value }))
                      }
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      placeholder=""
                      className="w-full terminal-input px-4 py-3.5 text-sm text-foreground rounded-sm"
                    />
                  </motion.div>
                ))}

                <motion.div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 font-mono text-[9px] tracking-widest pointer-events-none ${
                      focused === "message" || formState.message
                        ? "-top-2 text-primary bg-[#111111] px-1"
                        : "top-3.5 text-muted-foreground"
                    }`}
                  >
                    MISSION_BRIEF
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder=""
                    className="w-full terminal-input px-4 py-3.5 text-sm text-foreground rounded-sm resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 inline-flex items-center justify-center gap-3 px-10 py-4 btn-primary-glow font-display tracking-widest text-sm bat-clip"
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT SIGNAL
                </motion.button>
              </form>

              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:prabal9713@gmail.com"
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors tracking-widest"
                >
                  or direct link: prabal9713@gmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};
