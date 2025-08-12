import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Users, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partner() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    website: '',
    industry: '',
    country: '',
    email: '',
    phone: '',
    countryCode: '+593',
    acceptTerms: false
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
  const [showCountryListDropdown, setShowCountryListDropdown] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
    { code: '+1', flag: '🇺🇸', name: 'Estados Unidos' },
    { code: '+34', flag: '����🇸', name: 'España' },
    { code: '+52', flag: '🇲🇽', name: 'México' },
    { code: '+57', flag: '🇨🇴', name: 'Colombia' },
    { code: '+51', flag: '🇵🇪', name: 'Perú' },
    { code: '+56', flag: '🇨🇱', name: 'Chile' },
    { code: '+54', flag: '🇦🇷', name: 'Argentina' },
    { code: '+55', flag: '🇧🇷', name: 'Brasil' },
    { code: '+58', flag: '🇻���', name: 'Venezuela' }
  ];

  const countryList = [
    'Ecuador', 'Estados Unidos', 'España', 'México', 'Colombia', 
    'Perú', 'Chile', 'Argentina', 'Brasil', 'Venezuela',
    'Guatemala', 'Honduras', 'Costa Rica', 'Panamá', 'Nicaragua',
    'Uruguay', 'Paraguay', 'Bolivia', 'Canadá', 'Francia',
    'Alemania', 'Italia', 'Reino Unido', 'Países Bajos', 'Suecia'
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
    'Consultoría y Servicios Profesionales',
    'Otros / No Listado'
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

  const validateWebsite = (website: string) => {
    // More comprehensive URL validation
    const websiteRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    const trimmedWebsite = website.trim().toLowerCase();

    // Check if it's a valid URL format
    if (!websiteRegex.test(trimmedWebsite)) {
      return false;
    }

    // Ensure it has a proper domain extension
    const domainParts = trimmedWebsite.split('.');
    return domainParts.length >= 2 && domainParts[domainParts.length - 1].length >= 2;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validation
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'Los apellidos son requeridos';
    if (!formData.company.trim()) newErrors.company = 'La empresa es requerida';
    if (!formData.website.trim()) {
      newErrors.website = 'La web de la empresa es requerida';
    } else if (!validateWebsite(formData.website)) {
      newErrors.website = 'La URL no es válida';
    }
    if (!formData.industry) newErrors.industry = 'La industria es requerida';
    if (!formData.country) newErrors.country = 'El país es requerido';
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
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debe aceptar los términos';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - here you would typically send to backend
      console.log('Partner form submitted:', formData);
      alert('¡Gracias! Nos pondremos en contacto contigo pronto para discutir la alianza.');
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
    setShowCountryCodeDropdown(false);
    setShowCountryListDropdown(false);
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
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-orx-primary mb-4 leading-tight">
              Únete como Aliado ORXlog
            </h1>
            
            <p className="text-orx-primary text-lg leading-relaxed">
              ORXlog está revolucionando la industria con tecnología que reduce costos de SIEM hasta 70% mientras mejora la detección de amenazas.
            </p>
          </div>

          {/* Form */}
          <div ref={formRef} className="w-full lg:w-[580px] bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h2 className="text-2xl font-medium text-orx-primary mb-6">Completa tus datos</h2>
            
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
                
                <div>
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    Web de la empresa / institución
                  </label>
                  <input
                    type="url"
                    placeholder="Ej. https://www.spacex.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                      errors.website ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div className="relative">
                  <label className="block text-orx-primary text-sm font-medium mb-2">
                    País
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        closeAllDropdowns();
                        setShowCountryListDropdown(!showCountryListDropdown);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-left flex items-center justify-between focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      } ${showCountryListDropdown ? 'border-orx-blue ring-2 ring-orx-blue' : ''}`}
                    >
                      <span className={formData.country ? 'text-orx-primary' : 'text-gray-500'}>
                        {formData.country || 'Selecciona un país'}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showCountryListDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showCountryListDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                        {countryList.map((country) => (
                          <button
                            key={country}
                            type="button"
                            onClick={() => {
                              handleInputChange('country', country);
                              setShowCountryListDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-orx-bg1 text-orx-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Fourth Row */}
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
                          setShowCountryCodeDropdown(!showCountryCodeDropdown);
                        }}
                        className="px-2 py-3 border border-r-0 rounded-l-lg border-gray-300 bg-white text-sm flex items-center gap-1 hover:bg-gray-50 focus:ring-2 focus:ring-orx-blue focus:border-orx-blue transition-colors w-[100px] flex-shrink-0"
                      >
                        <span>{getSelectedCountry().flag}</span>
                        <span>{getSelectedCountry().code}</span>
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${showCountryCodeDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {showCountryCodeDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-[280px] max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                handleInputChange('countryCode', country.code);
                                setShowCountryCodeDropdown(false);
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
                Enviar datos
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
