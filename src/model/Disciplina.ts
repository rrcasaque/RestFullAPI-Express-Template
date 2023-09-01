export class Disciplina {
  constructor(private nome: string, private id: number) {
    this.nome = nome;
    this.id = id;
  }
  getNome() {
    return this.nome;
  }
  getId() {
    return this.id;
  }
}
