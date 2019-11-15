$(document).ready(function() {
  var thermo = new Thermo();
  updateTemperature();

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
    updateTemperature();
  });

  $('#powersave-off').on('click', function() {
    thermo.turnOffPowerSave();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temp').text(thermo.degrees);
  };

});
