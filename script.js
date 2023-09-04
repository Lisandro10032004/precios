const productos = [
  {
    nombre: "Energizante Speed",
    precio: 80,  
    seccion: "Bebidas"
  },
  {
    nombre: "Gaseosa Coca-Cola 2 litros",
    precio: 200,  
    seccion: "Bebidas"
  },
  {
    nombre: "Papel higiénico Scottex",
    precio: 120,  
    seccion: "Higiene"
  },
  {
    nombre: "Huevos (docena)",
    precio: 140,  
    seccion: "Alimentos"
  },
  {
    nombre: "Galletas surtidas Terrabusi",
    precio: 90,  
    seccion: "Alimentos"
  },
  {
    nombre: "Chocolate Águila 100g",
    precio: 70,  
    seccion: "Alimentos"
  },
  {
    nombre: "Cerveza Quilmes 1 litro",
    precio: 100,  
    seccion: "Bebidas"
  },
  {
    nombre: "Agua mineral 500ml",
    precio: 30,  
    seccion: "Bebidas"
  },
  {
    nombre: "Snacks de maíz Cheetos",
    precio: 60,  
    seccion: "Alimentos"
  },
  {
    nombre: "Papas fritas Lays",
    precio: 90,  
    seccion: "Alimentos"
  },
  {
    nombre: "Chicles Beldent",
    precio: 25,  
    seccion: "Alimentos"
  },
  {
    nombre: "Salchichas Vieníssima",
    precio: 180,  
    seccion: "Alimentos"
  },
  {
    nombre: "Yogur Sancor 200g",
    precio: 40,  
    seccion: "Alimentos"
  },
  {
    nombre: "Cigarrillos Marlboro",
    precio: 250,  
    seccion: "Tabaco"
  },
  {
    nombre: "Café instantáneo Nescafé",
    precio: 120,  
    seccion: "Alimentos"
  },
  {
    nombre: "Caramelos Sugus",
    precio: 15,  
    seccion: "Alimentos"
  },
  {
    nombre: "Pan blanco Bimbo",
    precio: 80,  
    seccion: "Alimentos"
  },
  {
    nombre: "Leche La Serenísima 1 litro",
    precio: 100,  
    seccion: "Alimentos"
  },
  {
    nombre: "Jamón y queso (100g)",
    precio: 75,  
    seccion: "Alimentos"
  },
  {
    nombre: "Mayonesa Hellmann's 237g",
    precio: 60,  
    seccion: "Alimentos"
  },
  {
    nombre: "Papas fritas Pringles",
    precio: 120,  
    seccion: "Alimentos"
  },
  {
    nombre: "Chocolatina Tofi",
    precio: 15,  
    seccion: "Alimentos"
  },
  {
    nombre: "Jugo de naranja Cepita 1 litro",
    precio: 100,  
    seccion: "Bebidas"
  },
  {
    nombre: "Almohaditas Toddy",
    precio: 50,  
    seccion: "Alimentos"
  },
  {
    nombre: "Pan dulce Bauducco",
    precio: 300,  
    seccion: "Alimentos"
  },
  {
    nombre: "Chocolatina Milka",
    precio: 40,  
    seccion: "Alimentos"
  },
  {
    nombre: "Caramelos Rocklets",
    precio: 20,  
    seccion: "Alimentos"
  },
  {
    nombre: "Mostaza Dijon",
    precio: 40,  
    seccion: "Alimentos"
  },
  {
    nombre: "Manteca Sancor 200g",
    precio: 90,  
    seccion: "Alimentos"
  },
  {
    nombre: "Galletas Oreo",
    precio: 70,  
    seccion: "Alimentos"
  },
  {
    nombre: "Sal Moliendo",
    precio: 10,  
    seccion: "Alimentos"
  },
  {
    nombre: "Atún en lata",
    precio: 160,  
    seccion: "Alimentos"
  },
  {
    nombre: "Azúcar 1 kg",
    precio: 900, // Precio en pesos argentinos
    seccion: "Alimentos"
  },
  {
    nombre: "Arroz 1 kg",
    precio: 120,  
    seccion: "Alimentos"
  },
  {
    nombre: "Fideos secos Spaghetti 500g",
    precio: 50,  
    seccion: "Alimentos"
  },
  {
    nombre: "Aceite de cocina 1 litro",
    precio: 180,  
    seccion: "Alimentos"
  },
  {
    nombre: "Sopa en sobre Knorr",
    precio: 30,  
  }]

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
