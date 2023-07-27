const numberOfCategories = document.querySelectorAll("ul#categories>li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);
const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = Number(element.querySelectorAll('li').length);
    console.log(`Category: ${title} 
    Elements: ${itemsLength}`);
});