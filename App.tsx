import React, { useState, useEffect } from 'react';
import { 
  User, 
  Shield, 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  Calculator, 
  Briefcase, 
  GraduationCap, 
  Gavel, 
  Phone, 
  MapPin, 
  Clock, 
  AlertOctagon, 
  Info, 
  Printer, 
  Menu,
  X,
  Mail
} from 'lucide-react';

// --- Types ---

type TabType = 'acceso' | 'puntuacion' | 'llamamientos' | 'penalizaciones';

interface CalculatorState {
  experienciaSNS: number;
  experienciaPrivada: number;
  creditosOrdinarios: number;
  creditosECTS: number;
}

// --- Components ---

const ContactBanner = () => (
  <div className="bg-red-700 text-white text-sm py-2 px-4 shadow-md relative z-50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
      <div className="font-bold tracking-wide">UGT SERVICIOS PÚBLICOS - SANIDAD SALAMANCA</div>
      <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-red-100">
        <span className="flex items-center gap-1"><MapPin size={14} /> Hospital Virgen Vega</span>
        <span className="flex items-center gap-1"><Phone size={14} /> 923 29 11 00 (Ext. 55598)</span>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="bg-white border-b border-gray-200 shadow-sm relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none"></div>
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-red-600 text-white font-bold p-2 rounded-lg shadow-sm">
              UGT
            </div>
            <span className="text-gray-500 font-medium tracking-wider text-sm uppercase">Secretaría de Sanidad</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Guía Rápida <span className="text-red-600">BAPE SACYL</span>
          </h1>
          <p className="text-gray-600 text-lg">Bolsa Abierta y Permanente de Empleo</p>
        </div>
        <div className="hidden md:block text-right bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm max-w-sm">
           <p className="text-xs text-gray-500 uppercase font-bold mb-1">Información Sindical</p>
           <p className="text-sm font-semibold text-gray-800">Sección Sindical UGT Salamanca</p>
           <p className="text-sm text-gray-600">Edificio 1 Hospital Virgen Vega, Semisótano</p>
           <a href="mailto:sanidad.salamanca@ugt-sp.ugt.org" className="text-sm text-red-600 hover:underline flex items-center justify-end gap-1 mt-1">
             <Mail size={12} /> sanidad.salamanca@ugt-sp.ugt.org
           </a>
        </div>
      </div>
    </div>
  </header>
);

