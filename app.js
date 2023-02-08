import form from "./components/form.js";
import graphic from "./components/graphic.js";
import firms from "./const/firms.js";
import calc from "./helper/calc.js";
import { objVal } from "./helper/objectMethods.js";
import radioChecking from "./helper/radioChecking.js";

const formBlock = document.querySelector('#form')
const graphicBlock = document.querySelector('#graphic')

formBlock.innerHTML = form("storage") + form("transfer")

const render = () => {
    firms.forEach(firm => {
        if (firm.storagePrice === null) {
            firm.storagePrice = objVal(firm.radio[0])
            console.log(firm.name + " " + firm.storagePrice)
        }
    })

    console.log(firms[1].storagePrice)
    graphicBlock.innerHTML = firms.map(i => graphic(i)).join('')
    const Lines = document.querySelectorAll(".graph-lines")

    const arr = []
    Lines.forEach(line => {
        line.clientWidth === 0 && Infinity
        arr.push(line.clientWidth)
    })
    const min = Math.min.apply(null, [...arr])
    const index = arr.indexOf(min)

    Lines[index].classList.toggle("bg-amber-700")
    Lines[index].classList.toggle("bg-green-700")

    radioChecking()
}

document.querySelector('#range-storage').addEventListener('click', render)
document.querySelector('#range-transfer').addEventListener('click', render)

document.addEventListener("DOMContentLoaded", render)

export {render}