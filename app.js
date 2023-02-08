import form from "./components/form.js";
import graphic from "./components/graphic.js";
import firms from "./const/firms.js";
import { objVal } from "./helper/objectMethods.js";
import radioChecking from "./helper/radioChecking.js";
import profitable from "./helper/profitable.js";
import mobile from './helper/orient.js';

const formBlock = document.querySelector('#form')
const graphicBlock = document.querySelector('#graphic')

formBlock.innerHTML = form("storage") + form("transfer")

const render = () => {
    mobile()
    firms.forEach(firm => {
        if (firm.storagePrice === null) {
            firm.storagePrice = objVal(firm.radio[0])
        }
    })
    graphicBlock.innerHTML = firms.map(i => graphic(i)).join('')
    radioChecking()
    profitable()
}

document.querySelector('#range-storage').addEventListener('touchmove', render)
document.querySelector('#range-transfer').addEventListener('touchmove', render)

document.querySelector('#range-storage').addEventListener('mousemove', render)
document.querySelector('#range-transfer').addEventListener('mousemove', render)

document.querySelector('#range-storage').addEventListener('touchstart', render)
document.querySelector('#range-transfer').addEventListener('touchstart', render)

document.addEventListener("DOMContentLoaded", render)

export { render }