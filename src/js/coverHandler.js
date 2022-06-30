import _ from 'lodash';
const images = Array.from(document.getElementsByClassName('cover-img'));
const container = document.querySelector('#sticky-cover-container');

var scrollContainer = container;
do {
  scrollContainer = scrollContainer.parentNode;
  if (!scrollContainer) break;
  scrollContainer.scrollTop += 1;
} while (scrollContainer.scrollTop == 0)

scrollContainer.addEventListener('scroll', _.debounce(onScroll, 200, { leading: true, maxWait: 200 }))

function onScroll() {
  const top = this.scrollTop;
  const topRatio = top / 1374.5;
  images.forEach((image, idx) => {
    image.style.opacity = `${topRatio}`;
    switch(idx) {
      case 0:
        image.style.transform = `translate3d(calc(20vw * ${topRatio} * 1), calc((40vh - 11rem) * -1 * .5 * ${topRatio}), 0)`;
        break;
      case 1:
        image.style.transform = `translate3d(calc(30vw * ${topRatio} * -1), calc((70vh - 11rem) * -1 * .5 * ${topRatio}), 0)`;
        break;
      case 2:
        image.style.transform = `translate3d(calc(15vw * ${topRatio} * 1), calc((30vh - 11rem) * .5 * ${topRatio}), 0)`;
        if (topRatio > .5) {
          image.style.zIndex = '2';
        }
        break;
    }
  })
}