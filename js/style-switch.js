const styleSwicherToggle = document.querySelector('.style-switcher-toggler');
styleSwicherToggle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
window.addEventListener('scroll', (e) => {
    if (document.querySelector('.style-switcher').classList.contains('open') && !e.target.classList.contains('style-switcher-toggler')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})
const alterateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alterateStyle.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', true);
        }
    })
}
const dayNight= document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', (e) => {
    if(document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})