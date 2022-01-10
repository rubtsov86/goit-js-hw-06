const itemElementsArray = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemElementsArray.length}`);

const showTitleNumberOfElements = function (i) {
    console.log(`Category: ${itemElementsArray[i].firstElementChild.textContent}`)
    console.log(`Elements: ${itemElementsArray[i].lastElementChild.children.length}`)
}


showTitleNumberOfElements(0);
showTitleNumberOfElements(1);
showTitleNumberOfElements(2);


