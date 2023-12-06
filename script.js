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


  document.getElementById('email-icon').addEventListener('click', function() {
    let emailText = document.querySelector('#email-container p.sm\\:block');
    emailText.style.display = (emailText.style.display === 'none' || emailText.style.display === '') ? 'block' : 'none';
  });

 
  document.getElementById('resume-section').addEventListener('click', function() {
    let resumeButton = document.getElementById('resume-button');
    resumeButton.style.display = (resumeButton.style.display === 'none' || resumeButton.style.display === '') ? 'flex' : 'none';
  });

  let experienceSection = document.getElementById('experience');
  experienceSection.addEventListener('mouseenter', function() {
    experienceSection.style.backgroundColor = '#f0f0f0';
  });

  experienceSection.addEventListener('mouseleave', function() {
    experienceSection.style.backgroundColor = 'inherit';
  });

  document.getElementById('case-study-button').addEventListener('click', function() {
    console.log('View Case Study button clicked!');
  });


  
});

