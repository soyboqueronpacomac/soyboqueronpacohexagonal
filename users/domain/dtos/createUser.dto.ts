import z from 'zod'

export const CreateUserSchema = z.object({
    name: z.string().min(1,'El nombre es obligatorio'),
    email: z.string().email('formato no es valido'),
    password: z.string().min(8, 'La contraseña tiene ser mayor de 8 caracteres')
})

export type CreateUserDto = z.infer<typeof CreateUserSchema>