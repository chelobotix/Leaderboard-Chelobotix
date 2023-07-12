const ringAnimation = () => {
  document.querySelectorAll('li.player-scores').forEach((elem) => {
    elem.addEventListener('mouseover', () => {
      elem.querySelector('.user-img').classList.add('animationRing');
    });
    elem.addEventListener('mouseleave', () => {
      elem.querySelector('.user-img').classList.remove('animationRing');
    });
  });
};

export default ringAnimation;
