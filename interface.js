$(document).ready(function() {
  var thermo = new Thermo();
  updateTemperature();

  function updateTemperature() {
    $('#temp').text(thermo.degrees);
    $('#temp').attr('class', thermo.energyUse());
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  });


  $('#temp-up').click(function() {
    thermo.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermo.down();
    updateTemperature();
  });

  $('#temp-reset').on('click', function() {
    thermo.reset();
    updateTemperature();
  });

  $('#powersave-on').on('click', function() {
    thermo.turnOnPowerSave();
    $('#ps-status').text('ON')
    updateTemperature();
  });

  $('#powersave-off').on('click', function() {
    thermo.turnOffPowerSave();
    $('#ps-status').text('OFF')
    updateTemperature();
  });

});
