$(document).ready(function () {
    $.ajax({
      url: 'https://swapi.dev/api/planets/?format=json',
      dataType: 'json',
      success: function (data) {
        console.log(data.results)
        for (var h = 0; h < 60; h++) {
          $("#table3").append("<tr><td>" + data.results[h].name + "</td><td>" + data.results[h].rotation_period + "</td><td>" + 
          data.results[h].diameter + "</td><td>" +
          data.results[h].gravity + "</td><td>" + data.results[h].terrain + "</td></tr>")
        }
      }
  
    })
  })