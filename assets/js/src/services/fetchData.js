const BASE_URL = "https://swapi.dev/api";

export const fetchForce = async(id)=>{
    try{
        const response = await fetch(`${BASE_URL}/people/${id}`);
        if(!response.ok) throw new Error(`Disturbio en la fuerza con el N° ${id}`);
        const data = await response.json();
        return data;
        
    }catch(error){
        console.log(error);
    }
}