import calc from "../helper/calc.js"

const graphic = (company) => {
    // const profitable = 
    const { radio } = company
    const radioDiv = () => {
        let inner = ''
        if (radio) {
            radio.forEach((i, index) => {
                inner += `
                <div class="first:pr-4">
                <label >
                <input class="radio-input" type="radio"
                name=${company.name} value=${Object.values(i)} ${index == 0 && "checked"} >
                ${Object.keys(i)}</label>
                </div>
                `
            })
        }
        return inner
    }
    
    return (`
    <div class="oneline flex items-center">
        <div class="title w-1/3">
            <h1 class="text-2xl pb-1">${company.name}</h1>
            <div class="options flex text-xs justify-start">${radioDiv()}</div>
        </div>
        <div class="logo">
            <img
                src="${company.imgSrc}"
                alt="${company.name}">
        </div>
        <div class="line-block w-full mx-4 py-5 border-l-4 border-red-400 flex">
            <div class="graph-lines bg-amber-700 border-y border-r border-amber-300
                w-1/4 py-3 
                w-[${calc(company) * 10}px]
                ">
            </div>
            <span>${calc(company).toFixed(2)} $</span>
        </div>
    </div>
    `)
}

export default graphic