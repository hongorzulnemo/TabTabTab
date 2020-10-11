ALL_CATEGORIES.forEach(cat => {
    
});


const catCirclesWrapper = document.getElementById('cat-circles');
function createCatCircDiv() {
    const div = document.createElement('div');
    div.className = `category-circle`;
    return div;
}
function createCatCircDivTint() {
    const div = document.createElement('div');
    div.className = `category-circle-tint`;
    return div;
}
function createCatCircDivSpan() {
    const span = document.createElement('span');
    return span;
}
function createCatCircImgDiv() {
    const div = document.createElement('div');
    div.className = `category-circle-img`;
    return div;
}
const selectedSix = copy(shuffle_array(ALL_CATEGORIES), 6); 
selectedSix.forEach(cat => {
    const div = createCatCircDiv();
    const imgDiv = createCatCircImgDiv();
    const divTint = createCatCircDivTint();
    const span = createCatCircDivSpan();
    span.textContent = cat.name;
    imgDiv.style.background = `url(${cat.imgUrl})`;
    imgDiv.style.backgroundRepeat = `no-repeat`;
    imgDiv.style.backgroundSize = `contain`;
    imgDiv.style.backgroundPosition = `center`;



    imgDiv.addEventListener('click', () => {
        console.log(cat)
    });
    div.appendChild(divTint);
    div.appendChild(imgDiv);
    div.appendChild(span);
    catCirclesWrapper.appendChild(div);

});