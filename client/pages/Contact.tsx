import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Mail, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    countryCode: '+51',
    dataVolume: '',
    dataSources: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const industries = [
    'Servicios Financieros',
    'Salud y Ciencias de la Vida',
    'Gobierno y Sector Público',
    'Retail y E-commerce',
    'Energía y Utilities',
    'Manufactura e Industrial',
    'Tecnología y Telecomunicaciones',
    'Educación',
    'Transporte y Logística',
    'Medios y Entretenimiento',
    'Otros / No Listado'
  ];

  const dataVolumes = [
    '100 MB - 1 GB',
    '1 GB - 10 GB',
    '10 GB - 100 GB',
    '100 GB - 1 TB',
    '1 TB - 10 TB',
    '10 TB - 100 TB',
    '+100 TB'
  ];

  const dataSourcesOptions = [
    '<10',
    '10-50',
    '50-100',
    '+100',
    'No estoy seguro'
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.length >= 7;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validation
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'Los apellidos son requeridos';
    if (!formData.company.trim()) newErrors.company = 'La empresa es requerida';
    if (!formData.industry) newErrors.industry = 'La industria es requerida';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }
    if (!formData.dataVolume) newErrors.dataVolume = 'El volumen de datos es requerido';
    if (!formData.dataSources) newErrors.dataSources = 'El número de fuentes es requerido';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debe aceptar los términos';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - here you would typically send to backend
      console.log('Form submitted:', formData);
      alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
      navigate('/');
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Header spacer */}
      <div className="h-32"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="flex-1 lg:pt-6">
            <div className="w-20 h-20 bg-orx-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-orx-primary mb-4 leading-tight">
              Cada día que tu SIEM opera ineficientemente es dinero perdido y riesgo incrementado
            </h1>
            
            <p className="text-orx-primary text-lg leading-relaxed">
              Agenda una demostración personalizada y comprueba cómo ORXlog puede reducir tus costos de SIEM hasta un 70% mientras mejora la detección de amenazas en tiempo real.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-[580px] bg-white rounded-3xl p-8 border border-gray-200">
            <h2 className="text-2xl font-medium text-orx-primary mb-6">Agenda una demo</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Elon"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Tus apellidos
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Musk"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Empresa / Institución
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. SpaceX"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Industria / Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.industry ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Correo corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="Ej. nombre@miempresa.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Número celular
                  </label>
                  <div className="flex">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange('countryCode', e.target.value)}
                      className="px-3 py-3 border border-r-0 rounded-l-lg border-gray-300 bg-gray-50 text-sm"
                    >
                      <option value="+51">🇵🇪 +51</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+57">🇨🇴 +57</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="123 456 789"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`flex-1 px-4 py-3 border border-l-0 rounded-r-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Volumen de datos
                  </label>
                  <select
                    value={formData.dataVolume}
                    onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.dataVolume ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    {dataVolumes.map((volume) => (
                      <option key={volume} value={volume}>{volume}</option>
                    ))}
                  </select>
                  {errors.dataVolume && <p className="text-red-500 text-xs mt-1">{errors.dataVolume}</p>}
                </div>
                
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Número de fuentes de datos
                  </label>
                  <select
                    value={formData.dataSources}
                    onChange={(e) => handleInputChange('dataSources', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue ${
                      errors.dataSources ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona una opción</option>
                    {dataSourcesOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.dataSources && <p className="text-red-500 text-xs mt-1">{errors.dataSources}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-orx-primary text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Compártenos cualquier contexto adicional que nos ayude a personalizar tu demo..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue resize-none"
                ></textarea>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                  className={`mt-1 w-4 h-4 text-orx-blue border-2 rounded focus:ring-orx-blue ${
                    errors.acceptTerms ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <label htmlFor="terms" className="text-orx-primary text-sm leading-relaxed">
                  Acepto la política de privacidad y términos de uso de ORXlog.
                </label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orx-blue text-white py-3 px-6 rounded-full font-medium hover:bg-orx-blue/90 transition-colors"
              >
                Solicita una demo
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
