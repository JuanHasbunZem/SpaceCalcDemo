import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceCalc from './spaceCalc.js';
import LifeAverage from './lifeAve.js';

$(document).ready(function() {
  $('#userAge').submit(function(event) {
    event.preventDefault();
    const inputAge = $('#age').val();
    const listOfAges = new SpaceCalc(inputAge);
    const lifeAverages = new LifeAverage(78);

    $("#earthAge").text(`${inputAge}`);
    $("#mercAge").text(`${listOfAges.mercury}`);
    $("#venAge").text(`${listOfAges.venus}`);
    $("#marAge").text(`${listOfAges.mars}`);
    $("#jupAge").text(`${listOfAges.jupiter}`);

    $("#earAvg").text("78");
    $("#mercAvg").text(`${lifeAverages.mercuryAvg}`);
    $("#venAvg").text(`${lifeAverages.venusAvg}`);
    $("#marAvg").text(`${lifeAverages.marsAvg}`);
    $("#jupAvg").text(`${lifeAverages.jupiterAvg}`);

    if(78-inputAge <= 0) {
      $("#lifeExpectEarth").text(`Wow! You've exceeded the life expectancy on Earth by ${(78-inputAge) * -1} year(s)!`);
    } else {
      $("#lifeExpectEarth").text(`On Earth you have an estimated ${78-inputAge} year(s) left!`);
    }

    if(lifeAverages.mercuryAvg - listOfAges.mercury <= 0) {
      $("#lifeExpectMercury").text(`Wow! You've exceeded the life expectancy on Mercury by ${(lifeAverages.mercuryAvg - listOfAges.mercury) * -1} year(s)!`);
    } else {
      $("#lifeExpectMercury").text(`On Mercury you have an estimated ${lifeAverages.mercuryAvg - listOfAges.mercury} year(s) left!`);
    }

    if(lifeAverages.venusAvg - listOfAges.venus <= 0) {
      $("#lifeExpectVenus").text(`Wow! You've exceeded the life expectancy on Venus by ${(lifeAverages.venusAvg - listOfAges.venus) * -1} year(s)!`);
    } else {
      $("#lifeExpectVenus").text(`On Venus you have an estimated ${lifeAverages.venusAvg - listOfAges.venus} year(s) left!`);
    }

    if(lifeAverages.marsAvg - listOfAges.mars <= 0) {
      $("#lifeExpectMars").text(`Wow! You've exceeded the life expectancy on Mars by ${(lifeAverages.marsAvg - listOfAges.mars) * -1} year(s)!`);
    } else {
      $("#lifeExpectMars").text(`On Mars you have an estimated ${lifeAverages.marsAvg - listOfAges.mars} year(s) left!`);
    }

    if(lifeAverages.jupiterAvg - listOfAges.jupiter <= 0) {
      $("#lifeExpectJupi").text(`Wow! You've exceeded the life expectancy on Jupiter by ${(lifeAverages.jupiterAvg - listOfAges.jupiter) * -1} year(s)!`);
    } else {
      $("#lifeExpectJupi").text(`On Jupiter you have an estimated ${lifeAverages.jupiterAvg - listOfAges.jupiter} year(s) left!`);
    }

  });
});