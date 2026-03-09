let productData = document.querySelector("#product-data");

async function fetchData() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    let product = data.products;
    product.forEach(({ title, price }) => {

        productData.innerHTML += `
        <h2>${title}</h2>
        <p>${price}</p>
        `
    })
}

// fetchData();
