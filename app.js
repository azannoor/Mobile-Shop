async function fetchData() {
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json();
    return data;
}

async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();
    console.log(data);
    if (!data) {
        return;
    }

    data.products.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const img = document.createElement('img');
        img.src = item.thumbnail;


        
        img.addEventListener('click', () => {
          
            window.location.href = `description.html?desc1=${encodeURIComponent(item.description)}&desc2=${encodeURIComponent(item.price)}`;

        });

        card.appendChild(title);
        card.appendChild(img);
        
        container.appendChild(card);
    });
}


renderData();
