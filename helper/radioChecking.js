import firms from "../const/firms.js"
import {render} from "../app.js"

const radioChecking = () => {
    const checkBoxes = document.querySelectorAll('.options input')
    checkBoxes.forEach((radio, index) => {
        radio.addEventListener("change", e => {
            firms.forEach(firm => {
                if (firm.name == e.target.name) {
                    firm.storagePrice = e.target.value
                    console.log(firm.storagePrice)
                }
            })
            render()
        })
    })
}

export default radioChecking

JSON.stringify()