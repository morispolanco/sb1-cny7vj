import React, { useEffect, useState } from 'react';
import { BookOpen, Heart, Brain, Sparkles, CheckCircle2, Download } from 'lucide-react';

function App() {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    // Check if user is returning from PayPal
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowDownload(true);
    }
  }, []);

  const handlePurchase = () => {
    // Redirect to PayPal with return URL parameters
    const returnUrl = `${window.location.origin}?success=true`;
    window.location.href = `https://www.paypal.com/paypalme/ariannemesa/20?return=${encodeURIComponent(returnUrl)}`;
  };

  const handleDownload = () => {
    window.location.href = 'https://hablemosbien.org/desatando.pdf';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {showDownload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">¡Gracias por tu compra!</h2>
            <p className="mb-6">Tu libro está listo para descargar.</p>
            <button
              onClick={handleDownload}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              Descargar PDF
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-900">
              Desatando a Venus
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Un viaje transformador que te permitirá romper ataduras y barreras mentales para mejorar tu salud y liberar tu verdadera esencia.
            </p>
            <button
              onClick={handlePurchase}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Obtén tu copia digital por $20 USD
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://hablemosbien.org/venus.jpg"
              alt="Portada de Desatando a Venus"
              className="rounded-lg shadow-2xl max-w-md mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Lo que encontrarás en este libro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-rose-50 hover:shadow-lg transition duration-300">
              <Heart className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sanación Integral</h3>
              <p className="text-gray-600">
                Descubre el poder de unificar mente, cuerpo y espíritu para alcanzar una salud completa y duradera
              </p>
            </div>
            <div className="p-6 rounded-xl bg-rose-50 hover:shadow-lg transition duration-300">
              <Brain className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Claridad Mental</h3>
              <p className="text-gray-600">
                Herramientas prácticas para liberar tu mente de limitaciones y vivir en plenitud
              </p>
            </div>
            <div className="p-6 rounded-xl bg-rose-50 hover:shadow-lg transition duration-300">
              <Sparkles className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transformación</h3>
              <p className="text-gray-600">
                Reconecta con tu diosa interior y vive en autenticidad, libertad y amor verdadero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <img
              src="https://hablemosbien.org/amesa.png"
              alt="Dra. Arianne Meza"
              className="w-64 h-64 rounded-full object-cover shadow-xl"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre la Autora</h2>
              <h3 className="text-xl font-semibold mb-2 text-rose-700">Dra. Arianne Meza</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Médica egresada de la Universidad Francisco Marroquín de Guatemala, Arianne se apasionó desde la adolescencia 
                por los conceptos de sanación integral de la mente y el cuerpo. Es fundadora de Salud Integral de la Mujer, 
                una plataforma dedicada a la educación en salud preventiva y el manejo integral de condiciones crónicas. 
                Actualmente, comparte su conocimiento como catedrática en la Facultad de Medicina de la UFM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Sobre el Libro</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Existe una Diosa Interna que está lista para disfrutar del "disfraz" (el cuerpo) y del "personaje" 
            que le ha tocado vivir en la experiencia humana. Lista para vivir en libertad, autenticidad, salud y, 
            sobre todo, para vivir en amor.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Este libro brinda consejos y herramientas que te ayudarán a construir salud, vivir una vida más plena, 
            y aprender a dejar de sufrir con historias, pensamientos y creencias limitantes.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Comienza tu viaje de transformación hoy
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-5 h-5 text-rose-300" />
              <p>Acceso inmediato al libro digital (PDF)</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-5 h-5 text-rose-300" />
              <p>Guía práctica para la sanación integral</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-5 h-5 text-rose-300" />
              <p>Ejercicios y herramientas transformadoras</p>
            </div>
          </div>
          <button
            onClick={handlePurchase}
            className="bg-white text-rose-900 hover:bg-rose-100 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Obtén tu copia por $20 USD
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Dra. Arianne Meza. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;