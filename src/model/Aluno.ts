export class Aluno {
  constructor(
    private nome: string,
    private registroAcademico: number,
    private turmaId: number,
    private disciplinasId: number[]
  ) {
    this.nome = nome;
    this.registroAcademico = registroAcademico;
    this.turmaId = turmaId;
    this.disciplinasId = disciplinasId;
  }
  getNome() {
    return this.nome;
  }
  getRegistroAcademico() {
    return this.registroAcademico;
  }
  getTurmaId() {
    return this.turmaId;
  }
  getDisciplinasId() {
    return this.disciplinasId;
  }
}
