const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: "true",
    hobbies: [],
}

pedro.hobbies.push("programar");
pedro.hobbies.push("squash");
pedro.hobbies.push("piano");
console.log(pedro["edad"]);
pedro.estatura = 1.8;
delete pedro.activo;

for (const llave in pedro) {
    console.log(llave, ":", pedro[llave]);
}

pedro.saluda = function (nombre) {
    return `hola, me llamo ${nombre}`;
}

console.log(pedro.saluda("Pedro Perez"));