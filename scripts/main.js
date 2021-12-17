const btnPrev = document.querySelector('.slider__link--prev');
const btnNext = document.querySelector('.slider__link--next');
let slidesArr = [...document.querySelectorAll('.slider__photo')];

(slidesArr.length <= 1) ? slidesArr.length + 1 : slidesArr;

function showSlides() {
  let i = slidesArr.findIndex(item => item.classList.contains('big'));
  if (slidesArr.length > 0) {
  slidesArr[i].classList.remove('big');
    if (i > slidesArr.length - 2) {
      i = -1;
    }
  slidesArr[i+1].classList.add('big');
  }
}

btnNext.addEventListener('click', function() {
  showSlides();
})
btnPrev.addEventListener('click', function() {
  showSlides();
})

slidesArr.forEach(function(item) {
  item.addEventListener('click', () => {
    let i = slidesArr.find(item => item.classList.contains('big'));
    console.log(i);
    i.classList.remove('big');
    item.classList.add('big');  
  })
})