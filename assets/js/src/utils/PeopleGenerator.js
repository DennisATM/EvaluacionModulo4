import { People } from "../models/people.js"
import { Components } from "../components/components.js"

export function* peopleGenerator(idMin, idMax) {
    let id = idMin
    while(id <= idMax) {
        yield id
        console.log(id)
        id++
    }
}

export const handleElementEvent = async(generador, container, idTypeCircle) => {
    const { value: peopleId , done } = generador.next()
    if(!done) {
        const people = await People.createPeople(peopleId)
        console.log(people);
        Components.insertCard(container, people, idTypeCircle);
    } else {
        alert('No podemos continuar, te estas acercando al lado oscuro..')
    }
}