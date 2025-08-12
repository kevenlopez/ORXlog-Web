import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Mail, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    countryCode: '+593',
    dataVolume: '',
    dataSources: '',
    message: '',
    acceptTerms: false
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showVolumeDropdown, setShowVolumeDropdown] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    { code: '+93', flag: '🇦🇫', name: 'Afganistán' },
    { code: '+355', flag: '🇦🇱', name: 'Albania' },
    { code: '+49', flag: '🇩🇪', name: 'Alemania' },
    { code: '+376', flag: '🇦🇩', name: 'Andorra' },
    { code: '+244', flag: '🇦🇴', name: 'Angola' },
    { code: '+966', flag: '🇸🇦', name: 'Arabia Saudí' },
    { code: '+213', flag: '🇩🇿', name: 'Argelia' },
    { code: '+54', flag: '🇦🇷', name: 'Argentina' },
    { code: '+374', flag: '🇦🇲', name: 'Armenia' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+43', flag: '🇦🇹', name: 'Austria' },
    { code: '+994', flag: '🇦🇿', name: 'Azerbaiyán' },
    { code: '+973', flag: '🇧🇭', name: 'Baréin' },
    { code: '+880', flag: '🇧🇩', name: 'Bangladés' },
    { code: '+375', flag: '🇧🇾', name: 'Bielorrusia' },
    { code: '+32', flag: '🇧🇪', name: 'Bélgica' },
    { code: '+229', flag: '🇧🇯', name: 'Benín' },
    { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
    { code: '+387', flag: '🇧🇦', name: 'Bosnia y Herzegovina' },
    { code: '+267', flag: '🇧🇼', name: 'Botsuana' },
    { code: '+55', flag: '🇧🇷', name: 'Brasil' },
    { code: '+673', flag: '🇧🇳', name: 'Brunéi' },
    { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
    { code: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
    { code: '+855', flag: '🇰🇭', name: 'Camboya' },
    { code: '+237', flag: '🇨🇲', name: 'Camerún' },
    { code: '+1', flag: '🇨🇦', name: 'Canadá' },
    { code: '+56', flag: '🇨🇱', name: 'Chile' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+357', flag: '🇨🇾', name: 'Chipre' },
    { code: '+57', flag: '🇨🇴', name: 'Colombia' },
    { code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
    { code: '+385', flag: '🇭🇷', name: 'Croacia' },
    { code: '+53', flag: '🇨🇺', name: 'Cuba' },
    { code: '+45', flag: '��🇰', name: 'Dinamarca' },
    { code: '+1', flag: '🇩🇴', name: 'República Dominicana' },
    { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
    { code: '+20', flag: '🇪🇬', name: 'Egipto' },
    { code: '+503', flag: '🇸🇻', name: 'El Salvador' },
    { code: '+971', flag: '🇦🇪', name: 'Emiratos Árabes Unidos' },
    { code: '+421', flag: '🇸🇰', name: 'Eslovaquia' },
    { code: '+386', flag: '🇸🇮', name: 'Eslovenia' },
    { code: '+34', flag: '🇪🇸', name: 'España' },
    { code: '+1', flag: '🇺🇸', name: 'Estados Unidos' },
    { code: '+372', flag: '🇪🇪', name: 'Estonia' },
    { code: '+251', flag: '🇪🇹', name: 'Etiopía' },
    { code: '+358', flag: '🇫🇮', name: 'Finlandia' },
    { code: '+33', flag: '🇫🇷', name: 'Francia' },
    { code: '+995', flag: '🇬🇪', name: 'Georgia' },
    { code: '+233', flag: '🇬🇭', name: 'Ghana' },
    { code: '+30', flag: '🇬🇷', name: 'Grecia' },
    { code: '+502', flag: '🇬🇹', name: 'Guatemala' },
    { code: '+224', flag: '🇬🇳', name: 'Guinea' },
    { code: '+509', flag: '🇭🇹', name: 'Haití' },
    { code: '+504', flag: '🇭🇳', name: 'Honduras' },
    { code: '+36', flag: '🇭🇺', name: 'Hungría' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
    { code: '+98', flag: '🇮🇷', name: 'Irán' },
    { code: '+964', flag: '🇮🇶', name: 'Irak' },
    { code: '+353', flag: '🇮🇪', name: 'Irlanda' },
    { code: '+354', flag: '🇮🇸', name: 'Islandia' },
    { code: '+972', flag: '🇮🇱', name: 'Israel' },
    { code: '+39', flag: '🇮🇹', name: 'Italia' },
    { code: '+81', flag: '🇯🇵', name: 'Japón' },
    { code: '+962', flag: '🇯🇴', name: 'Jordania' },
    { code: '+7', flag: '🇰🇿', name: 'Kazajistán' },
    { code: '+254', flag: '🇰🇪', name: 'Kenia' },
    { code: '+996', flag: '🇰🇬', name: 'Kirguistán' },
    { code: '+965', flag: '🇰🇼', name: 'Kuwait' },
    { code: '+371', flag: '🇱🇻', name: 'Letonia' },
    { code: '+961', flag: '🇱🇧', name: 'Líbano' },
    { code: '+370', flag: '🇱🇹', name: 'Lituania' },
    { code: '+352', flag: '🇱🇺', name: 'Luxemburgo' },
    { code: '+389', flag: '🇲🇰', name: 'Macedonia del Norte' },
    { code: '+60', flag: '🇲🇾', name: 'Malasia' },
    { code: '+356', flag: '🇲🇹', name: 'Malta' },
    { code: '+212', flag: '🇲🇦', name: 'Marruecos' },
    { code: '+52', flag: '🇲🇽', name: 'México' },
    { code: '+373', flag: '🇲🇩', name: 'Moldavia' },
    { code: '+976', flag: '🇲🇳', name: 'Mongolia' },
    { code: '+382', flag: '🇲🇪', name: 'Montenegro' },
    { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
    { code: '+505', flag: '🇳🇮', name: 'Nicaragua' },
    { code: '+47', flag: '🇳🇴', name: 'Noruega' },
    { code: '+64', flag: '🇳🇿', name: 'Nueva Zelanda' },
    { code: '+31', flag: '🇳🇱', name: 'Países Bajos' },
    { code: '+92', flag: '🇵🇰', name: 'Pakistán' },
    { code: '+507', flag: '🇵🇦', name: 'Panamá' },
    { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
    { code: '+51', flag: '🇵🇪', name: 'Perú' },
    { code: '+48', flag: '🇵🇱', name: 'Polonia' },
    { code: '+351', flag: '🇵🇹', name: 'Portugal' },
    { code: '+974', flag: '🇶🇦', name: 'Catar' },
    { code: '+44', flag: '🇬🇧', name: 'Reino Unido' },
    { code: '+420', flag: '🇨🇿', name: 'República Checa' },
    { code: '+40', flag: '🇷🇴', name: 'Rumania' },
    { code: '+7', flag: '🇷🇺', name: 'Rusia' },
    { code: '+381', flag: '🇷🇸', name: 'Serbia' },
    { code: '+65', flag: '🇸🇬', name: 'Singapur' },
    { code: '+27', flag: '🇿🇦', name: 'Sudáfrica' },
    { code: '+82', flag: '🇰🇷', name: 'Corea del Sur' },
    { code: '+46', flag: '🇸🇪', name: 'Suecia' },
    { code: '+41', flag: '🇨🇭', name: 'Suiza' },
    { code: '+66', flag: '🇹🇭', name: 'Tailandia' },
    { code: '+886', flag: '🇹🇼', name: 'Taiwán' },
    { code: '+90', flag: '🇹🇷', name: 'Turquía' },
    { code: '+380', flag: '🇺🇦', name: 'Ucrania' },
    { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
    { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
    { code: '+84', flag: '🇻🇳', name: 'Vietnam' }
  ];

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

  const handlePhoneInput = (value: string) => {
    // Only allow numbers, spaces, dashes, parentheses, and plus sign
    const cleanedValue = value.replace(/[^\d\s\-\(\)\+]/g, '');
    handleInputChange('phone', cleanedValue);
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

  const getSelectedCountry = () => {
    return countries.find(country => country.code === formData.countryCode) || countries[0];
  };

  const closeAllDropdowns = () => {
    setShowCountryDropdown(false);
    setShowIndustryDropdown(false);
    setShowVolumeDropdown(false);
    setShowSourcesDropdown(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <div ref={formRef} className="w-full lg:w-[580px] bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                
                <div className="relative">
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Industria / Sector
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        closeAllDropdowns();
                        setShowIndustryDropdown(!showIndustryDropdown);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                        errors.industry ? 'border-red-500' : 'border-gray-300'
                      } ${showIndustryDropdown ? 'border-orx-blue ring-2 ring-orx-blue' : ''}`}
                    >
                      <span className={formData.industry ? 'text-orx-primary' : 'text-gray-500'}>
                        {formData.industry || 'Selecciona una opción'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showIndustryDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showIndustryDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {industries.map((industry) => (
                          <button
                            key={industry}
                            type="button"
                            onClick={() => {
                              handleInputChange('industry', industry);
                              setShowIndustryDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-orx-bg1 text-orx-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {industry}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div className="relative">
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Número celular
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          closeAllDropdowns();
                          setShowCountryDropdown(!showCountryDropdown);
                        }}
                        className="px-2 py-3 border border-r-0 rounded-l-lg border-gray-300 bg-white text-sm flex items-center gap-1 hover:bg-gray-50 focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors w-[100px] flex-shrink-0"
                      >
                        <span>{getSelectedCountry().flag}</span>
                        <span>{getSelectedCountry().code}</span>
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-[280px] max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                handleInputChange('countryCode', country.code);
                                setShowCountryDropdown(false);
                              }}
                              className="w-full px-3 py-2 text-left hover:bg-orx-bg1 transition-colors flex items-center gap-2 text-sm first:rounded-t-lg last:rounded-b-lg"
                            >
                              <span>{country.flag}</span>
                              <span className="font-medium">{country.code}</span>
                              <span className="text-gray-600 truncate">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      placeholder="123 456 789"
                      value={formData.phone}
                      onChange={(e) => handlePhoneInput(e.target.value)}
                      inputMode="numeric"
                      className={`flex-1 px-4 py-3 border border-l-0 rounded-r-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Volumen de datos
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        closeAllDropdowns();
                        setShowVolumeDropdown(!showVolumeDropdown);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                        errors.dataVolume ? 'border-red-500' : 'border-gray-300'
                      } ${showVolumeDropdown ? 'border-orx-blue ring-2 ring-orx-blue' : ''}`}
                    >
                      <span className={formData.dataVolume ? 'text-orx-primary' : 'text-gray-500'}>
                        {formData.dataVolume || 'Selecciona una opción'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showVolumeDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showVolumeDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {dataVolumes.map((volume) => (
                          <button
                            key={volume}
                            type="button"
                            onClick={() => {
                              handleInputChange('dataVolume', volume);
                              setShowVolumeDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-orx-bg1 text-orx-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {volume}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.dataVolume && <p className="text-red-500 text-xs mt-1">{errors.dataVolume}</p>}
                </div>
                
                <div className="relative">
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Número de fuentes de datos
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        closeAllDropdowns();
                        setShowSourcesDropdown(!showSourcesDropdown);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                        errors.dataSources ? 'border-red-500' : 'border-gray-300'
                      } ${showSourcesDropdown ? 'border-orx-blue ring-2 ring-orx-blue' : ''}`}
                    >
                      <span className={formData.dataSources ? 'text-orx-primary' : 'text-gray-500'}>
                        {formData.dataSources || 'Selecciona una opción'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showSourcesDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showSourcesDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {dataSourcesOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              handleInputChange('dataSources', option);
                              setShowSourcesDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-orx-bg1 text-orx-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue resize-none transition-colors"
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
