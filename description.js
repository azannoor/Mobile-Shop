document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const price = params.get('desc1');
    const description = params.get('desc2');

    const container = document.querySelector('.description');

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description
    container.appendChild(descriptionElement)

    const priceElement = document.createElement('p');
    priceElement.textContent = price
    container.appendChild(priceElement)
    

});