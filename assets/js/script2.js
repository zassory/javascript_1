import { robots } from './robots.js';

// console.log(robots[23].id);
// console.log(robots[23].name);
// console.log(robots[23].avatar);
// console.log(robots[23].weapon);
// console.log(robots[23].sprite1);

// const { id , name , avatar , weapon , sprite1 } = robots[23];

// console.log(id);
// console.log(name);
// console.log(avatar);
// console.log(weapon);
// console.log(sprite1);

//const getRobotById = id => (robots.find( robot => (robot.id === id)))

const getRobotById = (id="000") => {
    return robots.find((robot)=> {
        return robot.id === id;
    })
}

const ejemplo = () => {

    return robots.map((robot)=> {
        console.log("El nombre es: "+ robot.nombre + " " + "y el id es: "+ robot.name);
        console.log(`El nombr es: ${robot.nombre} y el id es: ${robot.id}`);
    })
}


const generateRobotCards = (robots) =>  {
    let cardMatrix = '';
    
    // Iterar sobre cada robot en el array
    robots.map((robot) => {
        // Generar el HTML de la tarjeta para cada robot
        const cardHTML = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${robot.avatar}" class="card-img-top" alt="${robot.name}">
                    <div class="card-body">
                        <h5 class="card-title">${robot.name}</h5>
                        <p class="card-text">Weapon: ${robot.weapon}</p>
                        <p class="card-text">Weakness: ${robot.weakness || 'Unknown'}</p>
                    </div>
                </div>
            </div>
        `;
        // Agregar el HTML de la tarjeta a la matriz
        cardMatrix += cardHTML;
    });
    
    // Añadir la matriz de tarjetas al contenedor con el id "megamanList"
    const megamanListContainer = document.getElementById('megamanList');
    megamanListContainer.innerHTML = cardMatrix;
}

// Llamar a la función para generar las tarjetas y añadirlas al contenedor
generateRobotCards(robots);