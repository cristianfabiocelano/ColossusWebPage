import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent, error

  useEffect(() => {
    // Inicializa EmailJS con tu public key
    emailjs.init("KudlS38jPyllzbrvQ");
    console.log("EmailJS inicializado correctamente");
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      services: servicesRef,
      about: aboutRef,
      team: teamRef,
      contact: contactRef,
    };

    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const opacityServicesSection = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacityAboutSection = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacityTeamSection = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacityContactSection = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const teamMembers = [
    {
      id: 1,
      name: "Alejandro Laborde",
      role: "Co-funder & Bussiness Process integration",
      image: "/attached_assets/Alejandro_Laborde.jpg",
      description: "Profesional en automatización de procesos empresariales e integraciones. Pasión por la creación e implementación de soluciones",
      skills: ["Java", "BPM", "IA", "Resolutivo", "Analisis"]
    },
    {
      id: 2,
      name: "Cristian Celano",
      role: "Co-Founder & Proyect Management Professional (PMP)",
      image: "/attached_assets/Cristian_Celano.jpg",
      description: "Profesional con una vasta trayectoria en análisis y automatización de negocios, especializado en escalabilidad de negocios a través de la tecnología.",
      skills: ["RPA", "Análisis", "Python", "Automatizaciones", "Empatía"]
    },
    {
      id: 3,
      name: "Matias Palmieri",
      role: "Co-Funder & Front-End Developer",
      image: "/attached_assets/Matias_Palmieri.jpg",
      description: "Experto en Angular y desarrollo de interfaces de usuario. Pasión por la creación de experiencias digitales atractivas.",
      skills: ["Swift", "Kotlin", "Angular", "CI/CD", "Javascript"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Para propósitos de depuración - muestra los valores del formulario
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Datos del formulario:", formValues);
    
    // Construir explícitamente los parámetros que necesita la plantilla
    const templateParams = {
      from_name: formValues.name,
      from_email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
      to_email: 'somoscolossus@gmail.com' // Asegura que este email esté incluido en la plantilla
    };
    
    // Para debugging
    console.log("Datos del formulario enviados a EmailJS:", templateParams);

    // Enviar email con EmailJS
    emailjs.send('service_pe7jnrr', 'template_59hssfx', templateParams, 'KudlS38jPyllzbrvQ')
      .then((result) => {
        console.log('Email enviado con éxito:', result.text);
        setFormStatus('sent');
        e.target.reset();
        toast({
          title: "Mensaje enviado",
          description: "Hemos recibido tu mensaje. Te responderemos a la brevedad.",
        });
        setTimeout(() => setFormStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
        setFormStatus('error');
        toast({
          variant: "destructive",
          title: "Error al enviar",
          description: "No pudimos enviar tu mensaje. Por favor intenta nuevamente.",
        });
        setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  return (
    <div className="min-h-screen">
      {/* Espacio vacío para compensar el navbar */}
      <div className="h-20"></div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: 1,
            background: [
              "linear-gradient(45deg, rgba(241,90,36,0.3) 0%, rgba(30,61,89,0.3) 100%)",
              "linear-gradient(225deg, rgba(241,90,36,0.3) 0%, rgba(30,61,89,0.3) 100%)"
            ]
          }}
          transition={{
            opacity: { duration: 1.5 },
            background: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }
          }}
        >
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border-2 border-[#F15A24]/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#F15A24]/30 to-transparent"
                style={{
                  top: `${i * 10}%`,
                  left: 0
                }}
                initial={{ opacity: 0, x: '-100%' }}
                animate={{
                  opacity: 1,
                  x: ['-100%', '100%']
                }}
                transition={{
                  opacity: { duration: 1 },
                  x: {
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5
                  }
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <img
                  src="/logo.png"
                  alt="Logo background"
                  className="w-96 h-auto object-contain opacity-70"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#1E3D59] relative z-10">
                Transformando Negocios a través de la Tecnología
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Soluciones digitales innovadoras que impulsan el crecimiento de tu empresa
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center mt-20"
          >
            <p className="text-[#F15A24] font-medium text-xl mb-2">Conocenos</p>
            <motion.div
              className="cursor-pointer"
              onClick={() => scrollToSection('services')}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#F15A24" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        id="services"
        style={{ opacity: opacityServicesSection }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#1E3D59] mb-4"
            >
              Nuestros Servicios
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-[#F15A24] mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Ofrecemos soluciones tecnológicas integrales diseñadas para potenciar el crecimiento y la eficiencia de tu negocio.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="bg-[#F15A24]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F15A24]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E3D59] mb-3">Desarrollo Web y Móvil</h3>
              <p className="text-gray-600 mb-4">Creamos aplicaciones web y móviles a medida que satisfacen las necesidades específicas de tu empresa, mejorando la experiencia del usuario.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">React</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Vue.js</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Angular</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Flutter</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="bg-[#F15A24]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F15A24]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E3D59] mb-3">Consultoría IT</h3>
              <p className="text-gray-600 mb-4">Brindamos asesoramiento estratégico para optimizar tus procesos tecnológicos, aumentar la eficiencia y reducir costos operativos.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Estrategia Digital</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Optimización</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Análisis</Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="bg-[#F15A24]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F15A24]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E3D59] mb-3">Soluciones Cloud</h3>
              <p className="text-gray-600 mb-4">Diseñamos e implementamos arquitecturas en la nube que proporcionan escalabilidad, seguridad y accesibilidad a tus datos y aplicaciones.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">AWS</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Azure</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">Google Cloud</Badge>
                <Badge variant="outline" className="border-[#F15A24] text-[#F15A24]">DevOps</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={aboutRef}
        id="about"
        style={{ opacity: opacityAboutSection }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3D59] mb-4">Sobre Nosotros</h2>
              <div className="h-1 w-20 bg-[#F15A24] mb-6"></div>
              <p className="text-gray-600 mb-6">
                Somos un equipo de profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes. Desde nuestra consultora, hemos trabajado con empresas de diversos sectores, ayudándoles a alcanzar sus objetivos mediante soluciones tecnológicas innovadoras.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro enfoque se centra en comprender a fondo las necesidades específicas de cada negocio para ofrecer soluciones personalizadas que generen un impacto real y duradero.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#F15A24] font-bold text-2xl">5700+</div>
                  <div className="text-gray-600">Horas de trabajo ahorrado a los clientes</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#F15A24] font-bold text-2xl">95%</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#F15A24] font-bold text-2xl">10+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#F15A24] font-bold text-2xl">24/7</div>
                  <div className="text-gray-600">Soporte Técnico</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Nuestro equipo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F15A24]/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1E3D59]">Comprometidos con la calidad</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={teamRef}
        id="team"
        style={{ opacity: opacityTeamSection }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#1E3D59] mb-4"
            >
              Nuestro Equipo
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-[#F15A24] mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Conoce a los profesionales que hacen posible nuestra misión de transformar negocios a través de la tecnología.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const [isExpanded, setIsExpanded] = useState(false);

              return (
                <motion.div
                  key={member.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  animate={isExpanded ? {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    y: -5
                  } : {}}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 flex flex-col cursor-pointer"
                >
                  <motion.div 
                    className="relative aspect-square overflow-hidden group"
                    animate={isExpanded ? { height: "200px" } : { height: "auto" }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-6 right-6 max-w-[85%] bg-white/95 p-4 rounded-lg shadow-xl transform transition-all duration-300 scale-95 group-hover:scale-100 origin-bottom-right z-20 border-l-4 border-[#F15A24]">
                      <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
                      <p className="text-sm md:text-base font-medium text-[#1E3D59] italic relative z-10">
                        {member.id === 1 && '"Si no automatizas tu negocio, estas perdiendo tiempo"'}
                        {member.id === 2 && '"Encontraremos la manera de cumplir tu sueño"'}
                        {member.id === 3 && '"Sé una forma innovadora de hacerlo"'}
                      </p>
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#1E3D59]/80 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isExpanded ? 0.7 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <div className="p-6 flex-grow relative z-10">
                    <motion.div
                      layout
                      className="flex flex-col"
                    >
                      <motion.h3 
                        layout="position"
                        className={`text-xl font-bold ${isExpanded ? "text-[#F15A24]" : "text-[#1E3D59]"} transition-colors duration-300`}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        layout="position"
                        className="text-gray-600 font-medium"
                      >
                        {member.role}
                      </motion.p>

                      <motion.div
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: isExpanded ? 1 : 0,
                          height: isExpanded ? "auto" : "0px"
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          initial={{ y: 20 }}
                          animate={{ y: isExpanded ? 0 : 20 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="w-12 h-1 bg-[#F15A24] my-4"></div>
                          <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                          <div className="mt-4">
                            <p className="font-medium text-[#1E3D59] mb-3">Habilidades clave:</p>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                  <Badge 
                                    variant="outline" 
                                    className="border-[#F15A24] text-[#F15A24] bg-[#F15A24]/5 py-1 px-3"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="absolute bottom-3 right-3 z-20 bg-white rounded-full p-1 shadow-md"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isExpanded ? "text-[#F15A24]" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={contactRef}
        id="contact"
        style={{ opacity: opacityContactSection }}
        className="py-20 bg-[#1E3D59]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Contáctanos
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-[#F15A24] mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 max-w-3xl mx-auto"
            >
              ¿Listo para transformar tu negocio? Ponte en contacto con nosotros y comencemos a trabajar juntos en tu próximo proyecto.
            </motion.p>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-xl max-w-3xl w-full mb-12"
            >
              <h3 className="text-2xl font-bold text-[#1E3D59] mb-6 text-center">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                      placeholder="Tu email"
                      required
                    />                  
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                    rows={5}
                    placeholder="Tu mensaje"
                    required
                  ></textarea>
                </div>
                <input type="hidden" name="to_email" value="somoscolossus@gmail.com" />
                {formStatus === 'sending' && (
                  <p className="text-blue-600 text-center">Enviando mensaje...</p>
                )}
                {formStatus === 'sent' && (
                  <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 text-center">Error al enviar el mensaje. Intenta nuevamente.</p>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#F15A24] text-white rounded-md hover:bg-[#F15A24]/90 transition-colors duration-300 w-full md:w-auto"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white bg-[#1E3D59]/40 p-8 rounded-lg max-w-3xl w-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Información de Contacto</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A24]/20 p-3 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#F15A24]">Llámanos</h4>
                    <p className="text-gray-300">+54 9 11 5823-2588</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A24]/20 p-3 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#F15A24]">Email</h4>
                    <p className="text-gray-300">somoscolossus@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <footer className="bg-[#0e2135] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
              <p className="text-gray-400 mb-4">
                Transformando negocios a través de soluciones tecnológicas innovadoras y personalizadas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Desarrollo Web y Móvil
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Consultoría IT
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Soluciones Cloud
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => {
                      e.preventDefault();
                      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a 
                    href="#team" 
                    onClick={(e) => {
                      e.preventDefault();
                      teamRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Carreras
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contáctanos</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Teléfono
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Colossus. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}