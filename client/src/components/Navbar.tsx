import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/logo.png" 
            alt="Colossus Logo" 
            className="h-8 w-auto"
            style={{ objectFit: 'contain' }}
          />
          <img 
            src="/nombre.png" 
            alt="Colossus" 
            className="h-6 w-auto"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/80 hover:text-[#F15A24] transition-colors">
            Servicios
          </a>
          <a href="#team" className="text-foreground/80 hover:text-[#F15A24] transition-colors">
            Equipo
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-[#F15A24] transition-colors">
            Contacto
          </a>
          <Button 
            className="bg-[#F15A24] hover:bg-[#F15A24]/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comienza Ahora
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}