let form = document.querySelector('.formBox');

function grocery(e) {
    e.preventDefault();

let itemName = document.getElementById("itemName").value;
let itemBrand = document.getElementById("itemBrand").value;
let itemAmount = document.getElementById("itemAmount").value;
    display(itemAmount, itemBrand, itemName);
}
    
    function display(itemAmount, itemBrand, itemName) {
    let para = document.getElementById('return');
    para.innerHTML = `Customer is shopping for ${itemAmount} ${itemBrand} ${itemName}`
    }

form.addEventListener('submit', grocery)
