import capitalize from '../helper/capitalize.js'

const form = (name) => {

return    `
    <form id=${name}
    oninput="level.value=flevel.valueAsNumber"
    class="w-1/2 pr-8">
    <h2>
    <label>${capitalize(name)}: </label>
    <output name="level">100</output> gb
    </h2>
    <input class="range" type="range" name="flevel" id="range-${name}"
        min="0" value="100" max="1000" step="1">
    </form>`
}

export default form