import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowUp, ArrowDown, RotateCw, Maximize2, X } from "lucide-react";

const nodosArbol = [
  {
    id: 0,
    colorTema: "blue",
    causa: {
      titulo: "Rezago Tecnológico y Digitalización Deficiente",
      texto: "Ausencia de herramientas de fidelización, nula presencia en canales de comercio electrónico e infraestructura de software desactualizada que genera fricción operativa y comercial."
    },
    efecto: {
      titulo: "Deterioro en la Retención y Experiencia del Cliente",
      texto: "Reducción drástica del Customer Lifetime Value (CLV) y abandono acelerado de consumidores (tasa de churn) hacia alternativas competitivas que brindan una experiencia omnicanal."
    }
  },
  {
    id: 1,
    colorTema: "orange",
    causa: {
      titulo: "Ineficiencia en la Cadena de Valor y Logística",
      texto: "Fragmentación de la red de suministros, deficiencias críticas en la distribución de última milla y ausencia de protocolos consistentes de control de calidad."
    },
    efecto: {
      titulo: "Contracción de Competitividad y Market Share",
      texto: "Pérdida sostenida de cuota de mercado frente a actores transnacionales más eficientes y encarecimiento progresivo de las operaciones mediante altas tasas de costos hundidos."
    }
  },
  {
    id: 2,
    colorTema: "red",
    causa: {
      titulo: "Déficit Estructural y Limitación Financiera",
      texto: "Altas barreras de acceso a apalancamiento financiero, infraestructura comercial deteriorada y una incapacidad latente para reducir costos marginales mediante economías de escala."
    },
    efecto: {
      titulo: "Fuga de Capitales y Alta Mortalidad Empresarial",
      texto: "Desinversión progresiva del ecosistema local, incremento sustancial en las tasas de quiebra corporativa y migración de recursos económicos hacia otros ejes de desarrollo."
    }
  },
  {
    id: 3,
    colorTema: "purple",
    causa: {
      titulo: "Brecha de Capital Humano y Resistencia Cultural",
      texto: "Déficit generalizado de habilidades digitales/gerenciales y una fuerte aversión organizacional al riesgo y a los procesos de transformación digital."
    },
    efecto: {
      titulo: "Desplazamiento Laboral y Dependencia Asimétrica",
      texto: "Relegamiento funcional de la fuerza laboral local por obsolescencia de habilidades y subordinación operativa frente a cadenas de suministro externas y tecnologías de terceros."
    }
  },
  {
    id: 4,
    colorTema: "emerald",
    causa: {
      titulo: "Desarticulación Estratégico-Sectorial y Vulnerabilidad",
      texto: "Carencia de clústeres empresariales locales, desventaja en la toma de decisiones por falta de análisis de datos y alta exposición a externalidades o shocks económicos globales."
    },
    efecto: {
      titulo: "Degradación del Ecosistema Socioeconómico Local",
      texto: "Fragilidad sistémica del mercado, concentración monopólica, reducción drástica en la recaudación fiscal corporativa y un estancamiento medible en el Índice de Desarrollo Humano."
    }
  }
];

const hexColors = {
  blue: "#3b82f6",
  orange: "#f97316",
  red: "#ef4444",
  purple: "#a855f7",
  emerald: "#10b981"
};

const getLeafColorClasses = (colorTema) => {
  const colors = {
    blue: "border-blue-500 bg-blue-50/95",
    orange: "border-orange-500 bg-orange-50/95",
    red: "border-red-500 bg-red-50/95",
    purple: "border-purple-500 bg-purple-50/95",
    emerald: "border-emerald-500 bg-emerald-50/95",
  };
  return colors[colorTema] || "border-gray-600 bg-white/95";
};

const getRootBorderColor = (colorTema) => {
  const colors = {
    blue: "border-blue-400",
    orange: "border-orange-400",
    red: "border-red-400",
    purple: "border-purple-400",
    emerald: "border-emerald-400",
  };
  return colors[colorTema] || "border-amber-400";
};

