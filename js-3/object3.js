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

let sum_cantidad = 0

for (let i = 0; i < receta.ingredientes.length; i++) {
    for (const llave in receta.ingredientes[i]) {
        if (llave === "cantidad") {
            sum_cantidad += receta.ingredientes[i][llave];
        }
    }
}

console.log("suma cantidad ingredientes: ", sum_cantidad);