$('#validationButton').click(function () {
    let valeurs = {
        Id_article: $("#ID_Article").val(),
        balise: $("#balise").val(),
        content: $("#content").val()
    };
    console.log(JSON.stringify(valeurs));

    $.ajax({
        type: "POST",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/addArticleContent",
        data: JSON.stringify(valeurs),
        success: function (resultat) {
            $('#output').html(JSON.stringify(resultat));
        }
    });
});