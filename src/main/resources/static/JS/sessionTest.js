$('#POSTBUTTON').click(function()
{
    let values = {username: $("#username").val(), password: $("#password").val()};
    console.log(JSON.stringify(values));
    $.ajax(
        {
            type: "POST",
            headers: {"Content-Type": "application/json"},
            url: "http://localhost:8080/API/getSessionValues/"+ values["username"] + "/" + values["password"],
            data: JSON.stringify(values),
            success: (response)=>
            {
                if(response["password"] == values["password"])
                {
                    sessionStorage.username = response["username"];
                    sessionStorage.permission = response["permission"];
                    $('#result').html
                    (
                        "<p>username : "+sessionStorage.username+"</p>" +
                        "<p>password : "+response["password"]+"</p>" +
                        "<p>permission : "+sessionStorage.permission+"</p>"
                    );
                }

                else
                {
                    $('#result').html
                    (
                        "<p>wrong password, try again</p>"
                    );
                }
            
            }
        });
})
