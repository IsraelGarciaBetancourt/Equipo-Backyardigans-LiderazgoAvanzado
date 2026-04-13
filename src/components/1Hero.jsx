import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const grupo = {
    nombre: "Los Backyardigans",
    integrantes: [
      { nombre: "Benites Fierro Alexander Aiken", porcentaje: 100, foto: "/images/sem04/Integrante_1.png" },
      { nombre: "Ccente Mejia Jose Carlos", porcentaje: 100, foto: "/images/sem04/Integrante_2.png" },
      { nombre: "Espinoza Paucar Karen Yeny", porcentaje: 100, foto: "/images/sem04/Integrante_3.png" },
      { nombre: "Crispin Bendezu Rick Bernie", porcentaje: 100, foto: "/images/sem04/Integrante_4.png" },
      { nombre: "García Betancourt Israel", porcentaje: 100, foto: "/images/sem04/Integrante_5.png" },
      { nombre: "Veliz Durand Vieri Del Piero", porcentaje: 100, foto: "/images/sem04/Integrante_6.png" },
    ],
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -500) {
      setCurrentIndex((prev) => Math.min(prev + 1, grupo.integrantes.length - 1));
    } else if (swipe > 50 || velocity.x > 500) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const containerVariantsDesktop = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  
  const personVariantsDesktop = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  return (
    <section className="h-[100dvh] w-full bg-[#050b14] font-sans overflow-hidden relative flex flex-col items-center justify-between">
      
      {/* =========================================
          NUEVO FONDO: IMAGEN + OVERLAY OSCURO
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* La imagen de fondo */}
        <img 
          src="/images/sem04/UContinental.png" 
          alt="Universidad Continental" 
          className="w-full h-full object-cover opacity-40" // opacity-40 para que no sea tan brillante y permita leer el texto
        />
        {/* Degradado oscuro encima para darle profundidad y oscurecer los bordes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] via-[#050b14]/50 to-[#050b14]" />
        {/* La cuadrícula sutil que le daba el toque tecnológico */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* TÍTULO COMPARTIDO */}
      <div className="absolute top-12 left-0 w-full z-20 px-4 pointer-events-none flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight"
        >
          {grupo.nombre}
        </motion.h1>
        <p className="text-center text-slate-300 text-[10px] md:text-xs mt-3 tracking-[0.25em] uppercase font-semibold drop-shadow-md">
          <span className="md:hidden">Desliza para explorar</span>
          <span className="hidden md:inline">Pasa el cursor sobre un miembro</span>
        </p>
      </div>

      {/* =========================================
          VISTA 1: CARRUSEL 3D PREMIUM (SOLO MÓVIL)
          ========================================= */}
      <div className="flex md:hidden absolute bottom-0 left-0 w-full h-[80vh] justify-center items-end perspective-[1200px] pointer-events-none z-10">
        {grupo.integrantes.map((integrante, index) => {
          const isCenter = currentIndex === index;
          const offset = index - currentIndex;

          return (
            <motion.div
              key={`mobile-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              onClick={() => setCurrentIndex(index)}
              animate={{
                x: `${offset * 80}%`, 
                scale: isCenter ? 1 : 0.75,
                opacity: Math.abs(offset) > 1 ? 0 : isCenter ? 1 : 0.5,
                rotateY: offset * -35,
                zIndex: 20 - Math.abs(offset),
                filter: isCenter ? "grayscale(0%) blur(0px)" : "grayscale(80%) blur(2px)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className={`absolute bottom-0 flex flex-col items-center justify-end w-[65vw] h-full pointer-events-auto ${
                isCenter ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              }`}
            >
              <div className="relative w-full flex flex-col items-center justify-end">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isCenter ? 1 : 0,
                    y: isCenter ? 0 : 20,
                    scale: isCenter ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3, delay: isCenter ? 0.1 : 0 }}
                  className="absolute bottom-full flex flex-col items-center pointer-events-none mb-2 z-30"
                >
                  <div className="flex items-start drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    <span className="text-6xl font-black text-white tracking-tighter">
                      {integrante.porcentaje}
                    </span>
                    <span className="text-xl font-bold text-slate-300 mt-2">%</span>
                  </div>
                  <h3 className="font-bold text-[11px] text-center text-white mt-1 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 max-w-[200px]">
                    {integrante.nombre}
                  </h3>
                </motion.div>

                <div className="relative w-full flex justify-center items-end">
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                    draggable="false"
                    className="w-full h-auto max-h-[70vh] object-bottom object-contain drop-shadow-2xl pointer-events-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050b14] via-[#050b14]/60 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex md:hidden absolute bottom-6 gap-2 z-30 pointer-events-auto">
        {grupo.integrantes.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              currentIndex === index ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "w-2 bg-slate-600 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* =========================================
          VISTA 2: GRUPO SUPERPUESTO HOVER (SOLO ESCRITORIO)
          ========================================= */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full justify-center items-end z-10 pointer-events-none h-[75vh]">
        <motion.div
          variants={containerVariantsDesktop}
          initial="hidden"
          animate="visible"
          className="flex w-full h-full justify-center items-end -space-x-16 lg:-space-x-24"
        >
          {grupo.integrantes.map((integrante, index) => (
            <motion.div
              key={`desktop-${index}`}
              variants={personVariantsDesktop}
              className="relative group h-full flex justify-center items-end pointer-events-auto cursor-pointer"
            >
              <div className="relative flex flex-col items-center justify-end h-full">
                
                <div className="absolute bottom-full flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:-translate-y-2 z-30 pointer-events-none w-max max-w-[200px] mb-4">
                  <div className="flex items-start drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    <span className="text-6xl font-black text-white tracking-tighter">
                      {integrante.porcentaje}
                    </span>
                    <span className="text-2xl font-bold text-slate-300 mt-2">%</span>
                  </div>
                  <h3 className="font-bold text-sm text-center text-white mt-1 max-w-[250px] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    {integrante.nombre}
                  </h3>
                </div>

                <div className="relative w-auto flex justify-center items-end h-[60vh] lg:h-[70vh]">
                  <img
                    src={integrante.foto}
                    alt={integrante.nombre}
                    className="w-auto h-full object-bottom object-contain transition-transform duration-500 ease-out group-hover:scale-105 origin-bottom grayscale-[25%] group-hover:grayscale-0 relative z-10 hover:z-20"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050b14] via-[#050b14]/50 to-transparent pointer-events-none z-10" />
                </div>
                
              </div>
              <div className="absolute bottom-[100%] w-32 h-32 bg-slate-700/50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}