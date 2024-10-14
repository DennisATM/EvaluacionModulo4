const insertCard = (contenedor)=>{
    contenedor.innerHTML+=`<div class="col-md-4">
        <div class="timeline-content shadow">
            <h5>Nombre del personaje</h5>
            <p class="text-content">Caracteristicas</p>
        </div>
    </div>`
    
}

const label1=document.getElementById('label1');
const label2=document.getElementById('label2');
const label3=document.getElementById('label3');
const constainerCards1 = document.getElementById('containerCards1');
const constainerCards2 = document.getElementById('containerCards2');
const constainerCards3 = document.getElementById('containerCards3');

label1.addEventListener('mouseover',()=>{
    insertCard(constainerCards1);
    console.log('estoy funcionando')
})


