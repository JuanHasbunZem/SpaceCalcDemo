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
    const listOfAges = new SpaceCalc(inputAge, 0, 0, 0, 0, 0);
    const lifeAverages = new LifeAverage(78, 0, 0, 0, 0, 0);

  });
});