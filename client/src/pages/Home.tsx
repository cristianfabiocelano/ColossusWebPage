import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    title: "Desarrollo de Software Personalizado",
    description: "Soluciones a medida diseñadas para satisfacer las necesidades específicas de tu negocio.",
    icon: <SiReact className="w-8 h-8" />
  },
  {
    title: "Integración en la Nube",
    description: "Soluciones cloud que escalan con tu negocio y mejoran la productividad.",
    icon: <SiTypescript className="w-8 h-8" />
  },
  {
    title: "Transformación Digital",
    description: "Guía estratégica e implementación para modernizar tus procesos de negocio.",
    icon: <SiTailwindcss className="w-8 h-8" />
  }
];

const team = [
  {
    name: "Ana García",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256"
  },
  {
    name: "Carlos Rodríguez",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256"
  },
  {
    name: "Laura Martínez",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256"
  }
];

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { toast } = useToast();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Fondo dinámico */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(241,90,36,0.3) 0%, rgba(30,61,89,0.3) 100%)",
              "linear-gradient(225deg, rgba(241,90,36,0.3) 0%, rgba(30,61,89,0.3) 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {/* Patrones geométricos animados */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border-2 border-[#F15A24]/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Líneas animadas de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F15A24]/20 to-transparent"
              style={{
                top: `${i * 10}%`,
                left: 0
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mb-20 mt-12"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
              <img
                src="/logo.png"
                alt="Colossus Background"
                className="w-96 h-96"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#F15A24] to-[#1E3D59] relative z-10">
              Transformando Negocios a través de la Tecnología
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Creamos soluciones innovadoras que impulsan el futuro de los negocios.
            Desde software personalizado hasta integración en la nube, somos tu socio
            en la transformación digital.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-[#F15A24] hover:bg-[#F15A24]/90"
              onClick={() => scrollToSection('contact')}
            >
              Comienza Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#F15A24] text-[#F15A24] hover:bg-[#F15A24]/10"
              onClick={() => scrollToSection('services')}
            >
              Conoce Más
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        {/* Fondo dinámico para servicios */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at top right, rgba(241,90,36,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at bottom left, rgba(30,61,89,0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {/* Círculos flotantes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full bg-[#F15A24]/5"
              style={{
                width: 20 + Math.random() * 60,
                height: 20 + Math.random() * 60,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-[#F15A24]/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center text-[#F15A24]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
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
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(120deg, rgba(30,61,89,0.1) 0%, transparent 50%, rgba(241,90,36,0.1) 100%)",
              "linear-gradient(240deg, rgba(30,61,89,0.1) 0%, transparent 50%, rgba(241,90,36,0.1) 100%)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {/* Patrones de red */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`network-${i}`}
              className="absolute w-1 h-1 bg-[#1E3D59]/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [1, 3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>

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
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-[#F15A24]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-[#F15A24]">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        {/* Fondo dinámico para contacto - sin cambios */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "conic-gradient(from 0deg at 50% 50%, rgba(241,90,36,0.1) 0%, rgba(30,61,89,0.1) 50%, rgba(241,90,36,0.1) 100%)",
              "conic-gradient(from 360deg at 50% 50%, rgba(241,90,36,0.1) 0%, rgba(30,61,89,0.1) 50%, rgba(241,90,36,0.1) 100%)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Ondas animadas - sin cambios */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#F15A24]/10 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                transform: "scaleY(20)",
                filter: "blur(8px)"
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1
              }}
            />
          ))}
        </motion.div>

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
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name: formData.get('name'),
                          email: formData.get('email'),
                          message: formData.get('message'),
                        }),
                      });

                      if (response.ok) {
                        toast({
                          title: "¡Mensaje enviado!",
                          description: "Gracias por contactarnos. Te responderemos pronto.",
                        });
                        form.reset();
                      } else {
                        const data = await response.json();
                        throw new Error(data.message || 'Error al enviar el mensaje');
                      }
                    } catch (error) {
                      toast({
                        variant: "destructive",
                        title: "Error",
                        description: error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
                      });
                    }
                  }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="border-[#F15A24]/20 focus:border-[#F15A24] focus:ring-[#F15A24]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-[#F15A24]/20 focus:border-[#F15A24] focus:ring-[#F15A24]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="min-h-[100px] border-[#F15A24]/20 focus:border-[#F15A24] focus:ring-[#F15A24]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F15A24] hover:bg-[#F15A24]/90"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}