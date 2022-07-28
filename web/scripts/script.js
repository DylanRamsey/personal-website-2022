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

// Don't delete below this
}, 
false);