const TabButton = ({ active, label, icon: Icon, onClick }: { active: boolean; label: string; icon: any; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
      active
        ? 'border-red-600 text-red-600 bg-red-50'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

// --- Modules ---

const ModuleAccess = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <User className="text-red-600" />
        Fundamentos y Proceso
      </h2>
      <p className="text-gray-500 mt-2">Todo lo que necesitas saber para acceder al sistema</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Info className="text-blue-500" /> Naturaleza de la Bolsa
        </h3>
        <p className="text-gray-600 leading-relaxed">
          La bolsa del SACYL es un <strong>procedimiento telemático</strong>, 
          <strong>abierto permanentemente</strong> y que <strong>no deriva directamente</strong> 
          de los procesos selectivos. Es un sistema independiente para la gestión de 
          personal estatutario temporal.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="text-green-500" /> Requisitos Clave
        </h3>
        <ul className="space-y-3">
          {['Titulación oficial requerida', 'Nacionalidad española o UE', 'Capacidad funcional'].map((req, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={16} />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FileText className="text-purple-500" /> Proceso Telemático
        </h3>
        <a 
          href="http://www.saludcastillayleon.es/profesionales/es/bolsa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <ExternalLink size={14} /> Portal Oficial SACYL
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
        {[
          { icon: "🌐", title: "Portal", desc: "www.saludcastillayleon.es" },
          { icon: "🔐", title: "Acceso", desc: "Certificado o Cl@ve" },
          { icon: "📋", title: "Bolsa", desc: "Sección Empleo" },
          { icon: "➕", title: "Nueva", desc: "Crear Solicitud" },
          { icon: "👤", title: "Datos", desc: "Personales" },
          { icon: "📊", title: "Méritos", desc: "Autobaremación" },
          { icon: "🔨", title: "Registrar", desc: "¡PULSAR MARTILLO!", highlight: true },
        ].map((step, idx) => (
          <div key={idx} className={`text-center p-3 rounded-lg border ${step.highlight ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-100'}`}>
            <div className="text-2xl mb-2">{step.icon}</div>
            <div className="font-bold text-xs text-gray-900 mb-1">{idx + 1}. {step.title}</div>
            <div className="text-[10px] text-gray-500 leading-tight">{step.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <div className="flex gap-3">
          <AlertTriangle className="text-amber-600 shrink-0" />
          <div>
            <p className="font-bold text-amber-800 text-sm">¡CRUCIAL!</p>
            <p className="text-amber-700 text-sm">El paso 7 es fundamental. Si no pulsas el botón "Registrar solicitud" (icono del martillo 🔨), tu solicitud NO será tenida en cuenta.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
      <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
        <Calendar size={20} /> Fecha de Corte
      </h3>
      <p className="text-blue-800 mb-4 text-sm">
        La "foto fija" que determina qué méritos y elecciones cuentan. Se anuncia con al menos 20 días de antelación.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white/60 p-3 rounded-lg text-blue-900">
          <span className="font-bold block">Congelación</span>
          Se valoran los méritos obtenidos hasta esa fecha.
        </div>
        <div className="bg-white/60 p-3 rounded-lg text-blue-900">
          <span className="font-bold block">Listados</span>
          Base para elaborar los listados definitivos de candidatos.
        </div>
      </div>
    </div>
  </div>
);

const ModuleScore = () => {
  const [calc, setCalc] = useState<CalculatorState>({
    experienciaSNS: 0,
    experienciaPrivada: 0,
    creditosOrdinarios: 0,
    creditosECTS: 0
  });

  const calculateTotal = () => {
    const exp = Math.min((calc.experienciaSNS * 0.30) + (calc.experienciaPrivada * 0.10), 60);
    const form = Math.min((calc.creditosOrdinarios * 0.20) + (calc.creditosECTS * 0.50), 40);
    return {
      exp: exp.toFixed(2),
      form: form.toFixed(2),
      total: (exp + form).toFixed(2) // Opposition assumed 0 for simplicity or add field
    };
  };

  const results = calculateTotal();

  const handleInput = (key: keyof CalculatorState, val: string) => {
    const num = parseFloat(val);
    setCalc(prev => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Calculator className="text-red-600" />
          Baremo y Simulador
        </h2>
        <p className="text-gray-500 mt-2">Calcula tus puntos aproximados (Máximo 130 pts)</p>
      </div>

      {/* Simulator */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h3 className="font-bold flex items-center gap-2"><Calculator size={18} /> Simulador UGT</h3>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">Autobaremo Orientativo</span>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Briefcase size={16} className="text-blue-600" /> Experiencia (Meses)
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">Centros SNS (0.30 pts)</label>
                    <input 
                      type="number" 
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={calc.experienciaSNS || ''}
                      onChange={(e) => handleInput('experienciaSNS', e.target.value)}
                      placeholder="Meses trabajados"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">Privada Concertada (0.10 pts)</label>
                    <input 
                      type="number" 
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={calc.experienciaPrivada || ''}
                      onChange={(e) => handleInput('experienciaPrivada', e.target.value)}
                      placeholder="Meses trabajados"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <GraduationCap size={16} className="text-purple-600" /> Formación
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">Créditos Ordinarios/CFC (0.20 pts)</label>
                    <input 
                      type="number" 
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={calc.creditosOrdinarios || ''}
                      onChange={(e) => handleInput('creditosOrdinarios', e.target.value)}
                      placeholder="Número de créditos"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 block mb-1">Créditos ECTS (0.50 pts)</label>
                    <input 
                      type="number" 
                      min="0"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      value={calc.creditosECTS || ''}
                      onChange={(e) => handleInput('creditosECTS', e.target.value)}
                      placeholder="Número de créditos"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center space-y-4">
              <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                <span className="text-gray-600 text-sm">Experiencia (Max 60)</span>
                <span className="text-xl font-bold text-blue-600">{results.exp}</span>
              </div>
              <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                <span className="text-gray-600 text-sm">Formación (Max 40)</span>
                <span className="text-xl font-bold text-purple-600">{results.form}</span>
              </div>
              <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                <span className="text-gray-600 text-sm">Fase Oposición (Max 15)</span>
                <span className="text-xl font-bold text-gray-400">0.00</span>
              </div>
              <div className="pt-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">TOTAL ESTIMADO</span>
                  <span className="text-4xl font-bold text-red-600">{results.total}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">Cálculo no vinculante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-bold text-blue-800 mb-2">Experiencia</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li className="flex justify-between"><span>SNS/UE:</span> <span className="font-bold">0.30 /mes</span></li>
            <li className="flex justify-between"><span>Pública Otra:</span> <span className="font-bold">0.25 /mes</span></li>
            <li className="flex justify-between"><span>Privada Concert:</span> <span className="font-bold">0.10 /mes</span></li>
            <li className="flex justify-between"><span>Privada Otra:</span> <span className="font-bold">0.05 /mes</span></li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-bold text-purple-800 mb-2">Formación</h4>
          <p className="text-xs text-gray-500 mb-2">Últimos 10 años. Relacionada con la categoría.</p>
          <ul className="text-sm space-y-2 text-gray-600">
            <li className="flex justify-between"><span>Crédito Ord:</span> <span className="font-bold">0.20 pts</span></li>
            <li className="flex justify-between"><span>Crédito ECTS:</span> <span className="font-bold">0.50 pts</span></li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-800 mb-2">Oposición</h4>
          <p className="text-sm text-gray-600 mb-2">
            Superar ejercicios en convocatorias públicas de la misma categoría.
          </p>
          <div className="bg-gray-100 rounded p-2 text-center">
            <span className="block text-2xl font-bold text-gray-700">5 Pts</span>
            <span className="text-xs text-gray-500">por ejercicio (Max 15)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModuleCalls = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <Phone className="text-red-600" />
        Llamamientos
      </h2>
      <p className="text-gray-500 mt-2">Tipos de contratos y gestión de disponibilidad</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { 
          title: "Interinidad", 
          desc: "Vacantes. Máxima estabilidad mientras exista la vacante.", 
          color: "bg-green-50 border-green-200 text-green-800",
          icon: "⭐"
        },
        { 
          title: "Larga Duración", 
          desc: "Sustituciones ≥ 6 meses. Reserva de plaza garantizada.", 
          color: "bg-blue-50 border-blue-200 text-blue-800",
          icon: "📅"
        },
        { 
          title: "Corta Duración", 
          desc: "Sustituciones < 6 meses o guardias. Alta rotación.", 
          color: "bg-amber-50 border-amber-200 text-amber-800",
          icon: "⚡"
        },
      ].map((item, idx) => (
        <div key={idx} className={`p-6 rounded-xl border ${item.color} shadow-sm transition-transform hover:-translate-y-1`}>
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm opacity-90">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MapPin className="text-red-500" /> Estrategia de Áreas y Actualización
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Área Preferente</h4>
          <p className="text-sm text-gray-600 mb-4">
            Debes elegir <strong>UNA única área</strong> para nombramientos de Interinidad. 
            Para el resto de nombramientos puedes elegir todas las que desees.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Salamanca', 'Ávila', 'Burgos', 'León', 'Palencia', 'Segovia', 'Soria', 'Valladolid', 'Zamora'].map(city => (
              <span key={city} className={`text-xs px-2 py-1 rounded-full border ${city === 'Salamanca' ? 'bg-red-100 border-red-300 text-red-800 font-bold' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                {city}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <h4 className="font-semibold text-gray-700 mb-4 pl-8">Fechas de Actualización</h4>
          <ul className="space-y-4">
            {[
              { date: "10 Marzo", label: "Corte 1" },
              { date: "10 Junio", label: "Corte 2" },
              { date: "10 Septiembre", label: "Corte 3" },
              { date: "10 Diciembre", label: "Corte 4" }
            ].map((d, i) => (
              <li key={i} className="flex items-center gap-4 relative">
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10 text-[10px] font-bold text-blue-600 shrink-0">
                   {i + 1}
                 </div>
                 <div className="bg-gray-50 p-2 rounded w-full flex justify-between items-center border border-gray-100">
                    <span className="font-bold text-gray-800">{d.date}</span>
                    <span className="text-xs text-gray-500 uppercase">{d.label}</span>
                 </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ModulePenalties = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <Gavel className="text-red-600" />
        Régimen Sancionador
      </h2>
      <p className="text-gray-500 mt-2">Evita penalizaciones conociendo las normas</p>
    </div>

    <div className="space-y-4">
      <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg shadow-sm">
        <div className="flex justify-between items-start">
           <div>
             <h3 className="font-bold text-red-900">Fraude en Méritos</h3>
             <p className="text-red-800 text-sm mt-1">Inclusión de méritos inexistentes.</p>
           </div>
           <span className="bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded">GRAVE</span>
        </div>
        <div className="mt-3 text-sm font-semibold text-red-700">
          Sanción: Exclusión de TODAS las categorías durante 2 años.
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg shadow-sm">
        <div className="flex justify-between items-start">
           <div>
             <h3 className="font-bold text-orange-900">Rechazo Injustificado</h3>
             <p className="text-orange-800 text-sm mt-1">Rechazar un contrato sin causa válida.</p>
           </div>
           <span className="bg-orange-200 text-orange-900 text-xs font-bold px-2 py-1 rounded">ALTA</span>
        </div>
        <div className="mt-3 text-sm font-semibold text-orange-700">
          Sanción: Suspensión de 6 meses en la categoría.
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg shadow-sm">
        <div className="flex justify-between items-start">
           <div>
             <h3 className="font-bold text-yellow-900">No Contestación</h3>
             <p className="text-yellow-800 text-sm mt-1">4 llamadas no contestadas (días distintos) en 1 mes.</p>
           </div>
           <span className="bg-yellow-200 text-yellow-900 text-xs font-bold px-2 py-1 rounded">MEDIA</span>
        </div>
        <div className="mt-3 text-sm font-semibold text-yellow-700">
          Sanción: No Disponible durante 3 meses.
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg border border-green-200 p-6 mt-6">
      <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
        <Shield className="text-green-600" /> Causas Justificadas (0 Penalización)
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Debes justificar documentalmente estas situaciones para pasar a "No Disponible" sin sanción:
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        {[
          "Trabajo activo en otra Administración o empresa",
          "Renuncia a jornada parcial",
          "Maternidad / Paternidad / Lactancia",
          "Incapacidad Temporal (Baja médica)",
          "Cuidado familiar (hasta 2º grado)",
          "Riesgo durante el embarazo"
        ].map((cause, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 p-2 rounded">
            <CheckCircle size={14} className="text-green-600 shrink-0" />
            {cause}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('acceso');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'acceso', label: 'Acceso BAPE', icon: User },
    { id: 'puntuacion', label: 'Puntuación', icon: Calculator },
    { id: 'llamamientos', label: 'Llamamientos', icon: Phone },
    { id: 'penalizaciones', label: 'Sanciones', icon: AlertOctagon },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ContactBanner />
      <Header />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="hidden md:flex overflow-x-auto">
            {tabs.map(tab => (
              <TabButton 
                key={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                icon={tab.icon}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
          
          {/* Mobile Nav Header */}
          <div className="md:hidden flex justify-between items-center py-3">
             <span className="font-bold text-gray-700 capitalize flex items-center gap-2">
               {tabs.find(t => t.id === activeTab)?.icon && React.createElement(tabs.find(t => t.id === activeTab)!.icon, {size: 18})}
               {tabs.find(t => t.id === activeTab)?.label}
             </span>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
               {mobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 absolute w-full bg-white shadow-lg animate-fade-in-down">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                className={`w-full text-left px-6 py-4 border-b border-gray-50 flex items-center gap-3 ${activeTab === tab.id ? 'bg-red-50 text-red-700 font-bold' : 'text-gray-600'}`}
              >
                <tab.icon size={18} /> {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'acceso' && <ModuleAccess />}
          {activeTab === 'puntuacion' && <ModuleScore />}
          {activeTab === 'llamamientos' && <ModuleCalls />}
          {activeTab === 'penalizaciones' && <ModulePenalties />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">UGT Sanidad Salamanca</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 shrink-0 mt-1" />
                <span>Edificio 1 del Hospital Virgen Vega,<br/>semisótano (sección sindical UGT)<br/>P.º de San Vicente, 58, 182, 37007 Salamanca</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-red-500" />
                <a href="mailto:sanidad.salamanca@ugt-sp.ugt.org" className="hover:text-white transition-colors">sanidad.salamanca@ugt-sp.ugt.org</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-red-500" />
                <span>923 29 11 00 – Ext. 55598 (HVV)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-4"></span>
                <span>637 585 924</span>
              </p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-4">Enlaces de Interés</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="http://www.saludcastillayleon.es/profesionales/es/bolsa" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">Portal Oficial BAPE</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">UGT Servicios Públicos</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Afíliate</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
             <div className="inline-block bg-white p-2 rounded-lg mb-4">
                <span className="text-red-600 font-black text-2xl tracking-tighter">UGT</span>
             </div>
             <p className="text-xs text-gray-500">
               Esta aplicación es una herramienta informativa diseñada por la Sección Sindical de UGT Salamanca para facilitar la comprensión del proceso BAPE.
             </p>
             <p className="text-xs text-gray-600 mt-4">© {new Date().getFullYear()} UGT Sanidad Salamanca</p>
          </div>
        </div>
      </footer>
      
      {/* Floating Print Button */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 z-50 print:hidden"
        title="Imprimir Guía"
      >
        <Printer size={24} />
      </button>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;