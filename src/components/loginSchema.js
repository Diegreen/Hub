import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("O email é obrigatorio"),
    password: z.string().nonempty("Senha obrigatoria")
})