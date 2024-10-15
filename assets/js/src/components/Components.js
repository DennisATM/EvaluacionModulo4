export class Components{
    static insertCard = (container, people, idTypeCircle)=>{
        container.innerHTML+=`<div class="col-md-4">
        <div class="timeline-content shadow">
            <div class="row">
                    <div class="col-2">
                        <div id="${idTypeCircle}" class="badge rounded-circle">&nbsp;</div>
                    </div>
                <div class="col-10">
                    <h5>${people.getName()}</h5>
                    <p class="text-content">
                        <span class="fw-bold">Estatura:</span> ${people.getHeight()} cm. 
                        <span class="fw-bold">Peso: </span> ${people.getMass()} Kg.
                    </p>
                </div>
            </div>
        </div>`   
    }
}