import { Controller, useFormContext, type FieldValues } from "react-hook-form"
import type { FormInputProps } from "./FormInput.types"
import FormField from "../FormField/FormField";
import styles from "./FormInput.module.scss";

const FormInput = <T extends FieldValues>({ label, name, disabled, placeholder, type = "text" }: FormInputProps<T>) => {
    const { control } = useFormContext<T>();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) =>
                <FormField
                    label={label}
                    error={error?.message}
                    htmlFor={name}
                >
                    <input id={name} {...field} placeholder={placeholder} type={type} disabled={disabled} className={styles.formInput}></input>
                </FormField>
            }
        />
    )
}

export default FormInput