const catEl = document.querySelector('#categories');
console.log(`Number of categories: ${catEl.childElementCount} `);


[...catEl.children].forEach(element => {
    console.log(`Category: ${element.children[0].textContent}`);
    console.log(`Elements: ${element.children[1].childElementCount}`);
});