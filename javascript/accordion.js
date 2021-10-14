const accordion = document.getElementsByClassName('label');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active')
  })
};
