export interface iProfesores {
    nombre: string;
    cedula: string;
    codigo: string;
    materia: string;
}   

export class Cl_mProfesores {
        protected _nombre: string = "";
        protected _cedula: string = "";
        protected _codigo: string = "";
        protected _materia: string = "";
 constructor({
    nombre,
    cedula,
    codigo,
    materia
  }: {
     nombre: string;
    cedula: string;
    codigo: string;
    materia: string;
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.codigo = codigo;
    this.materia = materia;
  }
  public set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set cedula(cedula: string) {
    this._cedula = cedula.trim();
  }
  public get cedula(): string {
    return this._cedula;
  }
  public set codigo(codigo: string) {
    this._codigo = codigo.trim();
  }
  public get codigo(): string {
    return this._codigo;
  }
  public set materia(materia: string) {
    this._materia = materia.trim().toUpperCase();
  }
  public get materia(): string {
    return this._materia;
  }
  error(): string | false {
    // Validacion de cedula
    if (this._cedula.length === 0) return "El cedula no puede estar vacía.";
    if (this._cedula.length < 7 && this._cedula.length > 8) return "El cedula debe tener al menos 7 o 8 caracteres.";
    // Validacion de aula
    if (this._codigo.length === 0) return "El aula no puede estar vacío.";
    if (this._codigo.length !== 7) return "El aula debe tener exactamente 7 digitos.";

    return false;
  }
  toJSON(): iProfesores {
    return {
      nombre: this._nombre,
      cedula: this._cedula,
      codigo: this._codigo,
      materia: this._materia
    };
  }
}
