let slideIndex = 1;
let periodTime = 0;
let curInterval;

function timer() {
  const time = document.querySelector('#timer');
  if (time.value >= 1) {
    if (curInterval != null) {
      clearInterval(curInterval);
      curInterval = null;
    }
    periodTime = time.value;
    if (curInterval == null) {
      curInterval = setInterval(() => {
        showSlide(slideIndex);
        slideIndex++;
      }, periodTime * 1000);
    }
  }
}

function stopSlideshow() {
  clearInterval(curInterval);
  curInterval = null;
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

showSlide(slideIndex);
