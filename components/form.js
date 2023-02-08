import capitalize from '../helper/capitalize.js'
import mobile from '../helper/mobile.js';

const form = (name) => {

    return `
    <form id=${name}
    oninput="level.value=flevel.valueAsNumber"
    class="w-1/2 px-4 ${mobile("px-2")}">
    <h2>
    <label>${capitalize(name)}: </label>
    <output name="level">100</output> gb
    </h2>
    <input class="range border-x-2 rounded-none" type="range" name="flevel" id="range-${name}"
        min="0" value="100" max="1000" step="1">
        <div class="flex justify-between text-xs ml-[-3px] mr-[-13px] ${mobile("text-[8px] ml-[-2px] mr-[-8px]")}">
        <p>1</p>
        <p>1000</p>
        </div>
    </form>`
}

export default form