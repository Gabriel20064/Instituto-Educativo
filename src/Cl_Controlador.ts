import Cl_mProfesores, { iProfesores } from "./Cl_mProfesores.js"; 
import Cl_mInstituto from "./Cl_mInstituto.js";
import Cl_vInstituto from "./Cl_vInstituto.js"

export default class Cl_Controlador {
  public modelo: Cl_mInstituto;
  public vista: Cl_vInstituto;
  constructor(modelo: Cl_mInstituto, vista: Cl_vInstituto) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarProfesor({
    profesorData,
    callback,
  }: {
    profesorData: iProfesores;
    callback: Function;
  }): void {
    this.modelo.agregarProfesor({
      profesor: new Cl_mProfesores(profesorData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  profesoresRegistrados(): iProfesores[] {
    return this.modelo.listar();
  }
}
