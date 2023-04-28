/* wrap script */
let wraps = document.getElementsByClassName('wrap-show-advance-info-box');
for (var i = 0; i < wraps.length; i++) {
    let wrap=wraps[i];
    wrap.querySelector('.title-box').onclick = function() {
    wrap.classList.toggle("filter");        
    const testElements = wrap.getElementsByClassName('wrap-content');
    const testDivs = Array.prototype.filter.call(
    testElements,
         (testElement) => testElement.classList.toggle('active'),
    );
    };
};
/* wrap script */