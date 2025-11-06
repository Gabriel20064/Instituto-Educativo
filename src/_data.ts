interface iProfesores {
    nombre: string;
    cedula: string;
    codigo: string;
    materia: string;
}
let profesores: iProfesores[];
profesores = [
    { nombre: "Noelle Holiday", cedula: "11121221", codigo: "LAB1221", materia: "O" },
    { nombre: "Susie Gaster", cedula: "98765432", codigo: "LAB1212", materia: "O" },
    { nombre: "Kris Dreamurr", cedula: "12133445", codigo: "AUL0003", materia: "M" },
    { nombre: "Spamtom G. Spamtom", cedula: "22334455", codigo: "AUD1001", materia: "F" }
]
export { profesores };

//Para implementar después