import firms from "../const/firms.js"


const calc = (arr) => {
    const storageBlock = document.querySelector('#storage output')
    const transferBlock = document.querySelector('#transfer output')


console.log()

arr.storagePrice === null ? 10000 : arr.storagePrice

    const checkbox = document.querySelectorAll(".options input")
console.log(checkbox)


checkbox.forEach(radioBtn=>{
    radioBtn.addEventListener("change", ()=>{
        console.log(document.querySelector(`input[name='${arr.name}']:checked`))
    })
})

    const totalStorage = storageBlock.value * (arr.storagePrice ? arr.storagePrice : 0) 
    const totalTransfer = transferBlock.value * arr.transferPrice
    let total = totalStorage + totalTransfer

    if (storageBlock.value == 0 && transferBlock.value == 0) {
        total = 0
    } else {
        arr.min && (total < arr.min) ?
            total = arr.min :
            arr.max && total > arr.max ?
                total = arr.max :
                total
    }
    return total
}

export default calc