// scroll-reveal for elements with class "reveal"
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.2});
    items.forEach(i => io.observe(i));
  } else {
    items.forEach(i => i.classList.add('visible'));
  }

  // highlight current page in nav dots
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav .dots a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
});
