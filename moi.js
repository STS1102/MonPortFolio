document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulaire envoyé !');
});



// Fonction pour vérifier si un élément est dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



// Fonction pour animer l'entrée de la photo
function animateProfileImage() {
    const img = document.querySelector('.profile-image');
    if (isInViewport(img)) {
        img.classList.add('enter');
    }
}




// Écouter l'événement de défilement
window.addEventListener('scroll', animateProfileImage);



// Appliquer une classe CSS lorsque la photo entre dans le viewport
document.addEventListener('DOMContentLoaded', animateProfileImage);
document.getElementById('view-more').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if(moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        moreInfo.innerHTML = '<p>À travers mes études et expériences professionnelles, j’ai acquis des compétences en HTML/CSS, JavaScript, conception responsive, bases de données SQL, et utilisation de Git pour le contrôle de version. Actuellement à la recherche d’une alternance pour ma troisième année, je suis prête à contribuer à des projets innovants et dynamiques.</p>';
        this.textContent = 'Voir moins';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'En savoir plus';
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    const title = document.querySelector('header h1');
    const subTitle = document.querySelector('header p');

    

    // Function to add a class that triggers the CSS animation
    function addAnimationClass(element, animationClassName) {
        if (!element.classList.contains(animationClassName)) {
            element.classList.add(animationClassName);
        }
    }

    // Set a timeout to create a staggered appearance
    setTimeout(() => addAnimationClass(profileImage, 'slide-in'), 300); // Waits 300ms to add the class
    setTimeout(() => addAnimationClass(title, 'fade-in'), 600); // Then fades in the title
    setTimeout(() => addAnimationClass(subTitle, 'fade-in'), 900); // And then the subtitle
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        if (isInViewPort(bar)) {
            bar.style.width = bar.getAttribute('data-skill-level');
        }
    });
});



window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if(window.scrollY === 0) {
      header.classList.remove('header-scrolled');
    } else {
      header.classList.add('header-scrolled');
    }
  });

  window.addEventListener('load', function() {
    var aboutText = document.getElementById('aboutText');
    aboutText.classList.add('visible');
});


