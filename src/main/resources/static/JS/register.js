if(sessionStorage.username == null)
{
    $('#POSTBUTTON').click(function()
    {
        let values = {username: $("#username").val(), password: $("#password").val(), confirmpassword: $("#confirmpassword").val(), email: $("#email").val()};
        let existAddress;
        let existUser;

        if(values["password"] == values["confirmpassword"])
        {
            $('#spanconfirm1').css("color", "");
            $('#spanconfirm2').css("color", "");

            $.ajax(
                {
                type: "POST",
                headers: {"Content-Type": "application/json"},
                url: "http://localhost:8080/API/existAddress/"+ values["email"],
                data: JSON.stringify(values),
                async: false,
                success: (response)=>
                    {
                        console.log(response);
                        existAddress=response;
                    }
                });

            $.ajax(
                {
                type: "POST",
                headers: {"Content-Type": "application/json"},
                url: "http://localhost:8080/API/existUser/"+ values["username"],
                data: JSON.stringify(values),
                async: false,
                success: (response)=>
                    {
                        console.log(response);
                        existUser=response;
                    }
                });
    

            console.log(existAddress);
            console.log(existUser);

            if(existAddress=="OK" && existUser=="OK")
            {

                $('#spanuser1').css("color", "");
                $('#spanuser2').css("color", "");

                $.ajax(
                {
                type: "POST",
                headers: {"Content-Type": "application/json"},
                url: "http://localhost:8080/API/registerUser/"+ values["username"] + "/" + values["password"] + "/" + values["email"],
                data: JSON.stringify(values),
                success: (response)=>
                    {
                        $('#registerMenu').hide();
                        alert("API got : "+response);
                        console.log(response);
    
                        if(response == "OK")
                        {
                            $('#result').html
                            (
                                "<p>Success ! You will be redirected to the login page</p>"
                            );
        
                            setTimeout(function()
                            {
                                window.location.href = "login.html";
                            },3000);
                        }
    
                    }
                });
            }

            else
            {
                if(existAddress!="OK")
                {
                    $('#spanemail1').css("color", "red");
                    $('#spanemail2').css("color", "red");
                    $('#spanemail2').html("Email already in use");
                }

                else
                {
                    $('#spanemail1').css("color", "");
                    $('#spanemail2').css("color", "");
                    $('#spanemail2').html("");
                }

                if(existUser!="OK")
                {
                    $('#spanuser1').css("color", "red");
                    $('#spanuser2').css("color", "red");
                    $('#spanuser2').html("User already exists");
                }

                else
                {
                    $('#spanuser1').css("color", "");
                    $('#spanuser2').css("color", "");
                    $('#spanuser2').html("");
                }
            }

        }

        else
        {
            $('#spanconfirm1').css("color", "red");
            $('#spanconfirm2').css("color", "red");
            $('#spanconfirm2').html("Password do not match.");
            
        }
    })  
}

else
{
    $('#registerMenu').hide();
    $('#result').html
    (
        "<p>You are already connected. Redirecting to main page.</p>"
    );

    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

