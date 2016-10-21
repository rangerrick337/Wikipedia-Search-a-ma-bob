$(document).ready(function () {

  $("form").on("submit", function(event) {

    event.preventDefault();
    var query = $( this ).serialize().slice(2);
    var queryLink = "https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&format=json&explaintext=&srsearch="+query;
    // console.log(queryLink);
    $(".list").html("");
    $.getJSON(queryLink, function(data) {
      console.log(data);
      for (i=0; i<data.query.search.length; i++) {
        var result = data.query.search[i];
        // console.log(result);
        $(".list").append("<li><a href= 'http://en.wikipedia.org/wiki/"+result.title+"'><h3>"+result.title+"</h3><p>"+result.snippet+"</li></a>");
      };
    });
});


});
