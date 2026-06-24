import { Controller, useFormContext, type FieldValues } from "react-hook-form"
import type { FormInputProps } from "./FormInput.types"

const FormInput = <T extends FieldValues>({label, name, disabled, placeholder, type}: FormInputProps<T>) => {
    const { control } = useFormContext<T>();
  return (
    <Controller
    name={name}
    control={control}
    render={({field, fieldState: { error }}) => 
        <input></input>
    }
    />
  )
}

export default FormInput