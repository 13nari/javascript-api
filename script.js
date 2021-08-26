$(document).ready(function () {
  $.ajax({
    url: 'https://swapi.dev/api/starships/?format=json',
    dataType: 'json',
    success: function (data) {
      console.log(data.results)
      for (var i = 0; i < 10; i++) {
        $("table").append("<tr><td>" + data.results[i].name + "</td><td>" + data.results[i].model + "</td><td>" + data.results[i].manufacturer + "</td><td>" +
          data.results[i].cost_in_credits + "</td><td>" + data.results[i].length + "</td></tr>")
      }
    }

  })
})