// ── El árbol en sí (reutilizable) ───────────────────────────────────────────
function ArbolContent({ hoveredIndex, setHoveredIndex }) {
  return (
    <div className="relative min-w-[1080px]" style={{ height: "920px" }}>

      {/* COPA */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[680px] h-[380px] bg-emerald-600 rounded-[50%_50%_38%_38%] shadow-2xl z-10" />
      <div className="absolute left-1/2 top-14 -translate-x-1/2 w-[590px] h-[330px] bg-emerald-500/90 rounded-[50%] blur-xl z-10" />
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[290px] bg-emerald-400/80 rounded-[50%] blur-2xl z-10" />

      <div className="absolute left-1/2 top-[90px] -translate-x-1/2 z-30 flex flex-col items-center text-emerald-50/80 pointer-events-none">
        <ArrowUp size={28} className="drop-shadow-md mb-1" />
        <span className="font-black uppercase tracking-[4px] text-lg drop-shadow-md">Las Hojas (Efectos)</span>
      </div>

      {/* SVG: TRONCO + RAMAS */}
      <svg width="1080" height="850" className="absolute left-0 top-0 z-20 pointer-events-none" viewBox="0 0 1080 850">
        <rect x="520" y="410" width="40" height="230" rx="12" fill="#5d4037" stroke="#3e2723" strokeWidth="8" />
        <rect x="520" y="410" width="40" height="230" rx="12" fill="none" stroke="#3e2723" strokeWidth="4" opacity="0.3" style={{ strokeDasharray: "8 12" }} />

        {nodosArbol.map((nodo, i) => {
          const angleDeg = (i - 2) * 33;
          const rad = (angleDeg * Math.PI) / 180;
          const startX = 540, startY = 410, length = 265;
          const endX = startX + length * Math.sin(rad);
          const endY = startY - length * Math.cos(rad);
          const cpX = startX + (length * 0.55) * Math.sin(rad * 0.75);
          const cpY = startY - (length * 0.55) * Math.cos(rad * 0.75);
          const pathD = `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
          const isHovered = hoveredIndex === nodo.id;
          const strokeColor = isHovered ? hexColors[nodo.colorTema] : "#6d4c41";

          return (
            <g key={`branch-${nodo.id}`}>
              {isHovered && (
                <motion.path d={pathD} fill="none" stroke={strokeColor} strokeWidth="24" strokeLinecap="round" opacity="0.3" />
              )}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.15 }}
                d={pathD} fill="none" stroke={strokeColor} strokeWidth="12" strokeLinecap="round"
                className="transition-colors duration-300"
              />
            </g>
          );
        })}
      </svg>

      {/* HOJAS (EFECTOS) */}
      <div className="absolute left-0 top-0 z-30 w-full h-full pointer-events-none">
        {nodosArbol.map((nodo, i) => {
          const angleDeg = (i - 2) * 33;
          const rad = (angleDeg * Math.PI) / 180;
          const branchLength = 265;
          const leafX = 540 + branchLength * Math.sin(rad) - 128;
          const leafY = 410 - branchLength * Math.cos(rad) - 135;
          const isHovered = hoveredIndex === nodo.id;
          const isDimmed = hoveredIndex !== null && !isHovered;

          return (
            <motion.div
              key={`efecto-${nodo.id}`}
              onMouseEnter={() => setHoveredIndex(nodo.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ width: isHovered ? "280px" : "256px" }}
              whileHover={{ scale: 1.08, y: -10 }}
              className={`
                absolute p-5 rounded-[2rem] border-t-[12px] shadow-xl cursor-pointer pointer-events-auto
                transition-colors duration-300
                ${getLeafColorClasses(nodo.colorTema)}
                ${isHovered ? "ring-8 ring-white/60 shadow-2xl z-[999]" : "z-30"}
                ${isDimmed ? "opacity-30 scale-95 blur-[1px]" : "opacity-100"}
              `}
              style={{ left: `${leafX}px`, top: `${leafY}px`, overflow: "hidden" }}
            >
              <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-800/50 mb-1">Efecto {i + 1}</span>
              <h4 className="font-bold text-[16px] leading-tight text-gray-900">{nodo.efecto.titulo}</h4>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13px] text-gray-700 leading-relaxed mt-3 pt-3 border-t border-gray-200/50">
                      {nodo.efecto.texto}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* PROBLEMA CENTRAL */}
      <motion.div
        className={`
          absolute left-1/2 top-[355px] -translate-x-1/2 bg-[#fdfbf7] border-[8px] border-[#4e342e]
          rounded-3xl px-10 py-8 shadow-2xl w-[420px] text-center z-40 pointer-events-auto
          transition-all duration-300
          ${hoveredIndex !== null ? "scale-105 shadow-amber-900/30 ring-4 ring-amber-500/20" : "scale-100"}
        `}
      >
        <div className="flex items-center justify-center gap-2 text-amber-800 font-black uppercase text-xs tracking-widest mb-3">
          <AlertTriangle size={18} /> Problema Central
        </div>
        <h2 className="text-3xl font-black text-slate-900 leading-tight">El Declive del Consumo Local</h2>
      </motion.div>

      {/* BASE */}
      <div className="absolute left-1/2 top-[620px] -translate-x-1/2 w-[640px] h-32 bg-gradient-to-r from-[#3e2723] via-[#4e342e] to-[#2c211b] rounded-[50%] shadow-[0_-10px_30px_rgba(0,0,0,0.3)] z-10" />

      {/* RAÍCES (CAUSAS) */}
      <div
        className="absolute left-1/2 top-[650px] -translate-x-1/2 z-30 w-[1080px] px-4"
        style={{ overflow: "visible" }}
      >
        <div className="flex justify-center items-start gap-3" style={{ overflow: "visible" }}>
          {nodosArbol.map((nodo, i) => {
            const isHovered = hoveredIndex === nodo.id;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={`causa-${nodo.id}`}
                onMouseEnter={() => setHoveredIndex(nodo.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  width: isHovered ? "220px" : "192px",
                  y: isHovered ? 8 : 0,
                  scale: isHovered ? 1.04 : isDimmed ? 0.95 : 1,
                  opacity: isDimmed ? 0.3 : 1,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`
                  bg-[#fdfbf7] p-5 rounded-3xl border-b-[10px] shadow-lg cursor-pointer
                  pointer-events-auto z-30 flex-shrink-0
                  ${getRootBorderColor(nodo.colorTema)}
                  ${isHovered ? "ring-4 ring-amber-400 shadow-2xl z-[999]" : ""}
                  ${isDimmed ? "blur-[1px]" : ""}
                `}
                style={{ overflow: "visible" }}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800/60 block mb-1">
                  Causa {i + 1}
                </span>
                <h4 className="font-bold text-[14px] leading-tight text-gray-900">{nodo.causa.titulo}</h4>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[12px] text-gray-600 leading-relaxed mt-3 pt-3 border-t border-amber-900/10">
                        {nodo.causa.texto}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute left-1/2 top-[820px] -translate-x-1/2 flex items-center gap-2 text-amber-900/50 font-black uppercase tracking-widest text-sm z-10 pointer-events-none">
        <ArrowDown size={18} /> Las Raíces (Causas)
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function ArbolDeProblemasRealista() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [containerScale, setContainerScale] = useState(1);
  const fullscreenRef = useRef(null);
  const treeContainerRef = useRef(null);

  // Detectar móvil
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Escuchar salida de fullscreen
  useEffect(() => {
    const onFsChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Escalado automático (con margen extra para evitar cortes al hacer hover)
  useEffect(() => {
    const updateScale = () => {
      if (!treeContainerRef.current) return;
      const container = treeContainerRef.current;
      let containerWidth = container.clientWidth;
      let containerHeight = container.clientHeight;

      if (isMobile && isFullscreen) {
        containerHeight = window.innerHeight - 70; // espacio del header
      }

      const targetWidth = 1080;
      const targetHeight = 920; // +70px de margen para expansiones de hover

      const scaleX = containerWidth / targetWidth;
      const scaleY = containerHeight / targetHeight;
      const newScale = Math.min(scaleX, scaleY, 1);

      setContainerScale(newScale);
    };

    const resizeObserver = new ResizeObserver(updateScale);
    if (treeContainerRef.current) resizeObserver.observe(treeContainerRef.current);

    window.addEventListener("resize", updateScale);
    const timer = setTimeout(updateScale, 100);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
      clearTimeout(timer);
    };
  }, [isMobile, isFullscreen]);

  const handleOpenFullscreen = async () => {
    setIsFullscreen(true);
    try { await document.documentElement.requestFullscreen(); } catch (_) {}
    try { await screen.orientation.lock("landscape"); } catch (_) {}
  };

  const handleCloseFullscreen = async () => {
    setIsFullscreen(false);
    try { if (document.fullscreenElement) await document.exitFullscreen(); } catch (_) {}
    try { screen.orientation.unlock(); } catch (_) {}
  };

  // Vista móvil inicial
  if (isMobile && !isFullscreen) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-emerald-50 px-6 font-sans">
        <div className="relative mb-8 flex flex-col items-center">
          <div className="w-40 h-28 bg-emerald-600 rounded-[50%_50%_38%_38%] shadow-xl" />
          <div className="w-6 h-16 bg-[#5d4037] rounded-b-xl -mt-2 shadow" />
          <div className="w-24 h-4 bg-[#4e342e] rounded-full -mt-1 shadow" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 text-center tracking-tight mb-2">El Árbol del Declive</h1>
        <p className="text-slate-500 text-center text-sm mb-2 max-w-xs leading-relaxed">
          Este diagrama interactivo está optimizado para verse en pantalla completa en modo horizontal.
        </p>
        <p className="text-slate-400 text-center text-xs mb-8 max-w-xs">Toca el botón, gira tu celular y explora causas y efectos con el dedo.</p>

        <motion.div
          animate={{ rotate: [0, 90, 90, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
          className="mb-6 text-emerald-600"
        >
          <RotateCw size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.04 }}
          onClick={handleOpenFullscreen}
          className="flex items-center gap-3 bg-emerald-600 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl uppercase tracking-wide"
        >
          <Maximize2 size={22} />
          Ver Árbol de Problemas
        </motion.button>

        <p className="text-slate-300 text-xs mt-6 text-center max-w-xs">
          También puedes rotar tu dispositivo manualmente si tu navegador no permite el bloqueo automático.
        </p>
      </section>
    );
  }

  // Vista fullscreen móvil (corrigido: overflow-visible + centrado + margen extra)
  if (isMobile && isFullscreen) {
    return (
      <div
        ref={fullscreenRef}
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-sky-50 to-emerald-50/30 overflow-hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
          <div>
            <h1 className="text-lg font-extrabold text-slate-800 tracking-tight leading-none">El Árbol del Declive</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">Toca una causa o efecto para ver más</p>
          </div>
          <button
            onClick={handleCloseFullscreen}
            className="flex items-center gap-1 text-slate-500 bg-slate-100 rounded-xl px-3 py-1.5 text-sm font-semibold"
          >
            <X size={16} /> Cerrar
          </button>
        </div>

        <div
          ref={treeContainerRef}
          className="pt-4 px-4 flex justify-center relative overflow-visible"
          style={{ height: `${920 * containerScale}px` }}
        >
          <div
            style={{
              width: "1080px",
              height: "920px",
              transform: `scale(${containerScale})`,
              transformOrigin: "top center",
            }}
          >
            <ArbolContent hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
          </div>
        </div>
      </div>
    );
  }

  // Vista desktop (corrigido: centrado perfecto + z-index alto en hover)
  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-sky-50 to-emerald-50/30 font-sans flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tighter">El Árbol del Declive</h1>
        <p className="text-slate-500 mt-3 text-lg font-medium">Pasa el ratón sobre un título para revelar la conexión completa</p>
      </div>

      <div
        ref={treeContainerRef}
        className="w-full max-w-[1080px] mx-auto pb-24 flex justify-center relative overflow-visible"
        style={{ height: `${920 * containerScale}px` }}
      >
        <div
          style={{
            width: "1080px",
            height: "920px",
            transform: `scale(${containerScale})`,
            transformOrigin: "top center",
          }}
        >
          <ArbolContent hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(16,185,129,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16,185,129,0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(16,185,129,0.5); }
      `}</style>
    </section>
  );
}