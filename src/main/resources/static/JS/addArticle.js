$('#validationButton').click(function () {
    let valeurs = {
        name: $("#name").val(),
        content: $("#content").val()
    };
    console.log(JSON.stringify(valeurs));

    $.ajax({
        type: "POST",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/addArticle",
        data: JSON.stringify(valeurs),
        success: function (resultat) {
            $('#output').html(JSON.stringify(resultat));
        }
    });
});