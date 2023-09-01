import { Router } from 'express';
import {
  createAluno,
  deleteAluno,
  getAll,
  getById,
  updateAluno,
} from '../controllers/AlunoController';

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createAluno);

router.put('/:id', updateAluno);

router.delete('/:id', deleteAluno);

export const alunoRoute = router;
