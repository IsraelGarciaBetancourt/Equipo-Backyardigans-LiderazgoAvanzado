import { motion } from "framer-motion";

export default function Hero() {
  const grupo = {
    nombre: "Los Backyardigans",
    foto: "https://via.placeholder.com/800x600?text=Foto+del+Grupo", 
    integrantes: [
      { nombre: "Benites Fierro Alexander Aiken", porcentaje: 100 },
      { nombre: "Ccente Mejia Jose Carlos", porcentaje: 100 },
      { nombre: "Espinoza Paucar Karen Yeny ", porcentaje: 100 },
      { nombre: "Crispin Bendezu Rick Bernie", porcentaje: 100 },
      { nombre: "García Betancourt Israel", porcentaje: 100 },
      { nombre: "Veliz Durand Vieri Del Piero", porcentaje: 100 },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-gray-50 font-sans">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-12 items-center">
        
        {/* Columna Izquierda: Foto del Grupo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img src={grupo.foto} alt="Foto del Grupo" className="w-full h-auto block object-cover" />
        </motion.div>

        {/* Columna Derecha: Información */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-6 w-full"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {grupo.nombre}
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col gap-5 mt-4">
            <h3 className="text-xl text-gray-500 font-medium border-b pb-2">Integrantes y Participación</h3>
            
            {grupo.integrantes.map((integrante, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800 text-lg">{integrante.nombre}</span>
                  <span className="font-bold text-blue-500">{integrante.porcentaje}%</span>
                </div>
                {/* Barra de progreso visual */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${integrante.porcentaje}%` }}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.2) }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}