import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b shadow-sm"
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src="/logo.png" 
            alt="Colossus Logo" 
            className="h-10 w-auto"
            style={{ objectFit: 'contain' }}
          />
          <img 
            src="/nombre.png" 
            alt="Colossus" 
            className="h-7 w-auto"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/80 hover:text-[#F15A24] transition-colors text-sm uppercase tracking-wide font-medium"
          >
            Servicios
          </a>
          <a 
            href="#team" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/80 hover:text-[#F15A24] transition-colors text-sm uppercase tracking-wide font-medium"
          >
            Equipo
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/80 hover:text-[#F15A24] transition-colors text-sm uppercase tracking-wide font-medium"
          >
            Contacto
          </a>
          <Button 
            className="bg-[#F15A24] hover:bg-[#F15A24]/90 shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comienza Ahora
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}