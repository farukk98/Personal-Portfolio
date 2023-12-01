document.addEventListener("DOMContentLoaded", function() {

    let targets = document.getElementById('resume-section').getElementsByTagName('img');
  
    let animation = anime({
      targets: targets,
      translateY: 5,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad',
      duration: 1000 
    });
  });
  