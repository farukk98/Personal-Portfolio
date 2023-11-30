document.addEventListener("DOMContentLoaded", function() {

    var targets = document.getElementById('image-container').getElementsByTagName('img');
  
    var animation = anime({
      targets: targets,
      translateY: 5,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad',
      duration: 1000 
    });
  });
  