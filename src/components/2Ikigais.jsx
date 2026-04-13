import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User } from "lucide-react";

const teamData = [
  {
    id: 1,
    name: "Benites Fierro Alexander Aiken",
    resumen: "Desarrollar soluciones tecnológicas y proyectos de software que optimicen empresas, aplicando mis habilidades en desarrollo web y ciberseguridad para generar un impacto digital positivo.",
    circles: {
      apasiona: ["Diseño de interfaces (UI/UX)", "Programación y creación de sistemas", "Automatización y Renderizado", "Resolución de problemas"],
      mundo: ["Innovación disruptiva", "Mejora de la calidad en productos locales", "Transformación digital en empresas"],
      pagar: ["Consultoría en Tecnología", "Especialista en Ciberseguridad o Data Science", "Desarrollo Full-stack", "Liderazgo de Startups"],
      bueno: ["Desarrollo Web y Arquitectura de Software", "Organización de Proyectos", "Aprendizaje Continuo e Investigación", "Aprendizaje rápido y creatividad"]
    },
    intersections: {
      pasion: ["Diseño de interfaces (UI/UX)", "Programación y creación de sistemas", "Automatización y Renderizado", "Resolución de problemas"],
      mision: ["Innovación disruptiva", "Mejora de estándares de productos", "Transformación digital"],
      profesion: ["Consultoría en Tecnología", "Ciberseguridad y Data Science", "Desarrollo Full-stack", "Liderazgo de Startups"],
      vocacion: ["Desarrollo Web y Arquitectura", "Organización de Proyectos", "Aprendizaje e investigación", "Aprendizaje rápido y creatividad"]
    }
  },
  {
    id: 2,
    name: "Ccente Mejia Jose Carlos",
    resumen: "Desarrollar soluciones tecnológicas innovadoras que resuelvan problemas reales, combinando mi habilidad en programación y sistemas para generar ingresos y contribuir activamente a la transformación digital de la sociedad.",
    circles: {
      apasiona: ["Resolver problemas complejos", "Crear software útil", "Aprender nuevas tecnologías", "Automatizar procesos", "Innovar con herramientas digitales"],
      mundo: ["Soluciones tecnológicas eficientes", "Automatización en empresas", "Transformación digital", "Acceso a plataformas digitales útiles"],
      pagar: ["Desarrollo de software", "Consultoría tecnológica", "Administración de sistemas", "Soporte técnico especializado"],
      bueno: ["Programación (backend, frontend o full stack)", "Análisis de sistemas", "Diseño de arquitecturas tecnológicas", "Pensamiento lógico y crítico"]
    },
    intersections: {
      pasion: ["Crear y mejorar sistemas que resuelvan problemas reales mediante el uso de tecnología."],
      mision: ["Desarrollar soluciones tecnológicas innovadoras que optimicen procesos y mejoren la vida de las personas."],
      profesion: ["Ingeniero de sistemas especializado en desarrollo, implementación y gestión de soluciones tecnológicas."],
      vocacion: ["Aplicar mis habilidades tecnológicas para contribuir al progreso digital de empresas y sociedad."]
    }
  },
  {
    id: 3,
    name: "Espinoza Paucar Kare Yeny",
    resumen: "Aportar valor con mi trabajo y esfuerzo, aprendiendo constantemente para inspirar a otros, siendo disciplinada para construir una carrera sólida y útil para la sociedad.",
    circles: {
      apasiona: ["Superarme y lograr mis metas.", "Aprender cosas nuevas.", "Avanzar y construir mi futuro."],
      mundo: ["Personas responsables.", "Gente con metas claras.", "Personas que aporten soluciones."],
      pagar: ["Por mi responsabilidad.", "Por mi esfuerzo.", "Por cumplir objetivos."],
      bueno: ["Soy disciplinada y constante.", "Me organizo bien.", "Aprendo rápido."]
    },
    intersections: {
      pasion: ["Superarme día a día.", "Aprender y mejorar constantemente."],
      mision: ["Aportar con mi esfuerzo.", "Inspirar a otros a salir adelante."],
      profesion: ["Desarrollarme con responsabilidad.", "Construir una carrera sólida."],
      vocacion: ["Aportar valor con mi trabajo.", "Sentirme útil en lo que hago."]
    }
  },
  {
    id: 4,
    name: "Crispin Bendezu Rick Bernie",
    resumen: "Desarrollar software y soluciones tecnológicas útiles y accesibles, aplicando mi pensamiento lógico para resolver problemas reales, automatizar procesos y lograr un desarrollo profesional continuo.",
    circles: {
      apasiona: ["Tecnología y cómo facilita la vida", "Aprender sobre sistemas", "Resolver problemas con lógica", "Programación básica"],
      mundo: ["Software que mejore la educación", "Soluciones tecnológicas accesibles para todos", "Sistemas eficientes", "Software útil"],
      pagar: ["Desarrollo de software", "Soporte técnico", "Implementacion de IA"],
      bueno: ["Pensamiento lógico", "Programación básica/intermedia", "Trabajo en equipo", "Adaptación a nuevas tecnologías"]
    },
    intersections: {
      pasion: ["Tecnología y cómo facilita la vida", "Aprender sobre sistemas", "Resolver problemas con lógica", "Programación básica"],
      mision: ["Desarrollar soluciones tecnológicas útiles", "Automatizar procesos para mejorar eficiencia", "Crear sistemas que ayuden a personas y empresas", "Aportar valor mediante el uso de la tecnología"],
      profesion: ["Desarrollo de software", "Soporte técnico", "Análisis de sistemas", "Programación web", "Generación de ingresos mediante habilidades tecnológicas"],
      vocacion: ["Aplicar habilidades en tecnología", "Desarrollo profesional continuo", "Trabajo orientado al servicio", "Uso del conocimiento para resolver problemas reales"]
    }
  },
  {
    id: 5,
    name: "García Betancourt Israel",
    resumen: "Crear proyectos multimedia y soluciones de software a medida, automatizando procesos y eliminando barreras técnicas a través del liderazgo tecnológico y la producción de alto nivel.",
    circles: {
      apasiona: ["Ideación, diseño y ejecución de proyectos de programación", "La producción multimedia de alto nivel", "Tocar la guitarra eléctrica"],
      mundo: ["Herramientas eficientes que eliminen barreras técnicas", "Automatización de procesos", "Líder de equipos de trabajo"],
      pagar: ["Desarrollo de aplicaciones y software a medida.", "Consultoría en infraestructura tecnológica", "Producción multimedia para eventos en vivo"],
      bueno: ["Creación de software a medida", "Optimización de procesos", "Automatización de sistemas", "Producción multimedia para eventos"]
    },
    intersections: {
      pasion: ["Ideación, diseño y ejecución de proyectos de programación", "La producción multimedia de alto nivel", "Tocar la guitarra eléctrica"],
      mision: ["Crear herramientas que eliminen las barreras técnicas", "Automatización de procesos", "Líder de equipos de trabajo"],
      profesion: ["El desarrollo profesional de aplicaciones y software a medida", "La consultoría e implementación de infraestructura tecnológica", "La realización de producciones multimedia para eventos en vivo"],
      vocacion: ["Automatización de procesos para mejorar la calidad y eficiencia.", "La producción multimedia para eventos y la optimización de sistemas."]
    }
  },
  {
    id: 6,
    name: "Veliz Durand Vieri Del Piero",
    resumen: "Diseñar soluciones y herramientas tecnológicas basadas en estándares técnicos y matemáticas, resolviendo problemas críticos y mejorando la productividad de forma ética.",
    circles: {
      apasiona: ["Diseñar y programar soluciones desde cero.", "Resolver desafíos lógicos y matemáticos.", "Investigar y dominar nuevas tecnologías.", "Desarrollar proyectos propios con impacto real."],
      mundo: ["Automatización de tareas para ahorrar tiempo.", "Software simple, intuitivo y útil.", "Protección de datos y uso ético de la tecnología.", "Soluciones digitales a problemas reales."],
      pagar: ["Desarrollo de sistemas y aplicaciones web.", "Automatización y optimización de procesos.", "Gestión y mejora de bases de datos.", "Enseñanza de programación y lógica."],
      bueno: ["Análisis lógico y resolución de problemas.", "Programación y comprensión de algoritmos.", "Aprendizaje rápido de herramientas tecnológicas."]
    },
    intersections: {
      pasion: ["Aplicar lógica matemática al desarrollo de software.", "Superar desafíos técnicos complejos.", "Dominar nuevas herramientas por interés personal."],
      mision: ["Crear tecnología que facilite la vida diaria.", "Transformar ideas en herramientas útiles.", "Promover el uso ético de la tecnología."],
      profesion: ["Construir programas basados en estándares técnicos.", "Administrar información de manera eficiente.", "Resolver problemas críticos mediante análisis técnico."],
      vocacion: ["Diseñar soluciones que mejoren la productividad.", "Enseñar tecnología de forma práctica.", "Implementar sistemas eficientes."]
    }
  }
];

