import form from "./components/form.js";
import graphic from "./components/graphic.js";
import firms from "./const/firms.js";
import calc from "./helper/calc.js";

const formBlock = document.querySelector('#form')
const graphicBlock = document.querySelector('#graphic')

formBlock.innerHTML = form("storage") + form("transfer")

const render = () => {
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

}
render()

document.querySelector('#range-storage').addEventListener('click', render)
document.querySelector('#range-transfer').addEventListener('click', render)

document.addEventListener("DOMContentLoaded", render)