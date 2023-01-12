
const urlParams = new URLSearchParams(window.location.search);
console.log("url parms : " + urlParams);

//Get the value of the paramettre 'page'
const researchArticleName = urlParams.get('research');
console.log("researchName : " + researchArticleName);


$.ajax({
    type: "GET",
    url: "http://localhost:8080/API/research/" + researchArticleName,
    success: (reponse) => {
        console.log(reponse);
        console.log("name : " + reponse[0].name);

        for (let i = 0; i <= reponse.length - 1; i++) {
            nomPage = reponse[i].name;
            nomPage = nomPage.replace(" ", "%20");
            console.log(nomPage);
            $("#reponse").append("<a href=Article.html?page=" + nomPage + "><br>" +
                reponse[i].name + "</a>");
        }
    }
});