async function fetchData() {

    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json();
    return data;
}

async function renderData() {
    const container = document.querySelector('.container');
    const loader = document.getElementById('loader'); 
    loader.style.display = 'block';

    try {
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
                const productId = item.id; 
                window.location.href = `description.html?id=${encodeURIComponent(productId)}`;
            });

            card.appendChild(title);
            card.appendChild(img);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loader.style.display = 'none'; 
    }
}

renderData();
