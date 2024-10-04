let navlist = document.getElementsByClassName("navlist");

for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", () => {
        for (let i = 0; i < navlist.length; i++) {
            navlist[i].classList.remove("active");
        }
        navlist[i].classList.add("active");
    })
}

function fetchProductData() {
    fetch('products-list.json').then(resp => resp.json()).then(data => {
        console.log(data)
        
        for (let i = 0; i < data.length; i++) {
            
            let productsArea = document.getElementById("products-area");

            let card = document.createElement("div");

            card.classList.add("product-card");
            productsArea.appendChild(card);

            card.innerHTML = `
            <div class="img-box">
                <img src="${data[i].img}" alt="bottle1" width="40%" height="100%">
            </div>
            
            <div class="content-box">
                <h3>${data[i].title}</h3>
                <p>${data[i].description}</p>
                <div class="cardBtnBox" style="display: flex; justify-content: end;">
                    <button class="cardBtn">Learn more</button>
                </div>
            </div>
            `
        }
    })

}

fetchProductData();
