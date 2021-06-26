(function() {  var items=document.querySelectorAll(".timeline li")
function isElementInViewport(el){
    var rect = el.getBoundClient();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth|| document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i=0; i< items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("scroll", callbackFunc);
})();