import { useContext } from "react"
import { Form } from "react-bootstrap"
import { TranslationContext } from "../../services/translation/translation.context"

const ComboLanguage = () => {
    const { language, changeLanguage } = useContext(TranslationContext)

    const handleChangeLanguage = (event) => {
        changeLanguage(event.target.value)
    }
    return (
        <Form.Select
            onChange={handleChangeLanguage}
            value={language}
            className="w-75 my-4"
        >
            <option value="es">Cambiar a español</option>
            <option value="en">Cambiar a inglés</option>
        </Form.Select>
    )
}

export default ComboLanguage