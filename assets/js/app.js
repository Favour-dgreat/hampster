document.addEventListener('mousemove', function(e) {
  const wandContainer = document.querySelector('.magic-wand-container');
  wandContainer.style.left = e.pageX + 'px';
  wandContainer.style.top = e.pageY + 'px';
});
window.scrollTo(0, 0);
function copyPress(copy) {
    copy ? navigator.clipboard.writeText(copy) : console.log('error copy');
}

  
