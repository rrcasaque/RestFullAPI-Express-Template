export interface IRepository<T> {
  findAll(): T[];
  findById(id: number): T | undefined;
  create(obj: T): T;
  update(objId: number, obj: T): T | undefined;
  delete(objId: number): void;
}
