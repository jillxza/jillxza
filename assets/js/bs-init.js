
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
	if ('AOS' in window) {
		AOS.init();
	}
}, false);


var btn = document.querySelectorAll("[id*='FooterBtn']");
var modals = document.querySelectorAll("[id*='FooterModal']");

var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the corresponding modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
    e.preventDefault();
    modalId = this.id.replace("Btn", "Modal"); // replace "Btn" with "Modal" to get the corresponding modal id
    modal = document.querySelector("#" + modalId);
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
  }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}