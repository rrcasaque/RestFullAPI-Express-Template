import { Turma } from '../model/Turma';
import { TurmaRepository } from '../repositories/TurmaRepository';

export class TurmaService {
  constructor(private dbAddress: string) {
    this.dbAddress = dbAddress;
  }

  createTurma = (turma: Turma) => {
    const turmaRepository = new TurmaRepository(this.dbAddress);
    const turmaExist = turmaRepository.findById(turma.getId()); // Assumindo que existe um método getId() em Turma para obter o ID.
    if (turmaExist) throw new Error('Turma id already exists');
    return turmaRepository.create(turma);
  };

  findAllTurmas = () => {
    const turmaRepository = new TurmaRepository(this.dbAddress);
    return turmaRepository.findAll();
  };

  findOneTurma = (id: number) => {
    const turmaRepository = new TurmaRepository(this.dbAddress);
    const turma = turmaRepository.findById(id);
    if (!turma) throw new Error('Turma not found');
    return turma;
  };

  updateTurma = (id: number, turma: Turma) => {
    const turmaRepository = new TurmaRepository(this.dbAddress);
    const turmaExist = turmaRepository.findById(id);
    if (!turmaExist) throw new Error('Turma not found');
    return turmaRepository.update(id, turma);
  };

  deleteTurma = (id: number) => {
    const turmaRepository = new TurmaRepository(this.dbAddress);
    const turmaExist = turmaRepository.findById(id);
    if (!turmaExist) throw new Error('Turma not found');
    turmaRepository.delete(id);
    return 'Turma deleted successfully';
  };
}
