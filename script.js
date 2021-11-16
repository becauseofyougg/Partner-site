$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    });
    // owl-carousel
      $('.owl-carousel').owlCarousel({
            margin: 15,
            nav: true,
            navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
            items: 1,
            autoplay:true,
            dots: true,
      });
});

/*  dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

    // video
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');
    
    /* Build */
    
    function togglePlay() {
      const method = video.paused ? 'play' : 'pause';
      video[method]();  
    }
    function updateButton() {
      const icon = this.paused ? '►' : '❚ ❚';
      toggle.textContent = icon;
    }
    
    function skip() {
      console.log(this.dataset.skip);
      video.currentTime += parseFloat(this.dataset.skip);
    }
    
    function handleRangeUpdate() {
      video[this.name] = this.value;
    }
    function handleProgress(){
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.flexBasis = `${percent}%`;
    }
    function scrub(e) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }
    
    /* Hook Up the event listener */
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);
    
    toggle.addEventListener('click',togglePlay);
    skipButtons.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(button => button.addEventListener('change', handleRangeUpdate));
    ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate));
    
    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progressBar.addEventListener('mousedown', () => mousedown = true);
    progressBar.addEventListener('mouseup', () => mousedown = false);
    


customURL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

let carousel = $('.owl-carousel');

