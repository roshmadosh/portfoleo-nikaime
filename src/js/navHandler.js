window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find container that has scrollbar
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      // containers with no scrollbar have .scrollTop = 0. Adding any number to it will keep it at zero.
      scrollContainer.scrollTop += 1; 
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { // i think this is here in case there's nested scrollbars. targetY is the sum of the distance from a nested scrollbar to the top of its container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 10) return;
      c.scrollTop = a + (b - a) / 10 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}