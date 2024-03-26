

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const loader = document.getElementById('loader'); 
    loader.style.display = 'block';
 
    const productDetails = await fetchProductDetails(productId);

   
    updateUI(productDetails);
});

async function fetchProductDetails(productId) {

    
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const productData = await response.json();
    return productData;
}

function updateUI(product) {
  
   
    const container = document.querySelector('.container');
    const descriptionElement = document.getElementById('description')
    const priceElement = document.getElementById('price')
    const discountElement = document.getElementById('DiscountPercentage')
    const ratingElement = document.getElementById('Rating')
    const stockElement = document.getElementById('Stock')

    descriptionElement.innerHTML+=''+ product.description
    priceElement.innerHTML+=''+ product.price
    discountElement.innerHTML+=''+ product.discountPercentage
    ratingElement.innerHTML+=''+ product.rating
    stockElement.innerHTML+=''+ product.stock
   
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img')
    img.src = product.thumbnail

    card.appendChild(img)
    container.appendChild(card)
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    
}
