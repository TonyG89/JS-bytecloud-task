const mobile = (tr, fl='') => {
    const width = window.innerWidth, height = window.innerHeight

    return width < height ? tr : fl
}

export default mobile