import { iProfesores } from "./Cl_mProfesores.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vInstituto extends Cl_vGeneral {
  private btAgregarProfesor: HTMLButtonElement;
  private divProfesoresRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "instituto" });
    this.btAgregarProfesor = this.crearHTMLButtonElement("btAgregarProfesor", {
      onclick: () => this.agregarProfesor(),
    });
    this.divProfesoresRegistrados = this.crearHTMLElement(
      "divProfesoresRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarGruposRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarGruposRegistrados() {
    this.divProfesoresRegistrados.innerHTML = "";
    let instituto = this.controlador?.profesoresRegistrados();
    if (!instituto) return;
    instituto.forEach((profesor: iProfesores) => {
      this.divProfesoresRegistrados.innerHTML += `<tr>
            <td>${profesor.nombre}</td>
            <td>${profesor.cedula}</td>
            <td>${profesor.codigo}</td>
            <td>${profesor.materia}</td>
        </tr>`;
    });
  }
  agregarProfesor() {
    let nombre = prompt("Ingrese el Nombre del profesor");
    if (!nombre) return;
    let cedula = prompt("Ingrese la Cedula del profesor");
    if (!cedula) return;
    let codigo = prompt("Ingrese el Tipo y Codigo (4 digitos) del aula del profesor (AUL: Aulas regulares, LAB: Laboratorios, AUD: Auditorios)");
    if (!codigo) return;
    let materia = prompt("Ingrese la materia que imparte el profesor (M: Matemáticas, F: Física, Q: Química, O: Otras)");
    if (!materia) return;
    this.controlador!.agregarProfesor({
      profesorData: {
        nombre: nombre,
        cedula: cedula,
        codigo: codigo,
        materia: materia
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}