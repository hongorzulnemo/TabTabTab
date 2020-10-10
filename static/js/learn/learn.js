ALL_CATEGORIES.forEach(cat => {
    
});


const catCirclesWrapper = document.getElementById('cat-circles');
function createCatCircDiv() {
    const div = document.createElement('div');
    div.className = `category-circle`;
    return div;
}
const selectedSix = copy(shuffle_array(ALL_CATEGORIES), 6); 
selectedSix.forEach(cat => {
    const div = createCatCircDiv();
    div.textContent = cat.name;
    div.style.background = `url(${cat.imgUrl})`;
    div.style.backgroundRepeat = `no-repeat`;
    div.style.backgroundSize = `contain`;
    div.style.backgroundPosition = `center`;

    div.addEventListener('click', () => {
        console.log(cat)
    });

    catCirclesWrapper.appendChild(div);

});