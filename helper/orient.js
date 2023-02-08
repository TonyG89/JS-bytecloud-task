const orient = (method) => {
    const width = window.innerWidth
    const height = window.innerHeight

    if (width < height) {
        document.querySelector('section').classList.add("w-auto")
        document.querySelector('#form').classList.add("order-2", "my-0")
        // document.querySelector('#storage').classList.add("first:pr-8")
        document.querySelector('#graphic').classList.add("flex", "justify-center")
        document.querySelectorAll('.oneline').forEach(i => i.classList.add("flex-col-reverse"))
        // document.querySelectorAll('.line-block').forEach(i=>i.classList.add("-rotate-90"))
        return true ? method : ''
    }
    console.log("h-" + height)
    console.log("w-" + width)
}

export default orient

// ${mobile('')}