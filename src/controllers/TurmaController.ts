import { Request, Response } from 'express';
import { TurmaType, Validation } from '../services/Validation';
import { Turma } from '../model/Turma';
import { TurmaService } from '../services/TurmaService';
import { ZodError } from 'zod';

export const createTurma = (req: Request, res: Response) => {
  try {
    const { semestre, id } = req.body as TurmaType;
    Validation.TurmaSchema.parse({
      semestre: semestre,
      id: id,
    });
    const turma = new Turma(semestre, id);
    const turmaService = new TurmaService('src/repositories/db/turma.json');
    return res.status(201).json(turmaService.createTurma(turma));
  } catch (error: any) {
    if (error instanceof ZodError) return res.status(400).json(error);
    return res.status(400).json({ error: error.message });
  }
};

export const getAllTurmas = (req: Request, res: Response) => {
  try {
    const turmaService = new TurmaService('src/repositories/db/turma.json');
    return res.status(200).json(turmaService.findAllTurmas());
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTurmaById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const turmaService = new TurmaService('src/repositories/db/turma.json');
    return res.status(200).json(turmaService.findOneTurma(parseInt(id)));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateTurma = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { semestre, id: turmaId } = req.body as TurmaType;

    Validation.TurmaSchema.parse({
      semestre: semestre,
      id: turmaId,
    });
    const turma = new Turma(semestre, turmaId);
    const turmaService = new TurmaService('src/repositories/db/turma.json');
    return res.status(200).json(turmaService.updateTurma(parseInt(id), turma));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const deleteTurma = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const turmaService = new TurmaService('src/repositories/db/turma.json');
    return res
      .status(200)
      .json({ message: turmaService.deleteTurma(parseInt(id)) });
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};
