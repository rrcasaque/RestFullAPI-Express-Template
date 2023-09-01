import { Disciplina } from '../model/Disciplina';
import { IRepository } from './db/interface/IRepository';
import fs from 'fs';

export class DisciplinaRepository implements IRepository<Disciplina> {
  private disciplinas: Disciplina[] = [];
  constructor(private dbAddress: string) {
    this.dbAddress = dbAddress;
    this.loadDatabase();
  }

  private loadDatabase(): void {
    try {
      const data = fs.readFileSync(this.dbAddress, 'utf8');
      this.disciplinas = JSON.parse(data);
    } catch (error) {
      this.disciplinas = [];
    }
  }

  private saveDatabase(): void {
    fs.writeFileSync(
      this.dbAddress,
      JSON.stringify(this.disciplinas, null, 2),
      'utf8'
    );
  }

  findAll(): Disciplina[] {
    this.loadDatabase();
    return this.disciplinas;
  }

  findById(id: number): Disciplina | undefined {
    this.loadDatabase();
    return this.disciplinas.find((disciplina) => disciplina['id'] === id);
  }

  create(obj: Disciplina): Disciplina {
    this.loadDatabase();
    this.disciplinas.push(obj);
    this.saveDatabase();
    return obj;
  }

  update(objId: number, obj: Disciplina): Disciplina | undefined {
    this.loadDatabase();
    const index = this.disciplinas.findIndex(
      (disciplina) => disciplina['id'] === objId
    );
    if (index !== -1) {
      this.disciplinas[index] = obj;
      this.saveDatabase();
      return obj;
    }
    return undefined;
  }

  delete(objId: number): void {
    this.loadDatabase();
    const index = this.disciplinas.findIndex(
      (disciplina) => disciplina['id'] === objId
    );
    if (index !== -1) {
      this.disciplinas.splice(index, 1);
      this.saveDatabase();
    }
  }
}
