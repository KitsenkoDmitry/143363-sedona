var form_btn = document.querySelector(".form-btn");
var popup = document.querySelector(".search-form");
var popup_show = false;

form_btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(!popup_show) {
    popup.classList.add("model-content-show");
    popup.classList.remove("model-content-close");
    popup_show = true;
  }
  else {
    popup.classList.remove("model-content-show");
    popup.classList.add("model-content-close");
    popup_show = false;
  }
});
