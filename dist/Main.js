/* Se requiere una pequeña aplicación para un instituto educativo la cual permita gestionar el registro de profesores.
Cada profesor debe registrar los siguientes datos: Nombre, cédula de identidad, código del aula donde imparte clases y materia asignada (M: Matemáticas, F: Física, Q: Química, O: Otras).
  La cédula debe cumplir con las siguientes condiciones: Ser un número entero positivo de entre 7 y 8 dígitos, no debe repetirse entre profesores registrados.
  El código del aula debe cumplir con las siguientes condiciones: Comenzar con alguno de los siguientes prefijos, según el tipo de aula:
    "AUL" para aulas regulares
    "LAB" para laboratorios
    "AUD" para auditorios
 Debe tener un total de 7 caracteres, ejemplo válido: AUL1234 o LAB5678. Y tampoco debe repetirse entre los profesores registrados.
El sistema debe permitir: Agregar nuevos profesores y listar los profesores registrados.
Todos los campos son obligatorios para cada profesor.
*/
import Cl_Controlador from "./Cl_Controlador.js";
import Cl_mInstituto from "./Cl_mInstituto.js";
import Cl_mProfesores from "./Cl_mProfesores.js";
import Cl_vInstituto from "./Cl_vInstituto.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mInstituto();
        let profesoresLS = localStorage.getItem("Instituto");
        if (profesoresLS) {
            let profesoresDT = JSON.parse(profesoresLS);
            profesoresDT.forEach((profesor) => {
                this.modelo.agregarProfesor({
                    profesor: new Cl_mProfesores(profesor),
                    callback: (error) => {
                        // Ignorar errores al cargar desde localStorage
                    },
                });
            });
        }
        this.vista = new Cl_vInstituto();
        let controlador = new Cl_Controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
