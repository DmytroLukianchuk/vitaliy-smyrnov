import React from 'react';

const languages = [
  { code: 'uk', label: 'UA', flag: '🇺🇦' },
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
];

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = React.useState(() => {
    return localStorage.getItem('app_language') || 'uk';
  });

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('app_language', langCode);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }));
  };

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            currentLang === lang.code
              ? 'bg-emerald-800 text-white'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          {lang.flag} {lang.label}
        </button>
      ))}
    </div>
  );
}