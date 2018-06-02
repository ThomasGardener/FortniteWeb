let slider = document.getElementById("range");
let sliderDisplay = document.getElementById("rangeDisplay");
let startingPrice = document.getElementById("summaryPrice");
let discountValue = document.getElementById("summaryDiscount");
let totalPrice = document.getElementById("totalPrice");
let estimatedTime = document.getElementById("estimatedTime");
let additionalCost = document.getElementById("summaryExtras");
let selfPlaySwitch = document.getElementById("selfPlaySwitch");
let queueTypeImage = document.getElementById("queueTypeImage");
let queueLeftArrow = queueTypeImage.previousElementSibling;
let queueRightArrow = queueTypeImage.nextElementSibling;

let queueTypeOptions = ["solo", "duo", "squads"];

let startCounter = 0;

queueLeftArrow.addEventListener("click", () => {

    startCounter -= 1;

    if (startCounter >= queueTypeOptions.length || startCounter < 0)
    {
      startCounter = 0;
    }

    queueTypeImage.setAttribute("src", `Icons/${queueTypeOptions[startCounter]}.svg`);
})

queueRightArrow.addEventListener("click", () => {
  startCounter += 1;

  if (startCounter >= queueTypeOptions.length || startCounter < 0)
  {
    startCounter = 0;
  }

  queueTypeImage.setAttribute("src", `Icons/${queueTypeOptions[startCounter]}.svg`);

})

let sliderAmount = slider.value;
const winsCostEuro = 9;
const discountAt5 = 5;
const discountAt15= 10;
const baseDiscount = 0;
const estimateTimePerWin = 28;
const euroS = "€";
const selfPlayValue = 30;
let totalTimeTaken = (slider.value * estimateTimePerWin);
let currentDiscount = baseDiscount;
let extrasIncrease = 0;


startingPrice.innerHTML = `${euroS} ${(winsCostEuro * sliderAmount)}`;
discountValue.innerHTML = `-${baseDiscount}%`;
totalPrice.innerHTML = `${euroS} ${(winsCostEuro * sliderAmount)}`;
estimatedTime.innerHTML = `${totalTimeTaken} minutes`;
additionalCost.innerHTML = '0%';



sliderDisplay.innerHTML = sliderAmount;


slider.oninput = function() {
    sliderDisplay.innerHTML = this.value;
    sliderAmount = this.value;
    priceAmount = (this.value * winsCostEuro);


    if (sliderAmount > 15) {
        discountValue.innerHTML = `-${discountAt15}%`;
        currentDiscount = discountAt15;
    }
    else if (sliderAmount > 5) {
      discountValue.innerHTML = `-${discountAt5}%`;
      currentDiscount = discountAt5;
    }
    else {
      discountValue.innerHTML = `-${baseDiscount}%`;
      currentDiscount = baseDiscount;
    }





    totalTimeTaken = sliderAmount * estimateTimePerWin;

    if ((totalTimeTaken / 60) > 1) {
      // let wholeTime = toString(toFloat(totalTimeTaken/60).toFixed(2)).split(".");
      let wholeTime = Math.round(totalTimeTaken/60);
      // let wholeTimeStringArr = toString(wholeTime).split('.');
      // let hours = parseInt(wholeTime[0]);
      // let minutes = parseInt(wholeTime[1]);

      // if (minutes > 5){
      //   hours += 1;
      // }
      estimatedTime.innerHTML = `${wholeTime} hours`;

      // let minutes = parseInt(((wholeTime[1] / 10) * 60));
    }
    else
    {
      estimatedTime.innerHTML = `${totalTimeTaken} minutes`;
    }

    startingPrice.innerHTML = `€${priceAmount}`;

    if (extrasIncrease > 0)
    {
      if (currentDiscount > extrasIncrease)
      {
        let discountDecimal = ((currentDiscount - extrasIncrease) * 0.01);

        let discountedTotal = (priceAmount - (priceAmount * discountDecimal)).toFixed(2);

        totalPrice.innerHTML =`€${discountedTotal}`;

      }
      else if (currentDiscount == extrasIncrease)
      {
        totalPrice.innerHTML =`€${priceAmount}`
      }
      else
      {
        let discountDecimal = ((extrasIncrease - currentDiscount) * 0.01);

        let discountedTotal = (priceAmount + (priceAmount * discountDecimal)).toFixed(2);

        totalPrice.innerHTML =`€${discountedTotal}`;
      }
    }
    else {
      let discountDecimal = (currentDiscount * 0.01);

      let discountedTotal = (priceAmount - (priceAmount * discountDecimal)).toFixed(2);

      totalPrice.innerHTML =`€${discountedTotal}`;
    }






}

selfPlaySwitch.addEventListener("input", () => {
  if (selfPlaySwitch.checked) {
    extrasIncrease += selfPlayValue;
    additionalCost.innerHTML = `+${extrasIncrease}%`;

    if ((extrasIncrease - currentDiscount) > 0) {
        let discountDecimal = ((extrasIncrease - currentDiscount) * 0.01);
        let confirmSlider = slider.value;
        let confirmSliderPrice = (confirmSlider * winsCostEuro);
        let discountedPrice = confirmSliderPrice * discountDecimal;
        let discountedTotal = (confirmSliderPrice + discountedPrice).toFixed(2);

        totalPrice.innerHTML = `€${discountedTotal}`;
    }
    else if ((extrasIncrease - currentDiscount) === 0) {
      let confirmSlider = slider.value;
        let confirmSliderPrice = (confirmSlider * winsCostEuro).toFixed(2);
        totalPrice.innerHTML = `€${confirmSliderPrice}`;
    }
    else {
      let discountDecimal = ((currentDiscount - extrasIncrease) * 0.01);
      let confirmSlider = slider.value;
      let confirmSliderPrice = (confirmSlider * winsCostEuro);
      let discountedPrice = confirmSliderPrice * discountDecimal;
      let discountedTotal = (confirmSliderPrice - discountedPrice).toFixed(2);
      totalPrice.innerHTML = `€${discountedTotal}`;
    }
    // else
    // {
    //   let discountDecimal = ((extrasIncrease - currentDiscount) * 0.01);
    //   let sliderAmount = slider.value
    //   let discountedPrice = sliderAmount * discountDecimal;
    //   let discountedTotal = sliderAmount + discountedPrice;
    // }

  }
  else {
    extrasIncrease -= selfPlayValue;
    if ((extrasIncrease - currentDiscount) > 0) {
        let discountDecimal = ((extrasIncrease - currentDiscount) * 0.01);
        let confirmSlider = slider.value;
        let confirmSliderPrice = (confirmSlider * winsCostEuro);
        let discountedPrice = confirmSliderPrice * discountDecimal;
        let discountedTotal = (confirmSliderPrice + discountedPrice).toFixed(2);

        totalPrice.innerHTML = `€${discountedTotal}`;
    }
    else if ((extrasIncrease - currentDiscount) === 0) {
      let confirmSlider = slider.value;
      let confirmSliderPrice = (confirmSlider * winsCostEuro).toFixed(2);
      totalPrice.innerHTML = `€${confirmSliderPrice}`;
    }
    else {
      let discountDecimal = ((currentDiscount - extrasIncrease) * 0.01);
      let confirmSlider = slider.value;
      let confirmSliderPrice = (confirmSlider * winsCostEuro);
      let discountedPrice = confirmSliderPrice * discountDecimal;
      let discountedTotal = (confirmSliderPrice - discountedPrice).toFixed(2);
      totalPrice.innerHTML = `€${discountedTotal}`;
    }

    additionalCost.innerHTML = `+${extrasIncrease}%`;
  }
})
