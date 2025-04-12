document
  .getElementById("openMobileMenu")
  .addEventListener("click", function () {
    document.getElementById("backContent").classList.toggle("hidden");
    document.getElementById("backContent").classList.remove("flex");
    document.getElementById("mobileMenu").classList.remove("hidden");
    document.getElementById("mobileMenu").classList.toggle("flex");
  });
document
  .getElementById("closeMobileMenu")
  .addEventListener("click", function () {
    document.getElementById("backContent").classList.toggle("flex");
    document.getElementById("backContent").classList.remove("hidden");
    document.getElementById("mobileMenu").classList.toggle("hidden");
    document.getElementById("mobileMenu").classList.remove("flex");
  });

const searchBtn = document.querySelectorAll("#searBtn");
searchBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    // btn.classList.add("bg-[#1DD100]");
    // btn.classList.add("text-white");
    // btn.classList.remove("bg-gray-100");
    // btn.classList.remove("back");
    let inText = btn.innerHTML;
    console.log(inText);
    if (btn.classList.contains("bg-[#1DD100]")) {
      btn.classList.remove("bg-[#1DD100]");
      btn.classList.remove("text-white");
      btn.classList.add("bg-gray-100");
      btn.classList.add("back");
    } else {
      btn.classList.add("bg-[#1DD100]");
      btn.classList.add("text-white");
      btn.classList.remove("bg-gray-100");
      btn.classList.remove("back");
    }
  });
});
