import { Cl_mProfesores } from "./Cl_mProfesores.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarProfesor({ profesorData, callback, }) {
        this.modelo.agregarProfesor({
            profesor: new Cl_mProfesores(profesorData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    profesoresRegistrados() {
        return this.modelo.listar();
    }
}
