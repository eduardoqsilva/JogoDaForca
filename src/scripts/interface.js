let addButton = document.getElementsByClassName('add')[0]
let addDisplay = document.getElementsByClassName('adc-container')[0]
let cancelAdd = document.getElementById('cancel-add')


addButton.addEventListener('click', openAndCloseAdd)
cancelAdd.addEventListener('click', openAndCloseAdd)



function openAndCloseAdd(){
    addDisplay.classList.toggle('hidden')
}