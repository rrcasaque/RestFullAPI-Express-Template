import { z } from 'zod';

export type AlunoType = z.infer<typeof Validation.AlunoSchema>;
export type DisciplinaType = z.infer<typeof Validation.DisciplinaSchema>;
export type TurmaType = z.infer<typeof Validation.TurmaSchema>;

export class Validation {
  static AlunoSchema = z.object({
    nome: z.string(),
    registroAcademico: z.number(),
    turmaId: z.number(),
    disciplinasId: z.array(z.number()).optional(),
  });
  static DisciplinaSchema = z.object({
    nome: z.string(),
    id: z.number(),
  });
  static TurmaSchema = z.object({
    id: z.number(),
    semestre: z.string(),
  });
}
