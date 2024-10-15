import { fetchForce } from "../services/fetchData.js";

export class People{
    #name;
    #height;
    #mass;

    constructor(name,height,mass){
        this.#name=name;
        this.#height = height;
        this.#mass = mass;
    }

    getName(){
        return this.#name;
    }
    getHeight(){
        return this.#height;
    }
    getMass(){
        return this.#mass;
    }

    getAllProperties(){
        return{
            name : this.#name,
            height: this.#height,
            mass : this.#mass
        }
    }

    static async createPeople(idSearch){
        try{
            const people = await fetchForce(idSearch);
            const {name, height, mass} = people;
            const newPeople = new People(name,height,mass);
            return newPeople;
        }catch(error){
            console.error(error);
        }
    }
}