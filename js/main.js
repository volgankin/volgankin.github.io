'use strict';

(function () {
  var buttonChecks = document.getElementById('button-checks');
  var buttonCount = document.getElementById('button-count');

  var containerAmounts = document.querySelector('.container-amounts');
  var containerLitrs = document.querySelector('.container-litrs');

  var templateAmounts = document.querySelector('#template-amounts').content.querySelector('input');
  var templateLitrs = document.querySelector('#template-litrs').content.querySelector('input');

  var checksAmountsResult = document.querySelector('.checks-amounts-result');
  var summInChecks = 0;

  var checksLitrsResult = document.querySelector('.checks-litrs-result');
  var litrsInChecks = 0;

  var checksAverageLitrResult = document.querySelector('.checks-average-result');
  var averageSummLitr = 0;

  var summResult = document.querySelector('.summ-result');

  var addFields = function (container, template) {
    var element = template.cloneNode(true);
    container.appendChild(element);
  };

  var onCreateField = function (evt) {
    evt.preventDefault();

    var quantityChecks = document.querySelector('.checks-quantity-value').value;

    if (quantityChecks <= 32) {
      for (var i = 0; i < quantityChecks - 1; i++) {
        addFields(containerAmounts, templateAmounts);
        addFields(containerLitrs, templateLitrs);
      }
    }
    buttonChecks.removeEventListener('click', onCreateField);
  };

  var stringToNumber = function (amount) {
    var stringValue = '';
    for (var j = 0; j < amount.length; j++) {
      var char = amount[j];
      if (char === ',') {
        char = '.';
        stringValue += char;
      } else {
        stringValue += char;
      }
    }
    return parseFloat(stringValue);
  };

  var getEnumerationValues = function (amounts) {
    var summ = 0;
    for (var i = 0; i < amounts.length; i++) {
      summ += stringToNumber(amounts[i].value);
    }
    return summ;
  };

  var outputResult = function (distance, season) {
    checksAmountsResult.textContent = summInChecks.toFixed(2);
    checksLitrsResult.textContent = litrsInChecks.toFixed(2);
    checksAverageLitrResult.textContent = averageSummLitr.toFixed(2);
    summResult.textContent = (averageSummLitr.toFixed(2) * distance * season / 100).toFixed(2);
  };

  var calculateChecks = function (checksAmounts, checksLitrs) {
    summInChecks = getEnumerationValues(checksAmounts);
    litrsInChecks = getEnumerationValues(checksLitrs);
    averageSummLitr = summInChecks.toFixed(2) / litrsInChecks.toFixed(2);
  };

  var onCalculate = function (evt) {
    evt.preventDefault();

    var checksAmounts = document.querySelectorAll('.checks-amounts-value');
    var checksLitrs = document.querySelectorAll('.checks-litrs-value');

    calculateChecks(checksAmounts, checksLitrs);

    var distance = document.querySelector('.mileage-value').value;
    var season = document.querySelector('.fuel-consumption-value').value;
    season = stringToNumber(season);

    outputResult(distance, season);
  };

  buttonChecks.addEventListener('click', onCreateField);
  buttonCount.addEventListener('click', onCalculate);
})();
