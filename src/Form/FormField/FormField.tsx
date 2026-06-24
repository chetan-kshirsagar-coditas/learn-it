import type { FormFieldProps } from "./FormField.types"
import styles from "./FormField.module.scss";

const FormField = ({ label, children, error, htmlFor }: FormFieldProps) => {
    return (
        <div className={styles.formField}>
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            {error && <span className={styles.errMsg}>{error}</span>}
        </div>
    )
}

export default FormField