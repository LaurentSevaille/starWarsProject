if (sessionStorage.permission == null || sessionStorage.permission > 2) {
    $("#noPermission").show();
    $("#authorised").hide();
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000);
}

else {
    $("#authorised").show();
    $("#noPermission").hide();
    $("#validationButton").prop("disabled", true);

    $("#name").change(function () {
        //console.log(JSON.stringify($("#name").val()));
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/API/exactresearch/" + $("#name").val(),
            success: (reponse) => {
                //console.log(JSON.stringify("reponse : "+reponse));
                if (reponse == $("#name").val()) {
                    $("#output").html("Article already exist");
                    $("#validationButton").prop("disabled", true);
                } else {
                    $("#validationButton").prop("disabled", false);
                }
            }
        });
    })

    $('#validationButton').click(function () {
        let valeurs = {
            name: $("#name").val(),
            content: $("#content").val()
        };
        //console.log(JSON.stringify(valeurs));

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
}


