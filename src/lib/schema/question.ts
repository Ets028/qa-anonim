import { z } from "zod";

export const createQuestionSchema = z.object({
  content: z
    .string()
    .min(1, "Pertanyaan tidak boleh kosong")
    .max(500, "Pertanyaan maksimal 500 karakter"),
  userId: z.string(),
});

export const answerQuestionSchema = z.object({
  answer: z
    .string()
    .min(1, "Jawaban tidak boleh kosong")
    .max(1000, "Jawaban maksimal 1000 karakter"),
});

export type CreateQuestionData = z.infer<typeof createQuestionSchema>;
export type AnswerQuestionData = z.infer<typeof answerQuestionSchema>;
