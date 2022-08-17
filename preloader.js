const preloader = document.getElementById('preloader')
const loading = document.getElementById('loader')
const loadingContainer = document.getElementById('loaderContainer')

window.addEventListener('load', (e) => {
    preloader.style.display = 'none';
    loading.style.display = 'none';
    loadingContainer.style.display = 'none';
})
