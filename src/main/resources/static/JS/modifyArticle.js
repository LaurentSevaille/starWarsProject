//get the parameters of th URL
const urlParams = new URLSearchParams(window.location.search);
console.log("url parms : " + urlParams);

//Get the value of the paramettre 'page'
const articleName = urlParams.get('page');
console.log("articleName : " + articleName);

$('title').html(articleName);
$('#name').val(articleName);

//Get the article content from the database and insert it in the textarea content balise
$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewArticle/" + articleName,
    success: (reponse) => {
        $("#content").text(reponse);
    }
});

$('#validationButton').click(function () {
    let valeurs = {
        name: $("#name").val(),
        content: $("#content").val()
    };
    console.log(JSON.stringify(valeurs));

    $.ajax({
        type: "PUT",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/putArticle/" + articleName,
        data: JSON.stringify(valeurs),
        success: function (reponse) {
            window.location.href = "Article.html?page=" + valeurs.name;
            alert(reponse);
        }
    });
});