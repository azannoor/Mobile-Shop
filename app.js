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

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = ''; 

        
        img.addEventListener('click', () => {
          
            window.location.href = `description.html?desc=${encodeURIComponent(item.description)}`;
        });

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(description); 

        container.appendChild(card);
    });
}


renderData();
