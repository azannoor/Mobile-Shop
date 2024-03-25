document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const description = params.get('desc');

    
    const descriptionElement = document.querySelector('.description');
    descriptionElement.textContent = description;
});