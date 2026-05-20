import { useState } from "react"
import { TranslationContext } from "./translation.context";

const languageValue = localStorage.getItem("language");

const TranslationContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(languageValue ?? "en");

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage)
    }

    return (
        <TranslationContext value={{ language, changeLanguage }}>
            {children}
        </TranslationContext>
    )
}

export default TranslationContextProvider