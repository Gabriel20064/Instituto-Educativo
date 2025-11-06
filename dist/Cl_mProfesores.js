export class Cl_mProfesores {
    constructor({ nombre, cedula, codigo, materia }) {
        this._nombre = "";
        this._cedula = "";
        this._codigo = "";
        this._materia = "";
        this.nombre = nombre;
        this.cedula = cedula;
        this.codigo = codigo;
        this.materia = materia;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(cedula) {
        this._cedula = cedula.trim();
    }
    get cedula() {
        return this._cedula;
    }
    set codigo(codigo) {
        this._codigo = codigo.trim();
    }
    get codigo() {
        return this._codigo;
    }
    set materia(materia) {
        this._materia = materia.trim().toUpperCase();
    }
    get materia() {
        return this._materia;
    }
    materiaSeleccionada() {
        if (this.materia === "M")
            return "Matematicas";
        if (this.materia === "F")
            return "Fisica";
        if (this.materia === "Q")
            return "Quimica";
        return "Otras";
    }
    error() {
        // Validacion de cedula
        if (this._cedula.length === 0)
            return "El cedula no puede estar vacía.";
        if (this._cedula.length < 7 && this._cedula.length > 8)
            return "El cedula debe tener al menos 7 o 8 caracteres.";
        // Validacion de aula
        if (this._codigo.length === 0)
            return "El aula no puede estar vacío.";
        if (this._codigo.length !== 7)
            return "El aula debe tener exactamente 7 digitos.";
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            cedula: this._cedula,
            codigo: this._codigo,
            materia: this.materiaSeleccionada()
        };
    }
}
