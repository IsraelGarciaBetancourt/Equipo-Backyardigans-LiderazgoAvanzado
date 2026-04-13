import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Send, Leaf, Target, ShieldCheck, AlertTriangle, Lightbulb } from "lucide-react";

const emprendimientos = [
  {
    id: "yaqua",
    nombre: "YAQUA (Perú)",
    tema: "blue",
    icono: <Droplet size={28} />,
    descripcion: "Es una empresa social que vende agua embotellada y filtros para financiar proyectos de agua potable.",
    problema: "La falta de acceso a agua potable en zonas rurales del Perú (más de 7 u 8 millones de personas).",
    detalles: [
      { titulo: "ODS relacionados", icon: <Target className="text-blue-500" />, texto: "ODS 6 (Agua limpia y saneamiento) y ODS 10 (Reducción de las desigualdades)." },
      { titulo: "Fortalezas", icon: <ShieldCheck className="text-emerald-500" />, texto: "Marca con propósito claro, modelo 'consumo con causa' fácil de entender y 100% de utilidades destinadas a la ayuda." },
      { titulo: "Debilidades", icon: <AlertTriangle className="text-amber-500" />, texto: "El uso de botellas de plástico genera una contradicción ambiental; alta dependencia del volumen de ventas." },
      { titulo: "Recomendación", icon: <Lightbulb className="text-purple-500" />, texto: "Migrar totalmente a envases biodegradables o de aluminio y potenciar su línea de filtros portátiles para reducir el desperdicio." }
    ]
  },
  {
    id: "zipline",
    nombre: "ZIPLINE (Global/EE.UU.)",
    tema: "red",
    icono: <Send size={28} />,
    descripcion: "Empresa de logística que utiliza drones autónomos para entregar suministros médicos críticos (sangre, vacunas).",
    problema: "El 'último kilómetro' en salud; la dificultad de llevar medicinas a tiempo a zonas remotas o con malas carreteras.",
    detalles: [
      { titulo: "ODS relacionados", icon: <Target className="text-red-500" />, texto: "ODS 3 (Salud y bienestar) y ODS 9 (Industria, innovación e infraestructura)." },
      { titulo: "Fortalezas", icon: <ShieldCheck className="text-emerald-500" />, texto: "Tecnología de punta, rapidez extrema (salva vidas en minutos) y alta escalabilidad en países en desarrollo (ej. Ruanda, Ghana)." },
      { titulo: "Debilidades", icon: <AlertTriangle className="text-amber-500" />, texto: "Costos de operación e infraestructura muy elevados; restricciones legales por uso de espacio aéreo." },
      { titulo: "Recomendación", icon: <Lightbulb className="text-purple-500" />, texto: "Diversificar su servicio hacia la entrega de alimentos o productos educativos en emergencias para maximizar el uso de la flota." }
    ]
  },
  {
    id: "lafageda",
    nombre: "LA FAGEDA (España)",
    tema: "green",
    icono: <Leaf size={28} />,
    descripcion: "Fundada en 1982 por el psicólogo Cristóbal Colón, es una empresa de lácteos, helados y mermeladas cuyo núcleo no es el producto, sino las personas. Opera bajo el lema: 'El sentido del trabajo es el trabajo con sentido'.",
    problema: "La exclusión social y laboral de personas con discapacidad intelectual o trastornos mentales severos. Busca darles una vida digna y herramientas terapéuticas a través de un empleo real y de alta calidad.",
    detalles: [
      { titulo: "ODS relacionados", icon: <Target className="text-green-500" />, texto: "ODS 8 (Trabajo decente y crecimiento económico): Provee empleo digno y salarios justos a colectivos vulnerables. ODS 10 (Reducción de las desigualdades): Fomenta la inclusión social total en la comarca de La Garrotxa." },
      { titulo: "Fortalezas", icon: <ShieldCheck className="text-emerald-500" />, texto: "Calidad del Producto: Compiten con multinacionales (como Danone) no por 'caridad', sino por tener uno de los yogures mejor valorados del mercado. Modelo de Negocio Sólido: Es una empresa rentable que reinvierte el 100% de sus beneficios en el bienestar de sus trabajadores y en el proyecto social." },
      { titulo: "Debilidades", icon: <AlertTriangle className="text-amber-500" />, texto: "Escalabilidad Geográfica: Su modelo está muy arraigado a su territorio local (Cataluña), lo que dificulta replicar exactamente la misma estructura en otros países sin perder su esencia. Precio: Suele ser un producto ligeramente más caro que las marcas blancas o industriales." },
      { titulo: "Recomendaciones", icon: <Lightbulb className="text-purple-500" />, texto: "Diversificación y Digitalización: Potenciar su presencia en canales digitales para llegar a un público joven que valore el consumo ético. Exportación del 'Know-how': Crear una consultoría social para ayudar a otras empresas en el mundo a replicar su modelo de integración laboral." }
    ]
  }
];

export default function EmprendimientosSociales() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-[#f0f4f8] font-sans flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Cabecera de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Tres enfoques distintos de Emprendimiento Social en el mundo.
          </p>
        </motion.div>

        {/* Contenedor Principal (Panel Dividido) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Columna Izquierda: Menú de Navegación (Tabs) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {emprendimientos.map((empresa, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={empresa.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 group overflow-hidden ${
                    isActive 
                      ? "bg-white shadow-xl border-transparent" 
                      : "bg-gray-100 hover:bg-white hover:shadow-md border border-gray-200"
                  }`}
                >
                  {/* Fondo de color activo que se desliza */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className={`absolute inset-0 border-l-8 rounded-2xl ${
                        empresa.tema === 'blue' ? 'border-blue-500' : 
                        empresa.tema === 'red' ? 'border-red-500' : 'border-green-500'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`relative z-10 p-3 rounded-xl transition-colors ${
                    isActive 
                      ? (empresa.tema === 'blue' ? 'bg-blue-100 text-blue-600' : empresa.tema === 'red' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600')
                      : 'bg-gray-200 text-gray-500 group-hover:bg-gray-100'
                  }`}>
                    {empresa.icono}
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {empresa.nombre}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Contenido Detallado */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 min-h-[600px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  {/* Encabezado del Detalle */}
                  <div className="border-b border-gray-100 pb-6">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                      {emprendimientos[activeTab].nombre}
                    </h2>
                    <div className="flex flex-col gap-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">¿Qué hacen?</strong> {emprendimientos[activeTab].descripcion}
                      </p>
                      <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 text-rose-900">
                        <strong>Problema Social:</strong> {emprendimientos[activeTab].problema}
                      </div>
                    </div>
                  </div>

                  {/* Grilla de Detalles (ODS, Fortalezas, Debilidades, Recomendaciones) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {emprendimientos[activeTab].detalles.map((detalle, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col gap-3">
                        <div className="flex items-center gap-2 font-bold text-gray-800 text-lg border-b border-gray-200 pb-2">
                          {detalle.icon} {detalle.titulo}
                        </div>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                          {detalle.texto}
                        </p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Frase de Resumen Final */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-1 rounded-3xl shadow-xl">
            <div className="bg-white rounded-[1.4rem] p-8 md:p-10 text-center border border-white">
              <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed italic">
                "En resumen: Si Yaqua da vida a través del agua y Zipline salva vidas con logística, <span className="text-emerald-600 font-bold">La Fageda devuelve el propósito</span> a la vida de personas que el sistema solía ignorar."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}