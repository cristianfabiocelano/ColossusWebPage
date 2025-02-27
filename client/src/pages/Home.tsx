
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Transformamos tus ideas en soluciones de software escalables y de alta calidad que impulsan tu negocio hacia adelante.",
    icon: "💻",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento experto para optimizar tus procesos de negocio a través de tecnologías innovadoras.",
    icon: "🔍",
  },
  {
    title: "Cloud Computing",
    description:
      "Soluciones en la nube que ofrecen flexibilidad, escalabilidad y reducción de costos operativos.",
    icon: "☁️",
  },
  {
    title: "Ciberseguridad",
    description:
      "Protegemos tus activos digitales con estrategias de seguridad robustas y proactivas.",
    icon: "🔒",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Implementamos soluciones de IA para automatizar tareas, analizar datos y obtener insights valiosos.",
    icon: "🤖",
  },
  {
    title: "Desarrollo Web y Móvil",
    description:
      "Creamos experiencias digitales atractivas y funcionales para web y dispositivos móviles.",
    icon: "📱",
  },
];

const team = [
  {
    name: "Ana García",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256",
    bio: "Ana es una desarrolladora experimentada con más de 10 años de experiencia en desarrollo web. Su enfoque metódico y orientado a soluciones ha sido clave en numerosos proyectos exitosos.",
    skills: ["JavaScript", "React", "Node.js", "AWS", "Arquitectura de software"]
  },
  {
    name: "Carlos Rodríguez",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256",
    bio: "Carlos es un experto en infraestructura cloud con profundo conocimiento en soluciones escalables y altamente disponibles. Su pasión por la optimización de recursos ha generado ahorros significativos para nuestros clientes.",
    skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"]
  },
  {
    name: "Laura Martínez",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256",
    bio: "Laura lidera nuestros equipos técnicos con su visión estratégica y profundo conocimiento del mercado. Su capacidad para traducir necesidades de negocio en soluciones técnicas es excepcional.",
    skills: ["Gestión de proyectos", "Estrategia digital", "UX/UI", "Business Intelligence", "Metodologías ágiles"]
  },
];

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar el formulario",
      });
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        {/* Background Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(241,90,36,0.2) 0%, rgba(30,61,89,0.1) 100%)",
          }}
        />

        {/* Dynamic Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-[#F15A24]/20"
              initial={{ 
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Título con logo de fondo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 flex justify-center items-center opacity-10">
                <img
                  src="/logo.png"
                  alt="Colossus Logo Background"
                  className="w-60 h-60 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight relative z-10">
                Transformando Negocios a través de la Tecnología
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Soluciones innovadoras para el mundo digital de hoy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#F15A24] hover:bg-[#F15A24]/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contactar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24]/10 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Nuestros Servicios
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Fondo dinámico para servicios */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,61,89,0.1) 0%, transparent 50%, rgba(241,90,36,0.1) 100%)",
          }}
        />

        {/* Patrones geométricos */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-[#F15A24]/10 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, 90, 180, 270, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformOrigin: "center",
            }}
          />
        ))}

        <div className="container px-4 mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F15A24]"
          >
            Nuestros Servicios
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F15A24] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#F15A24]/5 relative overflow-hidden">
        {/* Fondo dinámico para equipo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(30,61,89,0.1) 0%, transparent 50%, rgba(241,90,36,0.1) 100%)",
          }}
        />

        {/* Patrones de red */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`network-${i}`}
            className="absolute w-1 h-1 bg-[#1E3D59]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 3, 1] }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="container px-4 mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F15A24]"
          >
            Nuestro Equipo
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow border-[#F15A24]/20 group">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <CardContent className="p-6 text-center">
                          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                          <p className="text-[#F15A24]">{member.role}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium">Habilidades clave:</h5>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-[#F15A24]/10 text-[#F15A24] hover:bg-[#F15A24]/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Fondo dinámico para contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(241,90,36,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Elementos decorativos */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-[#F15A24]/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 1.5, 0.5],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0] 
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}

        <div className="container px-4 mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#F15A24]"
          >
            Contacto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center"
          >
            ¿Listo para transformar tu negocio? Contáctanos hoy mismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <Card className="border-[#F15A24]/20">
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tu@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿Cómo podemos ayudarte?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#F15A24] hover:bg-[#F15A24]/90"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
