window.addEventListener('load', function () {
  const words = [
    "Web Developer. . .", 
    "Designer. . .", 
    "UX Strategist. . .", 
    "Digital Marketer. . .",
    "SEO Specialist. . ."
  ];
  let i = 0;
  let timer;

  function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
  };

  function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
  };

  typingEffect();  
  
  function lockScroll() {
    console.log('yep clicked');
    document.documentElement.classList.toggle("scrollLock");
  }

  document.querySelector('.mobileNavCheckbox').addEventListener("click", lockScroll)

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".portfolioSwiper", {
    slidesPerView: 1,
    spaceBetween: 200,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1.9,
        spaceBetween: 30
      },
    },
    spaceBetween: 90,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

// Don't delete below this
}, 
false);