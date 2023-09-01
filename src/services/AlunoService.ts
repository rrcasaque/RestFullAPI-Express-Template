import { Aluno } from '../model/Aluno';
import { AlunoRepository } from '../repositories/AlunoRepository';

export class AlunoService {
  constructor(private dbAddress: string) {
    this.dbAddress = dbAddress;
  }
  createAluno = (aluno: Aluno) => {
    const alunoRepository = new AlunoRepository(this.dbAddress);
    const alunoExist = alunoRepository.findById(aluno.getRegistroAcademico());
    if (alunoExist) throw new Error('user id already exists');
    return alunoRepository.create(aluno);
  };
  findAllAlunos = () => {
    const alunoRepository = new AlunoRepository(this.dbAddress);
    return alunoRepository.findAll();
  };
  findOneAluno = (id: number) => {
    const alunoRepository = new AlunoRepository(this.dbAddress);
    const aluno = alunoRepository.findById(id);
    if (!aluno) throw new Error('user not found');
    return aluno;
  };
  updateAluno = (id: number, aluno: Aluno) => {
    const alunoRepository = new AlunoRepository(this.dbAddress);
    const alunoExist = alunoRepository.findById(id);
    if (!alunoExist) throw new Error('user not found');
    return alunoRepository.update(id, aluno);
  };
  deleteAluno = (id: number) => {
    const alunoRepository = new AlunoRepository(this.dbAddress);
    const alunoExist = alunoRepository.findById(id);
    if (!alunoExist) throw new Error('user not found');
    alunoRepository.delete(id);
    return 'user deleted successfully';
  };
}
