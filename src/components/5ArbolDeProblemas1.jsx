import { motion } from "framer-motion";
import { ArrowDown, AlertCircle } from "lucide-react";

// Base de datos exacta de tus imágenes (con el duplicado corregido para tener 15 efectos exactos)
const causas = [
  {
    categoria: "Tecnológicas y Digitales",
    color: "bg-purple-100 border-purple-300 text-purple-900",
    items: ["Invisibilidad en plataformas de delivery", "Deficiente marketing digital", "Brecha en métodos de pago", "Ausencia de catálogos virtuales"]
  },
  {
    categoria: "Operativas y de Servicio",
    color: "bg-orange-100 border-orange-300 text-orange-900",
    items: ["Falta de estandarización", "Empaques poco atractivos", "Tiempos de atención prolongados", "Canales de atención deficientes"]
  },
  {
    categoria: "Socioculturales",
    color: "bg-cyan-100 border-cyan-300 text-cyan-900",
    items: ["Percepción de 'estatus'", "Desconfianza en la salubridad", "Publicidad masiva de competidores", "Desconexión generacional"]
  },
  {
    categoria: "Económicas y Estructurales",
    color: "bg-green-100 border-green-300 text-green-900",
    items: ["Falta de capacitación empresarial", "Infraestructura limitada", "Escaso acceso a financiamiento"]
  }
];

const efectos = [
  {
    categoria: "Efectos Económicos",
    color: "bg-blue-100 border-blue-300 text-blue-900",
    items: ["Cierre de MYPEs y negocios tradicionales", "Pérdida de empleos locales", "Fuga de capitales", "Aumento de la informalidad", "Reducción de recaudación fiscal"]
  },
  {
    categoria: "Efectos en el Mercado e Innovación",
    color: "bg-red-100 border-red-300 text-red-900",
    items: ["Monopolización del mercado", "Estancamiento tecnológico local", "Fuga de talento profesional", "Reducción de la variedad de oferta"]
  },
  {
    categoria: "Efectos SocioCulturales",
    color: "bg-yellow-100 border-yellow-300 text-yellow-900",
    items: ["Pérdida de identidad cultural", "Desmotivación emprendedora", "Dependencia del consumidor", "Desvalorización del trabajo artesanal y agrícola"]
  },
  {
    categoria: "Efectos Urbanos y Ambientales",
    color: "bg-lime-100 border-lime-300 text-lime-900",
    items: ["Deterioro de zonas comerciales tradicionales", "Aumento de residuos contaminantes"]
  }
];

export default function ArbolDeProblemas1() {
  // Animación base para que las tarjetas "floten" infinitamente
  const floatingAnimation = (delay) => ({
    y: [8, -8],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay // Desfase para que no floten todas al mismo tiempo
      }
    }
  });

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] font-sans flex flex-col items-center overflow-hidden">
      
      {/* Título Principal (El Problema) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-16 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 text-red-700 rounded-full font-bold uppercase tracking-widest text-sm mb-6 border border-red-200">
          <AlertCircle size={18} /> Problema Central
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 drop-shadow-sm leading-tight">
          El Declive del <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Consumo Local</span>
        </h1>
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col gap-24 relative z-0">
        
        {/* SECCIÓN CAUSAS */}
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-extrabold text-gray-400 mb-8 uppercase tracking-widest pl-6">Raíces (Causas)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causas.map((bloque, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={floatingAnimation(index * 0.4)} // Flotación desfasada
                className={`${bloque.color} border-2 rounded-3xl p-6 shadow-lg flex flex-col h-full`}
              >
                <h3 className="text-xl font-black mb-4 leading-tight">{bloque.categoria}</h3>
                <ul className="flex flex-col gap-3 mt-auto">
                  {bloque.items.map((item, i) => (
                    <li key={i} className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separador Visual (Efecto de Gravedad/Descenso) */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="flex justify-center -my-8 z-10"
        >
          <div className="bg-white p-4 rounded-full shadow-md border border-gray-100 text-gray-400">
            <ArrowDown size={32} />
          </div>
        </motion.div>

        {/* SECCIÓN EFECTOS */}
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-50"></div>
          <h2 className="text-3xl font-extrabold text-gray-400 mb-8 uppercase tracking-widest pl-6">Impacto (Efectos)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {efectos.map((bloque, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={floatingAnimation((index * 0.4) + 0.2)} // Flotación desfasada
                className={`${bloque.color} border-2 rounded-3xl p-6 shadow-lg flex flex-col h-full`}
              >
                <h3 className="text-xl font-black mb-4 leading-tight">{bloque.categoria}</h3>
                <ul className="flex flex-col gap-3 mt-auto">
                  {bloque.items.map((item, i) => (
                    <li key={i} className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}