const body = document.getElementsByTagName('body')[0];
const logo = document.getElementById('nucleus');
const orbits = document.getElementsByClassName('orbit');
const themes = ['red', 'black', 'orange'];
let cIndex = 0;

logo.addEventListener('click', changeTheme);

function changeTheme() {
  logo.classList.add('active');
  body.classList.remove(themes[cIndex % 3]);
  Array.from(orbits).forEach(orbit => orbit.classList.remove(themes[cIndex % 3]));
  cIndex++;
  body.classList.add(themes[cIndex % 3]);
  Array.from(orbits).forEach(orbit => orbit.classList.add(themes[cIndex % 3]));

  setTimeout(() => {
    logo.classList.remove('active')
  }, 600)
}