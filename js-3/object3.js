let receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2,
});

receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1,
});

console.log(receta.ingredientes[0].nombre);

let sum_cantidad = 0;

receta.ingredientes.forEach(obj => {
    if (obj["cantidad"]) {
        sum_cantidad += obj["cantidad"];
    }
});

console.log("suma cantidad ingredientes: ", sum_cantidad);