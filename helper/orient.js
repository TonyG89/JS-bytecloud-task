const orient = (method) => {
    const width = window.innerWidth
    const height = window.innerHeight

    if (width < height) {
        document.querySelector('section').classList.add("w-auto", "h-min")
        document.querySelector('#form').classList.add("order-2", "my-0", "mx-2")
        // document.querySelector('#storage').classList.add("first:pr-8")
        document.querySelector('#graphic').classList.add("flex", "justify-center","my-[50px]")
        document.querySelectorAll('.oneline').forEach(i => i.classList.add("flex-col-reverse"))
        // document.querySelectorAll('.line-block').forEach(i=>i.classList.add("-rotate-90"))
        return true ? method : ''
    }
    console.log("h-" + height)
    console.log("w-" + width)
}

export default orient

// ${mobile('')}