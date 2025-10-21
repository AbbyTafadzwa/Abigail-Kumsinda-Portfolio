// Smooth scrolling for nav links and mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
      // close mobile menu if open
      if(window.innerWidth < 900){
        document.querySelector('.nav-links').style.display = 'none';
      }
    });
  });

  const toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function(){
    const links = document.querySelector('.nav-links');
    if(getComputedStyle(links).display === 'none'){
      links.style.display = 'flex';
      links.style.flexDirection = 'column';
      links.style.gap = '12px';
      links.style.position = 'absolute';
      links.style.right = '20px';
      links.style.top = '60px';
      links.style.background = 'white';
      links.style.padding = '12px';
      links.style.boxShadow = '0 6px 18px rgba(15,23,42,0.06)';
      links.style.borderRadius = '8px';
    } else {
      links.style.display = 'none';
    }
  });
});
