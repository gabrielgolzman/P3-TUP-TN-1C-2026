import { useContext } from "react"
import { translation_dictionary } from "./translations.dictionary"
import { TranslationContext } from "../../components/services/translation/translation.context"

const useTranslation = () => {
    const { language } = useContext(TranslationContext)

    return (key) => {
        const translation = translation_dictionary[language]
            ? translation_dictionary[language]
                .find(translation => translation.key === key)?.value
            : translation_dictionary["es"]
                .find(translation => translation.key)?.value;

        return translation || key
    }
}

export default useTranslation