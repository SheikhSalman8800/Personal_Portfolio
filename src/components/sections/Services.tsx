"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            What I <span className="gradient-text">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            I provide specialized services in web development and AI-driven automation to help businesses scale and optimize their operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl glass-card border-foreground/5 hover:border-primary/40 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                <service.icon size={30} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Details List */}
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-foreground/70">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
