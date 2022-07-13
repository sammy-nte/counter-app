const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const output = document.getElementById("output");
const warning = document.getElementById("warning")
const yes = document.getElementById('options-yes')
const no = document.getElementById('options-no')
const options = document.getElementById("options-span")


let count = 0;
warning.style.display = 'none';
decrease.style.pointerEvents = 'none';
decrease.style.opacity = '0.5';
options.style.display = 'none';

decrease.addEventListener('click', ()=>{
    count--;
    if(count === 0 || count <=0){
        decrease.style.pointerEvents = 'none'
        warning.style.display = 'block'
        options.style.display = 'block';
        decrease.style.opacity = '0.5'
    }
    output.innerHTML = count;
})

increase.addEventListener('click', ()=>{
    if(count === 1){
        decrease.style.pointerEvents = 'visible'
        warning.style.display = 'none'
    }
    decrease.style.opacity = '1'
    count++;
    output.innerHTML = count;
})

reset.addEventListener('click', ()=>{
    count = 0
    decrease.style.pointerEvents = 'none'
    decrease.style.opacity = '0.5'
    output.innerHTML = count;
})

yes.addEventListener('click', ()=>{
    decrease.style.pointerEvents = 'visible'
    decrease.style.opacity = '1'
    warning.style.display = 'none'
    options.style.display = 'none';
    decrease.addEventListener('click', ()=>{
        count--;
        if(count === 0 || count <=0){
            decrease.style.pointerEvents = 'visible'
            warning.style.display = 'none'
            decrease.style.opacity = '1'
            options.style.display = 'none';
        }
        output.innerHTML = count;
    })
    reset.addEventListener('click', ()=>{
        count = 0
        decrease.style.pointerEvents = 'visible'
        decrease.style.opacity = '1'
        output.innerHTML = count;
    })
})

no.addEventListener('click', ()=>{
    options.style.display = 'none';
})