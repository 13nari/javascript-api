$(document).ready(function () {
    $.ajax({
      url: 'https://swapi.dev/api/people/?format=json',
      dataType: 'json',
      success: function (data) {
        console.log(data.results)
        for (var j = 0; j < 82; j++) {
          $("#table2").append("<tr><td>" + data.results[j].name + "</td><td>" + data.results[j].height + "</td><td>" + 
          data.results[j].hair_color + "</td><td>" +
          data.results[j].skin_color + "</td><td>" + data.results[j].eye_color + "</td></tr>")
        }
      }
  
    })
  })