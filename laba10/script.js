const curtain = document.querySelector('.curtain');
const lamp = document.querySelector('.lamp');
const content = document.querySelector('.content');
const rabbit = document.querySelector('.rabbit');
const bird = document.querySelector('.bird');
const hat = document.querySelector('.hat');

curtain.addEventListener('click', () => {
  curtain.classList.toggle('active');
});

lamp.addEventListener('click', () => {
  content.classList.toggle('hidden');
});

function changeAnimals()
{
  rabbit.classList.toggle('InHat');
  rabbit.classList.toggle('OutHat');
  bird.classList.toggle('InHat');
  bird.classList.toggle('OutHat');
}

hat.addEventListener('click', changeAnimals);
