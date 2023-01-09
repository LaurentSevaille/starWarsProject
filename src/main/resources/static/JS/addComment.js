
var articleName = $("title").text();
//console.log(JSON.stringify(articleName));


$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewArticle/" + articleName,
    success: (reponse) => {
        //console.log(JSON.stringify(reponse));
        $("#corpsDeArticle").html(reponse);
    }
});

$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewComment/" + articleName,
    success: (reponse) => {
        console.log(JSON.stringify(reponse));
        $("#outpout").html(reponse);
    }
});



$("#validationButton").click(function () {
    var valeurs = {
        author: $("#authorName").val(),
        content: $("#comContent").val()
    };
    console.log(JSON.stringify(valeurs));


    $.ajax({
        type: "POST",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/addComment/" + articleName,
        data: JSON.stringify(valeurs),
        success: function (resultat) {
            //$('#output').html(JSON.stringify(resultat));
            console.log(JSON.stringify(resultat));
        }
    });
});