import { Turma } from '../model/Turma';
import { IRepository } from './db/interface/IRepository';
import fs from 'fs';

export class TurmaRepository implements IRepository<Turma> {
  private turmas: Turma[] = [];
  constructor(private dbAddress: string) {
    this.dbAddress = dbAddress;
    this.loadDatabase();
  }

  private loadDatabase(): void {
    try {
      const data = fs.readFileSync(this.dbAddress, 'utf8');
      this.turmas = JSON.parse(data);
    } catch (error) {
      this.turmas = [];
    }
  }

  private saveDatabase(): void {
    fs.writeFileSync(
      this.dbAddress,
      JSON.stringify(this.turmas, null, 2),
      'utf8'
    );
  }

  findAll(): Turma[] {
    this.loadDatabase();
    return this.turmas;
  }

  findById(id: number): Turma | undefined {
    this.loadDatabase();
    return this.turmas.find((turma) => turma['id'] === id);
  }

  create(obj: Turma): Turma {
    this.loadDatabase();
    this.turmas.push(obj);
    this.saveDatabase();
    return obj;
  }

  update(objId: number, obj: Turma): Turma | undefined {
    this.loadDatabase();
    const index = this.turmas.findIndex((turma) => turma['id'] === objId);
    if (index !== -1) {
      this.turmas[index] = obj;
      this.saveDatabase();
      return obj;
    }
    return undefined;
  }

  delete(objId: number): void {
    this.loadDatabase();
    const index = this.turmas.findIndex((turma) => turma['id'] === objId);
    if (index !== -1) {
      this.turmas.splice(index, 1);
      this.saveDatabase();
    }
  }
}
