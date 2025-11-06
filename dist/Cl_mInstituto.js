export default class Cl_mInstituto {
    constructor() {
        this.instituto = [];
    }
    agregarProfesor({ profesor, callback, }) {
        //validar que el profesor no tenga errores
        let error = profesor.error();
        if (error) {
            callback(error);
            return;
        }
        //validar que no se repita  la cedula
        let existe = this.instituto.find((c) => c.cedula === profesor.cedula);
        if (existe) {
            callback("La cedula que ingreso ya a sido registrada.");
            return;
        }
        //validar que no se repita el codigo
        let existe2 = this.instituto.find((c) => c.codigo === profesor.codigo);
        if (existe2) {
            callback("El codigo que ingreso ya a sido registrado.");
            return;
        }
        this.instituto.push(profesor);
        callback(false);
    }
    listar() {
        let lista = [];
        this.instituto.forEach((profesor) => {
            lista.push(profesor.toJSON());
        });
        return lista;
    }
}
