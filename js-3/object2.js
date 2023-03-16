const persona = {
    nombre: "Desiree",
    edad: 36,
    ciudad: "Bogotá",
    profesión: "Programador",
}

console.log(persona);

function presentacion(persona) {
    return `${persona.nombre} ${persona.edad} ${persona.ciudad}`;
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["caminar", "leer", "conversar"];
console.log("hobbies");
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}