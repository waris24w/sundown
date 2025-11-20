let fixed = document.querySelector(".fixed-img");
let elementCont = document.querySelector(".element-cont");
let img = document.querySelector(".warp-img img");
let elements = document.querySelectorAll(".element");
let titleH1 = document.querySelectorAll(".title-h1");
let titlePs = document.querySelectorAll(".title-ps");
let loader = document.querySelector(".loader");

var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   }
 });

function loaderAnimation () {
	setTimeout(function () {
		loader.style.top = "-100%";
	}, 3500)
}
function page3 () {
	titleH1.forEach(function (el, index) {
		el.addEventListener("click", function () {
			titleH1.forEach(function (otherEl) {
				otherEl.style.scale = "1";
				otherEl.style.opacity = ".7";
			})
			titlePs.forEach(function (ps) {
				ps.style.display = "none"

			})

			el.style.scale = "1.2";
			el.style.opacity = "1";
			img.src = `${el.getAttribute("data-imgs")}`
			console.log(el.getAttribute("data-imgs"))
			if (titlePs[index]){
				titlePs[index].style.display = "block"
			}
		})
	})
}


function changingImg () {
	elementCont.addEventListener("mouseenter", function () {
		fixed.style.display = 'block';
	})
	elementCont.addEventListener("mouseleave", function () {
		fixed.style.display = 'none';
	})


	elements.forEach( function(elm) {
		elm.addEventListener("mouseenter", function () {
			var img = elm.getAttribute("data-img");
			console.log(img)
			fixed.style.backgroundImage = `url(resourse/${img})`
		})
	});

}
changingImg()
page3()
loaderAnimation()