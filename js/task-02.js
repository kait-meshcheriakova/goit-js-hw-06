const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

function creatMarkup(arr) {
  const markup = arr.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    // console.log(li);
    return li;
   
  })
  ulEl.append(...markup);
}
creatMarkup(ingredients);

