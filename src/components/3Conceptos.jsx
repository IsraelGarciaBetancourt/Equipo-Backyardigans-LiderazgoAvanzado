import { motion } from "framer-motion";
import { Quote, Lightbulb, Sprout, Target } from "lucide-react";

// Datos extraídos exactamente de tus imágenes
const conceptosData = [
  {
    id: "innovacion",
    titulo: "Innovación Social",
    icono: <Lightbulb className="w-8 h-8 text-emerald-500" />,
    colorTema: "emerald",
    autores: [
      {
        nombre: "Hernández-Ascanio (2016)",
        texto: "La innovación social es la introducción de ideas o acciones nuevas que mejoran el bienestar y la cohesión social mediante soluciones efectivas, medibles y que pueden replicarse."
      },
      {
        nombre: "Morales (2008)",
        texto: "La innovación social aprovecha el talento colectivo para resolver problemas, promoviendo la participación y el protagonismo de las personas en su desarrollo."
      }
    ],
    conceptoEquipo: "La innovación social es el proceso de crear cambios novedosos que mejoran el bienestar social, con resultados medibles y personas como protagonistas de su desarrollo."
  },
  {
    id: "emprendimiento",
    titulo: "Emprendimiento Social",
    icono: <Sprout className="w-8 h-8 text-amber-500" />,
    colorTema: "amber",
    autores: [
      {
        nombre: "Zahra, Gedajlovic, Neubaum y Shulman",
        texto: "El emprendimiento social abarca las actividades y procesos para descubrir, definir y explorar las oportunidades con impacto social creando nuevas empresas o administrando organizaciones de una manera innovadora."
      },
      {
        nombre: "Yunus (2013)",
        texto: "Un emprendimiento social es una compañía no orientada a la distribución de dividendos y dedicada totalmente a la solución de un problema social o ambiental determinado."
      }
    ],
    conceptoEquipo: "El emprendimiento social es la creación y gestión innovadora de organizaciones que no buscan repartir dividendos, sino que dedican todos sus recursos a descubrir y solucionar problemas sociales."
  }
];

export default function Conceptos() {
  // Variantes de animación para hacer que los elementos aparezcan en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="min-h-screen py-24 px-4 md:px-8 bg-[#f8fafc] font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Mapeamos los dos grandes bloques: Innovación y Emprendimiento */}
        {conceptosData.map((bloque, index) => (
          <motion.div 
            key={bloque.id}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10"
          >
            {/* Título de la Sección */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 border-b-2 border-gray-200 pb-4">
              <div className={`p-3 bg-${bloque.colorTema}-100 rounded-2xl`}>
                {bloque.icono}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                {bloque.titulo}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Columna Izquierda: Los Autores (Ocupa 7 columnas en desktop) */}
              <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
                <motion.h3 variants={itemVariants} className="text-lg font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  Marco Teórico
                </motion.h3>
                
                {bloque.autores.map((autor, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-100 rotate-180" />
                    <p className="text-gray-700 text-lg leading-relaxed relative z-10 mb-6 font-medium">
                      "{autor.texto}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-2 bg-gray-900 rounded-full"></div>
                      <span className="font-bold text-gray-900">{autor.nombre}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Columna Derecha: Concepto del Equipo (Ocupa 5 columnas en desktop) */}
              <div className="lg:col-span-5 flex h-full">
                <motion.div 
                  variants={itemVariants}
                  // Usamos un gradiente elegante dependiendo del tema
                  className={`w-full h-full p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-center relative overflow-hidden ${
                    bloque.colorTema === 'emerald' 
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-800' 
                      : 'bg-gradient-to-br from-amber-500 to-orange-700'
                  }`}
                >
                  {/* Elemento decorativo de fondo */}
                  <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-white/20">
                      ✨ Concepto del Equipo
                    </div>
                    <p className="text-white text-2xl md:text-3xl font-semibold leading-tight shadow-sm">
                      {bloque.conceptoEquipo}
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}