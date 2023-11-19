const form = document.querySelector('#shelterForm');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const catName = form.catName;
    const newLi = document.createElement('LI');
    newLi.innerText = catName.value;

    list.append(newLi);
    catName.value = '';
    catName.focus();
});