export default function Ikigais() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Ajusté el tamaño de la letra (text-[13px]) y el interlineado (leading-snug)
  const ListItem = ({ items }) => (
    <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1 text-[13px] leading-snug mt-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-gray-50 font-sans relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestro Ikigai</h2>
          <p className="text-xl text-gray-500">Selecciona a un integrante para explorar su propósito.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white rounded-2xl p-6 cursor-pointer border border-gray-200 flex flex-col items-center text-center transition-all hover:border-blue-400 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <User size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">{member.name}</h3>
              <span className="mt-3 text-sm font-semibold text-blue-500">Ver Ikigai</span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#f7fdfb] w-full max-w-[1400px] h-[95vh] rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="w-full flex justify-center items-center py-4 relative z-20">
                <h2 className="text-xl md:text-2xl font-semibold text-[#3b4363] flex items-center gap-2">
                  <User className="text-blue-500" /> Estudiante: {selectedMember.name}
                </h2>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-6 top-4 p-2 text-gray-400 hover:text-gray-800 transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Contenedor del Diagrama Ampliado */}
              <div className="flex-1 w-full overflow-auto relative z-10 pb-10">
                {/* Aumenté min-h y min-w para dar más espacio general */}
                <div className="min-w-[1300px] min-h-[900px] w-full h-full relative flex items-center justify-center">
                  
                  {/* FONDOS (Los círculos gigantes) - Aumenté su tamaño a 460px */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                    <div className="relative w-[800px] h-[800px]">
                      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[#fce4ec] mix-blend-multiply"></div>
                      <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#e8f5e9] mix-blend-multiply"></div>
                      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[#e0f7fa] mix-blend-multiply"></div>
                      <div className="absolute top-1/2 left-[2%] -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#fbe9e7] mix-blend-multiply"></div>
                    </div>
                  </div>

                  {/* CONTENIDOS FLOTANTES */}
                  
                  {/* Centro Absoluto - Ikigai (Lo hice un poco más pequeño: 300px) */}
                  <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-6 text-center border-4 border-white/50">
                    <h1 className="text-4xl font-serif font-bold text-[#1e293b] mb-3">Ikigai</h1>
                    <p className="text-[13px] font-medium text-gray-700 leading-relaxed">
                      {selectedMember.resumen}
                    </p>
                  </div>

                  {/* Textos dentro de los círculos (Empujados hacia los bordes) */}
                  {/* top pasó de 20% a 8% */}
                  <div className="absolute z-10 top-[8%] left-1/2 -translate-x-1/2 w-[340px] text-center">
                    <h3 className="font-bold text-[#475569] mb-1 text-sm">🤍 LO QUE ME APASIONA</h3>
                    <ListItem items={selectedMember.circles.apasiona} />
                  </div>

                  {/* bottom pasó de 18% a 6% */}
                  <div className="absolute z-10 bottom-[6%] left-1/2 -translate-x-1/2 w-[340px] text-center">
                    <h3 className="font-bold text-[#475569] mb-1 text-sm">🪙 POR LO QUE ME PUEDEN PAGAR</h3>
                    <ListItem items={selectedMember.circles.pagar} />
                  </div>

                  {/* left pasó de 20% a 14% */}
                  <div className="absolute z-10 top-1/2 left-[14%] -translate-y-1/2 w-[300px] text-left">
                    <h3 className="font-bold text-[#475569] mb-1 text-sm">🧠 EN LO QUE SOY BUENO</h3>
                    <ListItem items={selectedMember.circles.bueno} />
                  </div>

                  {/* right pasó de 18% a 13% */}
                  <div className="absolute z-10 top-1/2 right-[13%] -translate-y-1/2 w-[300px] text-left">
                    <h3 className="font-bold text-[#475569] mb-1 text-sm">🌎 LO QUE NECESITA EL MUNDO</h3>
                    <ListItem items={selectedMember.circles.mundo} />
                  </div>

                  {/* TARJETAS EXTERIORES BANCAS (Movidas más hacia las esquinas) */}
                  <div className="absolute z-30 top-[8%] left-[4%] bg-white rounded-2xl p-5 shadow-lg w-[280px]">
                    <h4 className="font-bold text-[#334155] mb-2 flex items-center gap-2 text-sm">💡 PASIÓN</h4>
                    <ListItem items={selectedMember.intersections.pasion} />
                  </div>

                  <div className="absolute z-30 top-[8%] right-[4%] bg-white rounded-2xl p-5 shadow-lg w-[280px]">
                    <h4 className="font-bold text-[#334155] mb-2 flex items-center gap-2 text-sm">🎯 MISIÓN</h4>
                    <ListItem items={selectedMember.intersections.mision} />
                  </div>

                  <div className="absolute z-30 bottom-[6%] left-[4%] bg-white rounded-2xl p-5 shadow-lg w-[280px]">
                    <h4 className="font-bold text-[#334155] mb-2 flex items-center gap-2 text-sm">💼 PROFESIÓN</h4>
                    <ListItem items={selectedMember.intersections.profesion} />
                  </div>

                  <div className="absolute z-30 bottom-[6%] right-[4%] bg-white rounded-2xl p-5 shadow-lg w-[280px]">
                    <h4 className="font-bold text-[#334155] mb-2 flex items-center gap-2 text-sm">🌎 VOCACIÓN</h4>
                    <ListItem items={selectedMember.intersections.vocacion} />
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}