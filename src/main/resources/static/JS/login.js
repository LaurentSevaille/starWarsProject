if(sessionStorage.username == null)
{
    $('#POSTBUTTON').click(function()
    {
        let values = {username: $("#username").val(), password: $("#password").val()};
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
                        $('#loginMenu').hide();
                        sessionStorage.username = response["username"];
                        sessionStorage.permission = response["permission"];
                        $('#result').html
                        (
                            "<p>username : "+sessionStorage.username+"</p>" +
                            "<p>password : "+response["password"]+"</p>" +
                            "<p>permission : "+sessionStorage.permission+"</p>" +
                            "<p>Success ! You will be redirected to the main page</p>"
                        );

                        setTimeout(function()
                        {
                            window.location.href = "index.html";
                        },3000);
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
}

else
{
    $('#loginMenu').hide();
    $('#result').html
    (
        "<p>You are already connected. Redirecting to main page.</p>"
    );

    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

