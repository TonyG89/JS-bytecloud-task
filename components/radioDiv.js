import { objKey, objVal } from "../helper/objectMethods.js"

const radioDiv = (company) => {
    const { radio } = company

    function startingChecked(value,ind) {
        if (ind == 0 || company.storagePrice == value) {
            return "checked"
        }
    }

    let inner = ''
    if (radio) {
        radio.forEach((i, index) => {
            console.log(objVal(i), i, index, company.storagePrice)
            inner += `
            <div class="first:pr-4">
            <label >
            <input class="radio-input" type="radio"
            name="${company.name}" value=${objVal(i)} ${startingChecked(objVal(i),index)} >
            ${objKey(i)}</label>
            </div>
            `
        })
    }
    return inner
}


// name="${company.name}-${objKey(i)}" value=${objVal(i)} ${index == 0 ? "checked" : ''} >


export default radioDiv