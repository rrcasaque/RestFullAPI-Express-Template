import { Router } from 'express';
import {
  createTurma,
  deleteTurma,
  getAllTurmas,
  getTurmaById,
  updateTurma,
} from '../controllers/TurmaController';

const router = Router();

router.get('/', getAllTurmas);

router.get('/:id', getTurmaById);

router.post('/', createTurma);

router.put('/:id', updateTurma);

router.delete('/:id', deleteTurma);

export const turmaRoute = router;
