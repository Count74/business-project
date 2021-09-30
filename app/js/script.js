
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


// Слайдер клинтов

const clientSliders = document.querySelectorAll('.client_slider_wrapper');
clientSliders.forEach(wrapper => runSlider(wrapper));

function runSlider(wrapper) {

    const timer = 5000;
    let idx = 0;
    const blocks = wrapper.querySelectorAll('.client_slider__block');
    const slider = wrapper.querySelector('.client_slider');
    const bars = wrapper.querySelectorAll('.bar');
    const width = blocks[0].offsetWidth;
    let interval = setInterval(run, timer);
    


    function run(){
        idx++;
        changeSlider();
    }
      
    function changeSlider() {
        if(idx > blocks.length - 1) {
            idx = 0;
        } else if (idx < 0) {
            idx = blocks.length - 1;
        }
        
        slider.style.transform = `translateX(${-idx * width}px)`;
        changeBars();
    }

    function changeBars(){
        bars.forEach((bar, index) => {
            if (index == idx) {
                bar.classList.add('active');
            } else {
                bar.classList.remove('active');
            }
        })
    }
    
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(run, timer);
    }
    
    // rightBtn.addEventListener('click', ()=> {
    //     idx++;
    //     changeImage();
    //     resetInterval();
    // });
    
    // leftBtn.addEventListener('click', ()=> {
    // idx--;
    // changeImage();
    // resetInterval();
    // })
}