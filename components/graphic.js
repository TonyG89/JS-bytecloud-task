import calc from "../helper/calc.js"
import radioDiv from "./radioDiv.js"
import mobile from "../helper/mobile.js";

const graphic = (company) => {
    let price = calc(company)

    const widthDiv = mobile(130,100) / 74 * price

    return (`
    <div class="oneline flex items-center 
    ${mobile('flex-col-reverse w-1/5')}">

        <div class="title w-1/5 
        ${mobile('h-[50px] px-1 w-full text-center')}">
            <h1 class="text-2xl pb-1 ${mobile('text-[1.2rem]')}">${company.name.toUpperCase()}</h1>
            <div class="options flex text-xs justify-start ${mobile('text-[0.8rem] justify-center items-center')}">${radioDiv(company)}</div>
        </div>

        <div class="logo ${mobile("mt-[80px] w-[20px]")}">
            <img
                src="${company.imgSrc}"
                alt="${company.name}">
        </div>

        <div class="line-block w-[450px] mx-4 py-5 border-l-4 border-red-400 flex 
        ${mobile('-rotate-90  w-[200px] ')}">
            <div class="graph-lines bg-amber-700 border-y border-r border-amber-300
                py-3 
                w-[${widthDiv.toFixed(1)}px]
                ">
            </div>
            <p class="pl-1">${price.toFixed(2)} $</p>
        </div>
        
    </div>
    `)
}

export default graphic