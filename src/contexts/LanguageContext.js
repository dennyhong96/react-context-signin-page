import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("spanish");

  const changeLanguage = (evt) => {
    setLanguage(evt.target.value);
  };

  // Provides children with value: One value per context
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
