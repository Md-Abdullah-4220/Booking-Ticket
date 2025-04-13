const PriseDetails = document.querySelector("#PriseDetails");
const TotalPrice = document.querySelector("#totalPrice");
const SeatNumber = document.getElementById("seatNumber");
const onShowElement = document.getElementById("onShow");
const EnterCoupon = document.getElementById("enterCoupon");
const CouponBtn = document.getElementById("couponBtn");
const GrandTotal = document.getElementById("grandTotal");
let calclution

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
let count = 0;

const searchBtn = document.querySelectorAll("#searBtn");
searchBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let inText = btn.innerHTML;

    if (count < 4 && btn.classList.contains("bg-gray-100")) {
      btn.classList.add("bg-[#1DD100]");
      btn.classList.add("text-white");
      btn.classList.remove("bg-gray-100");
      btn.classList.remove("back");
      const newElement = document.createElement("div");
      newElement.className =
        "flex justify-between text-center mt-5 text-[#03071299]";
      newElement.innerHTML = `
        <p>${inText}</p>
        <p>Economoy</p>
        <p>650</p>`;

      PriseDetails.appendChild(newElement);
      count +=  1;
      calclution = TotalPrice.innerHTML = count * 650;
      SeatNumber.innerHTML = count;
      if (count == 0) {
        onShowElement.classList.remove("hidden");
        onShowElement.classList.add("flex");
      } else {
        onShowElement.classList.add("hidden");
        onShowElement.classList.remove("flex");
      }
    } else if (count <= 4 && btn.classList.contains("bg-[#1DD100]")) {
      btn.classList.remove("bg-[#1DD100]");
      btn.classList.remove("text-white");
      btn.classList.add("bg-gray-100");
      btn.classList.add("back");
      count = count - 1;
      const children = Array.from(PriseDetails.children);
      const childToRemove = children.find((child) => child.querySelector("p")?.innerText === inText);

      if (childToRemove) {
        PriseDetails.removeChild(childToRemove);
      }
      calclution = TotalPrice.innerHTML = count * 650;
      SeatNumber.innerHTML = count;
      if (count == 0) {
        onShowElement.classList.remove("hidden");
        onShowElement.classList.add("flex");
      } else {
        onShowElement.classList.add("hidden");
        onShowElement.classList.remove("flex");
      }
    }
    else {
      alert("You can only select 4 Seat at a time.");
    }
  });
});

document.getElementById("actionCoupon").addEventListener("click", function () {
  if (EnterCoupon.value == "NEW15") {
    let discount = calclution * 0.15;
    GrandTotal.innerHTML = calclution - discount;
    EnterCoupon.disabled = true;
  } else if (EnterCoupon.value == "Couple20") {
    let discount = calclution * 0.25;
    GrandTotal.innerHTML = calclution - discount;
    EnterCoupon.disabled = true;
  } else  {
    EnterCoupon.value = "Invalid Coupon Code";
    EnterCoupon.style.color = "red";
  }
});
