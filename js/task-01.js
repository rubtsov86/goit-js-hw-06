const itemElementsArray = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemElementsArray.length}`);

itemElementsArray.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})


