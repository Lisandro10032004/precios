const productos = [
  {
    nombre: " Lavadora",
    precio: 399.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Televisor",
    precio: 499.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Sofá",
    precio: 299.99,
    seccion: "Muebles",
  },
  {
    nombre: " Camisa",
    precio: 29.99,
    seccion: "Ropa",
  },
  {
    nombre: " Zapatos",
    precio: 79.99,
    seccion: "Calzado",
  },
  {
    nombre: " Toallas",
    precio: 9.99,
    seccion: "Hogar",
  },
  {
    nombre: " Olla",
    precio: 49.99,
    seccion: "Cocina",
  },
  {
    nombre: " Portátil",
    precio: 899.99,
    seccion: "Electrónica",
  },
  {
    nombre: " Bicicleta",
    precio: 299.99,
    seccion: "Deportes",
  },
  {
    nombre: " Huevo",
    precio: 0.99,
    seccion: "Alimentos",
  },  {
    nombre: " Lavadora",
    precio: 399.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Televisor",
    precio: 499.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Sofá",
    precio: 299.99,
    seccion: "Muebles",
  },
  {
    nombre: " Camisa",
    precio: 29.99,
    seccion: "Ropa",
  },
  {
    nombre: " Zapatos",
    precio: 79.99,
    seccion: "Calzado",
  },
  {
    nombre: " Toallas",
    precio: 9.99,
    seccion: "Hogar",
  },
  {
    nombre: " Olla",
    precio: 49.99,
    seccion: "Cocina",
  },
  {
    nombre: " Portátil",
    precio: 899.99,
    seccion: "Electrónica",
  },
  {
    nombre: " Bicicleta",
    precio: 299.99,
    seccion: "Deportes",
  },
  {
    nombre: " Huevo",
    precio: 0.99,
    seccion: "Alimentos",
  },  {
    nombre: " Lavadora",
    precio: 399.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Televisor",
    precio: 499.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Sofá",
    precio: 299.99,
    seccion: "Muebles",
  },
  {
    nombre: " Camisa",
    precio: 29.99,
    seccion: "Ropa",
  },
  {
    nombre: " Zapatos",
    precio: 79.99,
    seccion: "Calzado",
  },
  {
    nombre: " Toallas",
    precio: 9.99,
    seccion: "Hogar",
  },
  {
    nombre: " Olla",
    precio: 49.99,
    seccion: "Cocina",
  },
  {
    nombre: " Portátil",
    precio: 899.99,
    seccion: "Electrónica",
  },
  {
    nombre: " Bicicleta",
    precio: 299.99,
    seccion: "Deportes",
  },
  {
    nombre: " Huevo",
    precio: 0.99,
    seccion: "Alimentos",
  },  {
    nombre: " Lavadora",
    precio: 399.99,
    seccion: "Electrodomésticos",
  },
  {
    nombre: " Televisor",
    precio: 499.99,
    seccion: "Electrodomésticos",
  }

];


const search = document.querySelector("#search");
const container = document.querySelector(".container");

search.addEventListener("keyup", () => {
  container.innerHTML = " ";
  productos.forEach((e) => {
    if (e.nombre.toLowerCase().includes(search.value.toLowerCase())) {
      container.innerHTML += `<p>${e.nombre} $${e.precio} <br><br>`;
    }
  });
});
