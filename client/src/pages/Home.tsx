import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

export default function Home() {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

  // Variables para la opacidad y escala dependiendo del scroll
  const opacityServicesSection = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacityAboutSection = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacityTeamSection = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacityContactSection = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Información del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Alejandro Laborde",
      role: "Desarrollador Frontend",
      image: "/attached_assets/Alejandro_Laborde.jpg",
      description: "Experto en React y desarrollo de interfaces de usuario.  Pasión por la creación de experiencias digitales atractivas.",
      skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX"]
    },
    {
      id: 2,
      name: "Cristian Celano",
      role: "Co-Founder y Proyect Management Professional (PMP)",
      image: "/attached_assets/Cristian_Celano.jpg",
      description: "Profesional con una vasta trayectoria en análisis y automatización de negocios, especializado en escalabilidad de negocios a través de la tecnología.",
      skills: ["RPA", "Análisis", "Python", "Automatizaciones", "Empatía"]
    },
    {
      id: 3,
      name: "Matias Palmieri",
      role: "Diseñador UX/UI",
      image: "/attached_assets/Matias_Palmieri.jpg",
      description: "Experiencia en diseño centrado en el usuario.  Crea interfaces intuitivas y atractivas para mejorar la experiencia digital.",
      skills: ["Figma", "Sketch", "Adobe XD", "UI Design", "UX Research"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Barra de navegación - mantiene estilo original */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Colossus" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-[#F15A24] transition-colors text-sm font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="text-gray-700 hover:text-[#F15A24] transition-colors text-sm font-medium"
              >
                Equipo
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-[#F15A24] transition-colors text-sm font-medium"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-[#F15A24] hover:bg-[#F15A24]/90 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Comienza Ahora
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Fondo dinámico */}
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
          {/* Patrones geométricos animados con mayor nitidez */}
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

          {/* Líneas animadas de fondo con mayor nitidez */}
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

        {/* Contenido del Hero */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Título con logo como fondo */}
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
      <motion.section
        ref={servicesRef}
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
            {/* Servicio 1 */}
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

            {/* Servicio 2 */}
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

            {/* Servicio 3 */}
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

      {/* About Section */}
      <motion.section
        ref={aboutRef}
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
                Somos un equipo de profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes. Desde nuestra fundación, hemos trabajado con empresas de diversos sectores, ayudándoles a alcanzar sus objetivos mediante soluciones tecnológicas innovadoras.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro enfoque se centra en comprender a fondo las necesidades específicas de cada negocio para ofrecer soluciones personalizadas que generen un impacto real y duradero.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-[#F15A24] font-bold text-2xl">+5700</div>
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

      {/* Team Section */}
      <motion.section
        ref={teamRef}
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
                  {/* Imagen con overlay gradual al expandir */}
                  <motion.div 
                    className="relative aspect-square overflow-hidden group"
                    animate={isExpanded ? { height: "200px" } : { height: "auto" }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    {/* Quote bubble that appears on hover */}
                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-6 right-6 max-w-[85%] bg-white/95 p-4 rounded-lg shadow-xl transform transition-all duration-300 scale-95 group-hover:scale-100 origin-bottom-right z-20 border-l-4 border-[#F15A24]">
                      {/* Pequeña flecha para el globo de diálogo */}
                      <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
                      <p className="text-sm md:text-base font-medium text-[#1E3D59] italic relative z-10">
                        {member.id === 1 && '"Puedo solucionar cualquier problema"'}
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

                  {/* Contenido de la tarjeta */}
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

                      {/* Contenido expandible */}
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

                  {/* Indicador de expandir/colapsar */}
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

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#1E3D59] mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                      placeholder="Tu email"
                    />                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <Button
                  className="w-full bg-[#F15A24] hover:bg-[#F15A24]/90"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Mensaje enviado",
                      description: "Gracias por contactarnos. Te responderemos a la brevedad.",
                    });
                  }}
                >
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A24]/20 p-3 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#F15A24]">Ubicación</h4>
                    <p className="text-gray-300">Av. Principal 123, Ciudad Empresarial</p>
                    <p className="text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A24]/20 p-3 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#F15A24]">Llámanos</h4>
                    <p className="text-gray-300">+54 11 1234 5678</p>
                    <p className="text-gray-300">+54 11 8765 4321</p>
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
                    <p className="text-gray-300">info@tuempresa.com</p>
                    <p className="text-gray-300">soporte@tuempresa.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F15A24]/20 p-3 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#F15A24]">Horario de Atención</h4>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-[#F15A24] mb-4">Síguenos en las redes</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0e2135] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
              <p className="text-gray-400 mb-4">
                Transformando negocios a través de soluciones tecnológicas innovadoras y personalizadas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                    </svg>
                  </a>
                </div>
              </div>
          </div>
        

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}