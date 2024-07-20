export function reload(array, place, component) {
    place.innerHTML = ""

    for (let item of array) {
        const product = component(item, array)
        place.append(product)
    }
}
export function createToast(text,variant){
    const body = document.body
    const div = document.createElement('div');
    const span = document.createElement('span');
    if (variant === 'green') {
        div.style.backgroundColor = 'green'
    } else {
        div.style.backgroundColor = 'red'     
    }
    div.classList.add('toaster')
    setTimeout(() => {
        div.classList.add('show-toaster')
    }, 400)
    
    setTimeout(() => {
        div.classList.remove('show-toaster')
    }, 2500)
    span.innerHTML = text

    div.append(span)
    body.append(div)
}

