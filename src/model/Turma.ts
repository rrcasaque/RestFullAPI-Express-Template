export class Turma {
  constructor(private semestre: string, private id: number) {
    this.semestre = semestre;
    this.id = id;
  }
  getSemestre() {
    return this.semestre;
  }
  getId() {
    return this.id;
  }
}
