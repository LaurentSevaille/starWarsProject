
var articleName = $("title").text();
//console.log(JSON.stringify(articleName));


$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewArticle/" + articleName,
    success: (reponse) => {
        $("#corpsDeArticle").html(reponse);
    }
});

$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewComment/" + articleName,
    success: (reponse) => {
        commentLength = reponse.length;
        console.log(JSON.stringify(reponse));
        console.log(JSON.stringify(commentLength));
        for (let i = 0; i <= commentLength-1; i++) {
            auteur = reponse[i].author;
            comment = reponse[i].content;
            $("#commentSection").append("<div id='commentAuthor" + i + "'></div>");
            $("#commentAuthor" + i).html(auteur);
            $("#commentAuthor" + i).append("<div id='commentContent" + i + "'></div>");
            $("#commentContent" + i).html(comment);
        }
    }
});


$("#commentValidationButton").click(function () {
    var valeurs = {
        author: $("#authorName").val(),
        content: $("#comContent").val()
    };
    console.log(JSON.stringify(valeurs));


    $.ajax({
        type: "POST",
        headers: {"Content-Type": "application/json"},
        url: "http://localhost:8080/API/addComment",
        data: JSON.stringify(valeurs),
        success: function (resultat) {
            $('#output').html(JSON.stringify(resultat));
            //console.log(JSON.stringify(resultat));
        }
    });
});
$("#validationButton").click(function () {
    var valeurs = {
        author: $("#authorName").val(),
        content: $("#comContent").val()
    };
    console.log(JSON.stringify(valeurs));


    $.ajax({
        type: "POST",
        headers: {"Content-Type": "application/json"},
        url: "http://localhost:8080/API/addComment/" + articleName,
        data: JSON.stringify(valeurs),
        success: function (reponse) {
            $('#output').html(JSON.stringify(reponse));
            //console.log(JSON.stringify(resultat));
        }
    });
});