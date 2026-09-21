// Reveals the Experience flow arrows once, when the section scrolls into view.
// Without JavaScript (or without IntersectionObserver) the arrows are simply visible.
(function () {
  var flow = document.querySelector('.flow');
  if (!flow) return;

  var show = function () { flow.classList.add('is-visible'); };

  if (!('IntersectionObserver' in window)) { show(); return; }

  var observer = new IntersectionObserver(function (entries) {
    if (entries.some(function (e) { return e.isIntersecting; })) {
      show();
      observer.disconnect();
    }
  }, { threshold: 0.25 });

  observer.observe(flow);
})();
