const allItems = document.querySelectorAll(".item")
console.log("Number of categories:", allItems.length);
Array.from(allItems).forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;

    
    const numberElements = category.getElementsByTagName("li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberElements}`);
});
