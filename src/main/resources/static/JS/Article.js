var articleName = $("title").text();
//console.log(JSON.stringify(articleName));



function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      $("#button_title").html("Hide");
    } else {
      x.style.display = "none";
      $("#button_title").html("Show");
    }
}

//Get the article content from the database and insert it in the artileCorps balise
$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewArticle/" + articleName,
    success: (reponse) => {
        $("#articleCorps").html(reponse);
    }
});

//Get the comment in the database based on article name and add them in the comments section
$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewComment/" + articleName,
    success: (reponse) => {
//        console.log(JSON.stringify(reponse));
//        console.log(JSON.stringify(commentLength));
        for (let i = 0; i <= reponse.length-1; i++) {
            $("#commentList").append("<dt id='commentAuthor" + i + "'></dt>");
            $("#commentAuthor" + i).html(reponse[i].author);
            $("#commentList").append("<dd id='commentContent" + i + "'></dd>");
            $("#commentContent" + i).html(reponse[i].content);
        }
    }
});

//Get author et content values from the commetns form and save it int the database.
//A link between the article and the comment is made during the PostMapping.
$("#validationButton").click(function () {
    var inputValues = {
        author: $("#authorName").val(),
        content: $("#comContent").val()
    };
    console.log(JSON.stringify(inputValues));

    $.ajax({
        type: "POST",
        headers: {"Content-Type": "application/json"},
        url: "http://localhost:8080/API/addComment/" + articleName,
        data: JSON.stringify(inputValues),
        success: function (reponse) {
            //$('#output').html(JSON.stringify(reponse));
            //console.log(JSON.stringify(reponse));
            alert(reponse);
        }
    });
});