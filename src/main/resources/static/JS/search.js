
const urlParams = new URLSearchParams(window.location.search);
console.log("url parms : " + urlParams);

//Get the value of the paramettre 'page'
const researchArticleName = urlParams.get('research');
console.log("researchName : " + researchArticleName);


$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/research/" + researchArticleName,
    success: (reponse) => {
        console.log(reponse),
        console.log("name : " + reponse[0].name),
        $("#reponse").html("<a href=Article.html?page=" + reponse[0].name + ">"+
            reponse[0].name + "</a>");
    }
});