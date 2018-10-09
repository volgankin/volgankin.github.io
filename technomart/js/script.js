var modalFeedback = document.querySelector(".modal-feedback");
var modalMap = document.querySelector(".modal-map");
var cardMenu = document.querySelectorAll(".card-menu");
var sliderCatalog = document.querySelector(".slider-catalog");
var serviceSlider = document.querySelector(".service-slider")

if (modalFeedback) {
	var modalFeedbackOpen = document.querySelector(".btn-feedback");
	var modalFeedbackClose = document.querySelector(".modal-close");
	var modalFedbackFocus = modalFeedback.querySelector("[name=email]");

	var modalFeedbackName = modalFeedback.querySelector("[name=name]");
	var modalFeedbackEmail = modalFeedback.querySelector("[name=email]");
	var modalFeedbackComment = modalFeedback.querySelector("[name=comment]");

	modalFeedbackOpen.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.add("modal-show");
		modalFedbackFocus.focus();
	});

	modalFeedbackClose.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
	});

	modalFeedback.addEventListener("submit", function(evt){
		if (!modalFeedbackName.value || !modalFeedbackEmail.value || !modalFeedbackComment) {
			evt.preventDefault();
			console.log("Не заполнено одно из полей!");
		} else {
			localStorage.setItem("modalFeedbackName", modalFeedbackName.value);
		}
	});
}

if (modalMap) {
	var modalMapOpen = document.querySelector(".modal-map-open");
	var modalMapClose = modalMap.querySelector(".modal-close");

	modalMapOpen.addEventListener("click", function(evt){
		evt.preventDefault();
		modalMap.classList.add("modal-show");
	});

	modalMapClose.addEventListener("click", function(evt){
		evt.preventDefault();
		modalMap.classList.remove("modal-show");
	});
}

if (cardMenu) {
	var cartBasket = document.querySelector(".modal-basket");
	var modalBasketOpen = document.querySelectorAll(".card-menu .btn-buy");
	var modalBasketClose = cartBasket.querySelector(".modal-close");

	for (var i = 0; i < modalBasketOpen.length; i++){
		var correntModalBasketOpen = modalBasketOpen[i];
		correntModalBasketOpen.addEventListener("click", function(evt){
			evt.preventDefault();
			cartBasket.classList.add("modal-show");
		});
	}

	modalBasketClose.addEventListener("click", function(evt){
		evt.preventDefault();
		cartBasket.classList.remove("modal-show");
	});
}

if (sliderCatalog) {
	var controlOne = sliderCatalog.querySelector(".slider-controls-one");
	var controlTwo = sliderCatalog.querySelector(".slider-controls-two");
	var slideOne = sliderCatalog.querySelector(".slide-one");
	var slideTwo = sliderCatalog.querySelector(".slide-two");
	var indicatorOne = sliderCatalog.querySelector(".slider-indicator-one");
	var indicatorTwo = sliderCatalog.querySelector(".slider-indicator-two");
	var controlOne = sliderCatalog.querySelector(".slider-control-one");
	var controlTwo = sliderCatalog.querySelector(".slider-control-two");

	controlOne.addEventListener("click", function(evt){
		evt.preventDefault();
		slideOne.classList.remove("slide-off");
		slideTwo.classList.add("slide-off");
		indicatorOne.classList.add("indicator-active");
		indicatorTwo.classList.remove("indicator-active");
		controlOne.classList.add("slide-off");
		controlTwo.classList.remove("slide-off");
	});

	controlTwo.addEventListener("click", function(evt){
		evt.preventDefault();
		slideOne.classList.add("slide-off");
		slideTwo.classList.remove("slide-off");
		indicatorOne.classList.remove("indicator-active");
		indicatorTwo.classList.add("indicator-active");
		controlOne.classList.remove("slide-off");
		controlTwo.classList.add("slide-off");
	});
}

if (serviceSlider) {
	var menuItemOne = serviceSlider.querySelector(".menu-item-one");
	var menuItemTwo = serviceSlider.querySelector(".menu-item-two");
	var menuItemThree = serviceSlider.querySelector(".menu-item-three");
	var slideDelivery = serviceSlider.querySelector(".slider-item-delivery");
	var slideGuarantee = serviceSlider.querySelector(".slider-item-guarantee");
	var slideCredit = serviceSlider.querySelector(".slider-item-credit");

	menuItemOne.addEventListener("click", function(evt) {
		evt.preventDefault();
		menuItemOne.classList.add("item-active");
		menuItemTwo.classList.remove("item-active");
		menuItemThree.classList.remove("item-active");

		slideDelivery.classList.add("enabled");
		slideGuarantee.classList.remove("enabled");
		slideCredit.classList.remove("enabled");
	});

	menuItemTwo.addEventListener("click", function(evt) {
		evt.preventDefault();
		menuItemOne.classList.remove("item-active");
		menuItemTwo.classList.add("item-active");
		menuItemThree.classList.remove("item-active");

		slideDelivery.classList.remove("enabled");
		slideGuarantee.classList.add("enabled");
		slideCredit.classList.remove("enabled");
	});

	menuItemThree.addEventListener("click", function(evt) {
		evt.preventDefault();
		menuItemOne.classList.remove("item-active");
		menuItemTwo.classList.remove("item-active");
		menuItemThree.classList.add("item-active");

		slideDelivery.classList.remove("enabled");
		slideGuarantee.classList.remove("enabled");
		slideCredit.classList.add("enabled");
	});

var storage = localStorage.getItem("modalFeedbackName");
var isStorageSupport = true;
var storage = "";

if (storage) {
	modalFeedbackName.value = storage;
}

try {
	storage = localStorage.getItem("modalFeedbackName");
} catch (err) {
	var isStorageSupport = false;
}

	window.addEventListener("keydown", function(evt){
		if (evt.keyCode === 27) {
			if (modalFeedback.classList.contains("modal-show")){
				evt.preventDefault();
				modalFeedback.classList.remove("modal-show");
			}
		}
	});
}