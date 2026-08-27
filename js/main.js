const accordeons = document.querySelectorAll('.accordeon');
const accordeonHeader = document.querySelector('.accordeon__header');
const accordeonBody = document.querySelector('.accordeon__body');

const accordeonBodyHeight = accordeonBody.offsetHeight;

console.log(accordeonBodyHeight)

accordeonHeader.addEventListener('click', function(event) {
    event.stopPropagation()
    accordeons.forEach((elem) => elem.classList.toggle('show'))
});

accordeonHeader.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordeon(e);
    }
});

function openAccordeon(elem) {
    elem.classList.toggle('show')
}

accordeons.forEach(openAccordeon)