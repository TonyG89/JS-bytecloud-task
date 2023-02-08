
let profitable = 0

const calc = (arr) => {

    const storageBlock = document.querySelector('#storage output')
    const transferBlock = document.querySelector('#transfer output')
    let total

    if (arr.name === "scaleway") {
        const free = 75
        const totalStorage = storageBlock.value > free ? (storageBlock.value - free) * arr.storagePrice : 0
        const totalTransfer = transferBlock.value > free ? (transferBlock.value - free) * arr.transferPrice : 0
        total = totalStorage + totalTransfer
    } else {
        const totalStorage = storageBlock.value * arr.storagePrice
        const totalTransfer = transferBlock.value * arr.transferPrice
        total = totalStorage + totalTransfer
    }

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