import { objKey, objVal } from "../helper/objectMethods.js"
import mobile from "../helper/orient.js"

const radioDiv = (company) => {
    const { radio } = company

    function startingChecked(value, ind) {
        if (ind == 0 || company.storagePrice == value) {
            return "checked"
        }
    }

    let inner = ''
    if (radio) {
        radio.forEach((i, index) => {
            inner += `
            <div class="first:pr-4 ${mobile('first:pr-1')}">
            <label  >
            <input class="radio-input " type="radio"
            name="${company.name}" value=${objVal(i)} ${startingChecked(objVal(i), index)} >
            ${objKey(i)}</label>
            </div>
            `
        })
    }
    return inner
}

export default radioDiv