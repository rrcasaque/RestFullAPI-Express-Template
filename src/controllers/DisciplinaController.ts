import { Request, Response } from 'express';
import { DisciplinaType, Validation } from '../services/Validation';
import { Disciplina } from '../model/Disciplina';
import { DisciplinaService } from '../services/DisciplinaService';
import { ZodError } from 'zod';

export const createDisciplina = (req: Request, res: Response) => {
  try {
    const { nome, id } = req.body as DisciplinaType;
    Validation.DisciplinaSchema.parse({
      nome: nome,
      id: id,
    });
    const disciplina = new Disciplina(nome, id);
    const disciplinaService = new DisciplinaService(
      'src/repositories/db/disciplina.json'
    );
    return res.status(201).json(disciplinaService.createDisciplina(disciplina));
  } catch (error: any) {
    if (error instanceof ZodError) return res.status(400).json(error);
    return res.status(400).json({ error: error.message });
  }
};

export const getAllDisciplinas = (req: Request, res: Response) => {
  try {
    const disciplinaService = new DisciplinaService(
      'src/repositories/db/disciplina.json'
    );
    return res.status(200).json(disciplinaService.findAllDisciplinas());
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getDisciplinaById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const disciplinaService = new DisciplinaService(
      'src/repositories/db/disciplina.json'
    );
    return res
      .status(200)
      .json(disciplinaService.findOneDisciplina(parseInt(id)));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateDisciplina = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { nome, id: disciplinaId } = req.body as DisciplinaType;

    Validation.DisciplinaSchema.parse({
      nome: nome,
      id: disciplinaId,
    });
    const disciplina = new Disciplina(nome, disciplinaId);
    const disciplinaService = new DisciplinaService(
      'src/repositories/db/disciplina.json'
    );
    return res
      .status(200)
      .json(disciplinaService.updateDisciplina(parseInt(id), disciplina));
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const deleteDisciplina = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const disciplinaService = new DisciplinaService(
      'src/repositories/db/disciplina.json'
    );
    return res
      .status(200)
      .json({ message: disciplinaService.deleteDisciplina(parseInt(id)) });
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};
