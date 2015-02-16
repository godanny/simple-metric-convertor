(function(window,document,$,undefined){
  $(function(){

    var type = 'C',
      calculationConstant = 1.8000,
      temperatureOption = [],
      degreeSymbol = '&#x000BA;';

    //init code
    temperatureOption['C'] = 'F';
    temperatureOption['F'] = 'C';
    clearOut();
    togglePanel(temperatureOption[type]);

    // handel convert click event
    $('#convertBtn').on('click', Convert);

    //handel temperature options
    $('#tempOption').on('click',setTemperatureOption);

    function setTemperatureOption(e){
      type = (type==='C') ? 'F': 'C';
      clearOut();
      togglePanel(temperatureOption[type]);
    }

    function clearOut(){
      $('#result').hide();
      $('#temperature').val('');
    }

    function Convert(e){
      e.preventDefault();
      var inputTemp  = parseFloat($('#temperature').val()),
        resultantTemperature=null,
        inputDegText=degreeSymbol;

        console.debug(inputTemp, type);

      if(isNaN(inputTemp)) {
        clearOut();
        return;
      }

      if(type === 'C'){
        resultantTemperature = (inputTemp - 32) / calculationConstant;
        resultantTemperature = resultantTemperature.toFixed(2) + degreeSymbol + 'C';
        inputDegText += 'F';
      }

      if(type==='F'){
       resultantTemperature = (inputTemp * calculationConstant ) + 32;
       resultantTemperature = resultantTemperature.toFixed(2) + degreeSymbol + 'F';
       inputDegText += 'C';
      }

      $('.inputTemp').html(inputTemp + inputDegText);
      $('.convertedTemp').html(resultantTemperature);
      $('#result').show();


      return false;
    }

    // util
    function togglePanel(opt){
      $('.templOption-type').html(degreeSymbol + opt);
    }

  });
})(window,document,jQuery);