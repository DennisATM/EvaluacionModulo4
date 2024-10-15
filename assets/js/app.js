import { peopleGenerator, handleElementEvent } from "./src/utils/PeopleGenerator.js";

//elementos del DOM que esperarán el evento mouseover.
const label1=document.getElementById('label1');
const label2=document.getElementById('label2');
const label3=document.getElementById('label3');

//Contenedores que esperarán el evento click y se usarán para renderizado
const containerCards1 = document.getElementById('containerCards1');
const containerCards2 = document.getElementById('containerCards2');
const containerCards3 = document.getElementById('containerCards3');

//Instanciando constantes del Generador
const gen1to5 = peopleGenerator(1,5);
const gen6to10 = peopleGenerator(6,10);
const gen11to15 = peopleGenerator(11,15);

//constantes que definen el id con componente circulo 
//contenido en la card dinámica, para manipular el color.
const idTypeCircle1 = 'circle-card1';
const idTypeCircle2 = 'circle-card2';
const idTypeCircle3 = 'circle-card3';

//Escuchando eventos

//Label y Card de personajes más populares.
label1.addEventListener('mouseover',async ()=>{ await handleElementEvent(gen1to5, containerCards1,idTypeCircle1); });
containerCards1.addEventListener('click',async()=>{ await handleElementEvent(gen1to5, containerCards1, idTypeCircle1); });

//Label y Card de personajes secundarios.
label2.addEventListener('mouseover',async ()=>{ await handleElementEvent(gen6to10, containerCards2, idTypeCircle2); });
containerCards2.addEventListener('click',async()=>{ await handleElementEvent(gen6to10, containerCards2, idTypeCircle2); });

//Label y Card de personajes significativos.
label3.addEventListener('mouseover',async ()=>{ await handleElementEvent(gen11to15, containerCards3, idTypeCircle3); });
containerCards3.addEventListener('click',async()=>{ await handleElementEvent(gen11to15, containerCards3, idTypeCircle3); });