import _ from 'lodash';
const images = Array.from(document.getElementsByClassName('cover-img'));
const container = document.querySelector('#sticky-cover-container');

var scrollContainer = container;
do {
  scrollContainer = scrollContainer.parentNode;
  if (!scrollContainer) break;
  scrollContainer.scrollTop += 1;
} while (scrollContainer.scrollTop == 0)

// scrollContainer.addEventListener('scroll', _.debounce(onScroll, 200, { leading: true, maxWait: 200 }))
scrollContainer.addEventListener('scroll', setScrollProperty);

function setScrollProperty() {
  let viewHeight = scrollContainer.offsetHeight;
  let contentHeight = scrollContainer.firstElementChild.offsetHeight;
  let totalHeight = contentHeight - viewHeight;

  // 10 + 1 (pixels) subtracted to account for borders/padding, animation resets if value is exactly 1.
  scrollContainer.style.setProperty('--scroll', Math.min((scrollContainer.scrollTop - 11), totalHeight) / totalHeight);
}