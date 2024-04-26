import {z} from "zod"

export const formSchema = z.object({
    name: z.string().nonempty("Campo obrigatorio").min(2, "necessario 2 caracteres"),
    email: z.string().nonempty("Campo obrigatorio").email("Forneça um e-mail válido"),
    password: z.string()
    .nonempty("Campo obrigatorio")
    .min(8, "Mínimo de 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "Pelo menos uma letra maiuscula")
    .regex(/(?=.*?[a-z])/, "É necessario uma letra minuscula")
    .regex(/(?=.*?[0-9])/, "Pelo menos um número")
    .regex(/(?=.*?[!@#$%^&*()_+{}\[\]:;<>,.?~\-])/, "Pelo menos um caractere especial"),
    verifyPassword: z.string().nonempty("Campo obrigatorio"),
    bio: z.string().nonempty("Campo obrigatorio"),
    contact: z.string().nonempty("Campo obrigatorio"),
    course_module: z.string().nonempty("Escolha uma opção")
}).refine(({password, verifyPassword}) => password === verifyPassword, {
    message: "As senhas não coincidem",
    path: ["verifyPassword"],
});