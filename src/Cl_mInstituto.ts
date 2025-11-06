import {Cl_mProfesores,iProfesores} from "./Cl_mProfesores.js";

export default class Cl_mInstituto{
    private instituto: Cl_mProfesores[] = [];
    agregarProfesor({
        profesor,
        callback,
    }: {
        profesor: Cl_mProfesores;
        callback: (error: string | false) => void;
    }): void {
        //validar que el profesor no tenga errores
        let error = profesor.error();
        if (error) {
            callback(error);
            return;
        }
        //validar que no se repita  la cedula
        let existe = this.instituto.find((c) => c.cedula === profesor.cedula);
        if(existe) {
            callback("La cedula que ingreso ya a sido registrada.");
            return;
        }
        //validar que no se repita el codigo
        let existe2 = this.instituto.find((c) => c.codigo === profesor.codigo);
        if(existe2) {
            callback("El codigo que ingreso ya a sido registrado.");
            return;
        }
        this.instituto.push(profesor);
        callback(false);
    }
    listar(): iProfesores[]{
        let lista: iProfesores[] = [];
        this.instituto.forEach((profesor) => {
            lista.push(profesor.toJSON());
        });
        return lista;
    }
}
