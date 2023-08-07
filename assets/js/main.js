const boxes = document.getElementsByClassName('item-box')
var check = document.getElementsByName('itemCheck');
console.log(boxes)

const removeActive = () => {
    for(const i of boxes){
        i.classList.remove('active')
    }
}

for(let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('click', ()=>{
        removeActive()
        boxes[i].classList.add('active')
        check[i].checked = true
    })
}