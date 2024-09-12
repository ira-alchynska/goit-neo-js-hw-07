
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const subItems = item.querySelectorAll('ul > li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${subItems.length}`);
});