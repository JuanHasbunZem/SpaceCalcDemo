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

  });
});