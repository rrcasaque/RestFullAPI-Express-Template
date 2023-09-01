import { Aluno } from '../model/Aluno';
import { IRepository } from './db/interface/IRepository';
import fs from 'fs';

export class AlunoRepository implements IRepository<Aluno> {
  private alunos: Aluno[] = [];
  constructor(private dbAddress: string) {
    this.loadDatabase();
  }

  private loadDatabase(): void {
    try {
      const data = fs.readFileSync(this.dbAddress, 'utf8');
      this.alunos = JSON.parse(data);
    } catch (error) {
      this.alunos = [];
    }
  }

  private saveDatabase(): void {
    fs.writeFileSync(
      this.dbAddress,
      JSON.stringify(this.alunos, null, 2),
      'utf8'
    );
  }

  findAll(): Aluno[] {
    this.loadDatabase();
    return this.alunos;
  }

  findById(id: number): Aluno | undefined {
    this.loadDatabase();
    return this.alunos.find((aluno) => aluno['registroAcademico'] === id);
  }

  create(obj: Aluno): Aluno {
    this.loadDatabase();
    this.alunos.push(obj);
    this.saveDatabase();
    return obj;
  }

  update(objId: number, obj: Aluno): Aluno | undefined {
    this.loadDatabase();
    const index = this.alunos.findIndex(
      (aluno) => aluno['registroAcademico'] === objId
    );
    if (index !== -1) {
      this.alunos[index] = obj;
      this.saveDatabase();
      return obj;
    }
    return undefined;
  }

  delete(objId: number): void {
    this.loadDatabase();
    const index = this.alunos.findIndex(
      (aluno) => aluno['registroAcademico'] === objId
    );
    if (index !== -1) {
      this.alunos.splice(index, 1);
      this.saveDatabase();
    }
  }
}
