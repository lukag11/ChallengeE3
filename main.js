const pizzas = [
  {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['Queso', 'Oregano', 'Salsa'],
    precio: 500,
    imagen:
      'https://www.pizzapronta.com/wp-content/uploads/2015/11/Muza-c_tabla.png',
    
  },
  {
    id: 2,
    nombre: 'Calabresa',
    ingredientes: ['Queso', 'Salame', 'Oregano'],
    precio: 800,
        imagen:
      'https://cdn.pedix.app/bzQ1KmPlactsBj0He8ZD/products/1606237798752.png?size=1500x1500',
  },
  {
    id: 3,
    nombre: 'Rucula',
    ingredientes: ['Queso', 'Rucula', 'Rallado', 'Jamon'],
    precio: 850,
        imagen:
      'https://i.ytimg.com/vi/cTrNbn59iPg/maxresdefault.jpg',
     
  },
  {
    id: 4,
    nombre: 'Palmitos',
    ingredientes: ['Queso', 'Palmitos', 'Salsa Golf'],
    precio: 1200,
        imagen:
      'https://i.ytimg.com/vi/yPr8t8BQNO8/maxresdefault.jpg',
  },
  {
    id: 5,
    nombre: 'Especial',
    ingredientes: ['Queso', 'Paleta', 'Huevo'],
    precio: 450,
        imagen:
      'https://ver.rosario.gob.ar/media/cache/41/cb/41cbd3fab7f1e2c69c041c25c36d2c7b.png',
  },
  {
    id: 6,
    nombre: 'Argentina',
    ingredientes: ['Queso', 'Huevos Fritos', 'Papas'],
    precio: 1500,
        imagen:
      'https://dfaxhnbpl05t8.cloudfront.net/uploads/1541879713947642d8c5f3fa511b4b31b7a24b017a.jpg',
  },
];

 const input = document.getElementById('input-number');
 const button = document.getElementById('btn');
 const resultadoPizza = document.querySelector('.result-list');

 const isEmpty = value => (value === '' ? false : true);


// Guardar el array en el localStorage

// Se guarda en localStorage despues de JSON stringificarlo 
localStorage.setItem('myArray', JSON.stringify(pizzas));

// Obtener el arreglo de localStorage

var array = localStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);


    button.addEventListener('click', e => {
       e.preventDefault();

        const valor = input.value.trim();
  
        const varPizza = pizzas.find(pizza => pizza.id == valor)

        // Una vez que se haga el submit se resetea el input a vacio
           input.value = '';
       
           if(valor === ''){
          return resultadoPizza.innerHTML=`
        <img class="error" src="./img/advertencia.png" alt="">
        <p class="text-advertencia" >Ingrese un Numero para Realizar La Busqueda</p>`
        }

        else{


      if(varPizza){
        return resultadoPizza.innerHTML=`<img class="pizza" src="${varPizza.imagen}"/> <h2 class="text-nombre">Nombre: ${varPizza.nombre}</h2>
        <h2 class="text-ingrediente">Ingredientes: ${varPizza.ingredientes}</h2>
                <h3 class="text-precio">Precio: $ ${varPizza.precio}</h3>`
     }else{
        resultadoPizza.innerHTML=`
        <img class="error" src="./img/error.png" alt="">
        <p class="text" >No existe ninguna pizza con ese id</p>`
     
      }     
    }
    });





          //  function checkInput() {

          //      //   Si el campo esta vacio mostra error
          //      if ((valor==='')) {
          //          resultadoPizza.innerHTML=` <p class="text">El campo esta vacio - ingrese un valor </p>`
          //      }


          //      else {}

          //  }

          //  checkInput();


