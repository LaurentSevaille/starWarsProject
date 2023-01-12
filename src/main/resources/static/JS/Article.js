//let link = "//raw.githubusercontent.com/LaurentSevaille/starWarsProject/master/src/main/resources/static/";

//get the parameters of th URL
const urlParams = new URLSearchParams(window.location.search);
console.log("url parms : " + urlParams);

//Get the value of the paramettre "page"
const articleName = urlParams.get("page");
console.log("articleName : " + articleName);

//ARTICLE IMPORTS

//set the title of the page with the page name
$("title").html(articleName);


$("head").append(
    "<link rel='stylesheet' href='./CSS//bootstrap/bootstrap.min.css' />\
    <link rel='stylesheet' href='./CSS/article_LS.css' />\
    <link rel='icon' type='image/png' href='img/Star-Wars-Logo.png'/>"
    );
$("#modifyArticle").html(
    "<a href='./modifyArticle.html?page=" + articleName + "'>Modifier l'article</a>"
);

$("#header").load("header.html");
$("#footer").load("footer.html");


//Get the article content from the database and insert it in the artileCorps balise
$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewArticle/" + articleName,
    success: (reponse) => {
        $("#article").html(reponse);
    }
});

$("#commentsForm").load("comment_form.html");

viewComment();





//FUNCTIONS

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


//Get author et content values from the commetns form and save it int the database.
//A link between the article and the comment is made during the PostMapping.
function commentValidation() {
    let now = moment().format('YYYY/MM/DD HH:mm:ss');
    //let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    //let now = new Date()
        var inputValues = {
        author: sessionStorage.username,
        content: $("#comContent").val(),
        commentDate: now
        };
    console.log(JSON.stringify(inputValues));
    $.ajax({
        type: "POST",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/addComment/" + articleName,
        data: JSON.stringify(inputValues),
        success: function (reponse) {
            $("#comContent").val("");
            viewComment();
            alert(reponse);
        }
    });
}


//Get the comment in the database based on article name and add them in the comments section
function viewComment(){
$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/viewComment/" + articleName,
    success: (reponse) => {
//        console.log(JSON.stringify(reponse));
//        console.log(JSON.stringify(commentLength));
        for (let i = 0; i <= reponse.length-1; i++) {
            $("#commentList").append("<dt id='commentAuthor" + i + "'></dt>");
            $("#commentAuthor" + i).html(reponse[i].author + " - published on " + reponse[i].commentDate);
            $("#commentList").append("<dd id='commentContent" + i + "'></dd>");
            $("#commentContent" + i).html(reponse[i].content);
        }
    }
});
}

/*
if (sessionStorage.permission == null || sessionStorage.permission>2) {
    $("#noPermission").show();
    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

else {
    $("#noPermission").hide();
}
*/