import { Request, Response } from 'express';
import { AlunoType, Validation } from '../services/Validation';
import { Aluno } from '../model/Aluno';
import { AlunoService } from '../services/AlunoService';
import { ZodError } from 'zod';

export const createAluno = (req: Request, res: Response) => {
  try {
    const { nome, registroAcademico, turmaId, disciplinasId } =
      req.body as AlunoType;
    Validation.AlunoSchema.parse({
      nome: nome,
      registroAcademico: registroAcademico,
      turmaId: turmaId,
      disciplinasId: disciplinasId,
    });
    const aluno = new Aluno(
      nome,
      registroAcademico,
      turmaId,
      disciplinasId ? disciplinasId : []
    );
    const alunoService = new AlunoService('src/repositories/db/aluno.json');
    return res.status(201).json(alunoService.createAluno(aluno));
  } catch (error: any) {
    if (error instanceof ZodError) return res.status(400).json(error);
    return res.status(400).json({ error: error.message });
  }
};

export const getAll = (req: Request, res: Response) => {
  try {
    const alunoService = new AlunoService('src/repositories/db/aluno.json');
    return res.status(200).json(alunoService.findAllAlunos());
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const alunoService = new AlunoService('src/repositories/db/aluno.json');
    return res.status(200).json(alunoService.findOneAluno(parseInt(id)));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateAluno = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { nome, registroAcademico, turmaId, disciplinasId } =
      req.body as AlunoType;

    Validation.AlunoSchema.parse({
      nome: nome,
      registroAcademico: registroAcademico,
      turmaId: turmaId,
      disciplinasId: disciplinasId,
    });
    const aluno = new Aluno(
      nome,
      registroAcademico,
      turmaId,
      disciplinasId ? disciplinasId : []
    );
    const alunoService = new AlunoService('src/repositories/db/aluno.json');
    return res.status(200).json(alunoService.updateAluno(parseInt(id), aluno));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const deleteAluno = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const alunoService = new AlunoService('src/repositories/db/aluno.json');
    return res
      .status(200)
      .json({ message: alunoService.deleteAluno(parseInt(id)) });
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};
