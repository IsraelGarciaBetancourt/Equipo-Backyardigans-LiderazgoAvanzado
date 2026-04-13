import { motion } from "framer-motion";

export default function Hero() {
  const grupo = {
    nombre: "Los Backyardigans",
    integrantes: [
      {
        nombre: "Benites Fierro Alexander Aiken",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_1.png",
      },
      {
        nombre: "Ccente Mejia Jose Carlos",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_2.png",
      },
      {
        nombre: "Espinoza Paucar Karen Yeny",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_3.png",
      },
      {
        nombre: "Crispin Bendezu Rick Bernie",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_4.png",
      },
      {
        nombre: "García Betancourt Israel",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_5.png",
      },
      {
        nombre: "Veliz Durand Vieri Del Piero",
        porcentaje: 100,
        foto: "public/images/sem04/Integrante_6.png",
      },
    ],
  };

  // Animación del contenedor: controla el orden de entrada
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  // Animación de cada persona: inician fuera de la pantalla (abajo) y suben
  const personVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section className="h-screen w-full bg-slate-950 font-sans overflow-hidden relative flex flex-col justify-between">
      {/* Fondo Profesional: Patrón de cuadrícula sutil y brillo superior elegante */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-[-10%] z-0 m-auto h-[300px] w-[600px] rounded-full bg-slate-400/10 blur-[120px] pointer-events-none" />

      {/* TÍTULO - Flotando en la parte superior */}
      <div className="absolute top-12 left-0 w-full z-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight drop-shadow-sm"
        >
          {grupo.nombre}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-slate-500 text-xs md:text-sm mt-4 font-medium tracking-[0.2em] uppercase"
        >
          Pasa el cursor sobre un miembro
        </motion.p>
      </div>

      {/* CONTENEDOR DE PERSONAS */}
      <div className="absolute bottom-0 left-0 w-full h-[75vh] flex justify-center items-end z-10 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full h-full justify-center items-end px-0 -space-x-8 md:-space-x-16 lg:-space-x-24"
        >
          {grupo.integrantes.map((integrante, index) => (
            <motion.div
              key={index}
              variants={personVariants}
              className="relative group h-full flex justify-center items-end pointer-events-auto cursor-pointer"
            >
              {/* LA FOTO LIMPITA */}
              <img
                src={integrante.foto}
                alt={integrante.nombre}
                className="max-h-full w-auto object-bottom object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-4 origin-bottom grayscale-[25%] group-hover:grayscale-0 relative z-10 hover:z-20"
              />

              {/* DATOS FLOTANTES */}
              <div className="absolute bottom-[40%] flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0 z-30 pointer-events-none w-max max-w-[200px]">
                {/* Porcentaje */}
                <div className="flex items-start drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  <span className="text-6xl font-black text-white tracking-tighter">
                    {integrante.porcentaje}
                  </span>
                  <span className="text-2xl font-bold text-slate-300 mt-2">%</span>
                </div>

                {/* Nombre */}
                <h3 className="font-bold text-sm text-center tracking-tight leading-snug text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mt-1">
                  {integrante.nombre}
                </h3>
              </div>

              {/* Brillo/Sombra detrás del texto */}
              <div className="absolute bottom-[35%] w-32 h-32 bg-slate-700/40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
