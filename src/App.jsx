// Importamos tu primer componente
import Hero from './components/1Hero';
import Ikigais from './components/2Ikigais';
import Conceptos from './components/3Conceptos';
import Emprendimientos from './components/4EmprendimientosSociales';
import Arbol1 from './components/5ArbolDeProblemas1';
// import Arbol2 from './components/6ArbolDeProblemas2';
// import Evidencias from './components/7Evidencias';

function App() {
  return (
    // Usamos <main> como contenedor principal. 
    // Las clases de Tailwind aseguran que ocupe toda la pantalla y evite el scroll horizontal.
    <main className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* 1. Tu Portada */}
      <Hero />

      {/* A medida que crees los siguientes archivos, vas descomentando estas líneas 
        para que aparezcan uno debajo del otro en tu página.
      */}
      <Ikigais />
      <Conceptos />
      <Emprendimientos />
      <Arbol1 />
      {/* <Arbol2 /> */}
      {/* <Evidencias /> */}

    </main>
  );
}

export default App;