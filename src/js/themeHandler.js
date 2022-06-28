const body = document.getElementsByTagName('body')[0];
const logo = document.getElementById('nucleus');
const themes = ['red', 'black', 'orange'];
let cIndex = 0;
console.log(logo);
logo.addEventListener('click', changeTheme);

function changeTheme() {
  console.log('event fired');
  logo.classList.add('active');
  body.classList.remove(themes[cIndex % 3]);
  cIndex++;
  body.classList.add(themes[cIndex % 3]);

  setTimeout(() => {
    logo.classList.remove('active')
  }, 500)
}