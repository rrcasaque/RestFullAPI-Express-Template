import { Disciplina } from '../model/Disciplina';
import { DisciplinaRepository } from '../repositories/DisciplinaRepository';

export class DisciplinaService {
  constructor(private dbAddress: string) {
    this.dbAddress = dbAddress;
  }

  createDisciplina = (disciplina: Disciplina) => {
    const disciplinaRepository = new DisciplinaRepository(this.dbAddress);
    const disciplinaExists = disciplinaRepository.findById(disciplina.getId());
    if (disciplinaExists) throw new Error('disciplina id already exists');
    return disciplinaRepository.create(disciplina);
  };

  findAllDisciplinas = () => {
    const disciplinaRepository = new DisciplinaRepository(this.dbAddress);
    return disciplinaRepository.findAll();
  };

  findOneDisciplina = (id: number) => {
    const disciplinaRepository = new DisciplinaRepository(this.dbAddress);
    const disciplina = disciplinaRepository.findById(id);
    if (!disciplina) throw new Error('Disciplina not found');
    return disciplina;
  };

  updateDisciplina = (id: number, disciplina: Disciplina) => {
    const disciplinaRepository = new DisciplinaRepository(this.dbAddress);
    const disciplinaExist = disciplinaRepository.findById(id);
    if (!disciplinaExist) throw new Error('Disciplina not found');
    return disciplinaRepository.update(id, disciplina);
  };

  deleteDisciplina = (id: number) => {
    const disciplinaRepository = new DisciplinaRepository(this.dbAddress);
    const disciplinaExist = disciplinaRepository.findById(id);
    if (!disciplinaExist) throw new Error('Disciplina not found');
    disciplinaRepository.delete(id);
    return 'Disciplina deleted successfully';
  };
}
