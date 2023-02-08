const profitable = () => {
    const lines = document.querySelectorAll(".graph-lines")
    const arr = []
    lines.forEach(line => {
        const lineValue = +line.nextElementSibling.textContent.replace("$", "")
        if (lineValue > 0) {
            arr.push(lineValue)
        }

    })
    const min = Math.min.apply(null, [...arr])
    arr.forEach((num, i) => num == min && lines[i].classList.add("bg-green-700")
    )
}

export default profitable