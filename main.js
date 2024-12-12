document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto", 
    spaceBetween: 16, 
    pagination: {
      el: ".swiper-pagination", 
      clickable: true, 
    },
    navigation: {
    },
    loop: false, 
  });
});





const readMoreBtn = document.querySelector('.ReadMore');
const textContainer = document.querySelector('.text-container');
const shortText = document.querySelector('.short-text');
const fullText = document.querySelector('.full-text');
const arrowIcon = document.querySelector('.ReadMore img');


readMoreBtn.addEventListener('click', () => {
  const isExpanded = textContainer.classList.contains('open');

  if (isExpanded) {

    textContainer.classList.remove('open');
    textContainer.style.maxHeight = `${shortText.offsetHeight}px`; 
    readMoreBtn.querySelector('p').textContent = 'Читать далее';
  } else {

    textContainer.classList.add('open');
    const fullHeight = shortText.offsetHeight + fullText.offsetHeight;
    textContainer.style.maxHeight = `${fullHeight}px`; 
    readMoreBtn.querySelector('p').textContent = 'Скрыть';
  }
});
