import { Router } from 'express';
import {
  createDisciplina,
  deleteDisciplina,
  getAllDisciplinas,
  getDisciplinaById,
  updateDisciplina,
} from '../controllers/DisciplinaController';

const router = Router();

router.get('/', getAllDisciplinas);

router.get('/:id', getDisciplinaById);

router.post('/', createDisciplina);

router.put('/:id', updateDisciplina);

router.delete('/:id', deleteDisciplina);

export const disciplinaRoute = router;
