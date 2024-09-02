const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// A==========================================
// pizzas.filter((pizza) => {
//   if (pizza.id % 2 !== 0) {
//     console.log(pizza);
//   }
// });

//  B=========================================

// pizzas.find((pizza) => {
//   if (pizza.precio < 600) {
//     console.log(`La pizza con un valor menor a $600 es la ${pizza.nombre}`);
//   }
// });

// C======================================

// pizzas.forEach((pizza, precio) => {
//   console.log(`El valor de la ${pizza.nombre} es de ${pizza.precio}`);
// });

// D========================================

// pizzas.forEach((pizza, ingredientes) => {
//   console.log(
//     `Los ingredientesde la ${pizza.nombre} son los siguientes: ${pizza.ingredientes}`
//   );
// });
