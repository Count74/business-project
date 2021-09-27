
// Маска для телефона
const phoneInputElement = document.getElementById('phone');
if (phoneInputElement) {
    new IMask(
        phoneInputElement, 
        {
            mask: '+7(000)000-00-00',
            lazy: false
        } 
    );
}

// Раскрытие элеметов FAQ
const faq_items = document.querySelectorAll('.faq_block__item');
if(faq_items) {
    faq_items.forEach(item => {
        item.querySelector('.nav').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}
