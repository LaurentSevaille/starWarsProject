if(sessionStorage.username != null)
{
    currentUser = getUser(sessionStorage.username);
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
                        existUser=response;
                    }
                });

            if((existAddress=="OK" && existUser=="OK")
            || (currentUser["address"] == values["email"] && existUser=="OK")
            || (currentUser["username"] == values["username"] && existAddress=="OK")
            || (currentUser["address"] == values["email"] && currentUser["username"] == values["username"])
            && validateEmail($("#email").val()))
            {

                $('#spanuser1').css("color", "");
                $('#spanuser2').css("color", "");

                $.ajax({
                    type: "PUT",
                    headers: { "Content-Type": "application/json" },
                    url: "http://localhost:8080/API/updateUser/"+ currentUser["username"] + "/" + values["username"] + "/" + values["password"] + "/" + values["email"],
                    data: JSON.stringify(values),
                    success: function (response) {
                        $('#registerMenu').hide();
                        alert("API got : "+response);
    
                        if(response == "OK")
                        {
                            sessionStorage.username = values["username"];
                            $('#result').html
                            (
                                "<p>Success ! You will be redirected to the main page</p>"
                            );
        
                            setTimeout(function()
                            {
                                window.location.href = "index.html";
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

                if(!validateEmail($("#email").val()))
                {
                    $('#spanemail2').css("color", "red");
                    $('#spanemail2').html("Email is not valid");
                }
        
                else
                {
                    $('#spanemail2').css("color", "");
                    $('#spanemail2').html("");
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

    $("#email").keyup(function()
    {
        if(!validateEmail($("#email").val()))
        {
            $('#spanemail2').css("color", "red");
            $('#spanemail2').html("Email is not valid");
        }

        else
        {
            $('#spanemail2').css("color", "");
            $('#spanemail2').html("");
        }
        
    })



}

else
{
    $('#registerMenu').hide();
    $('#result').html
    (
        "<p>You are not logged in. Redirecting to main page.</p>"
    );

    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

const validateEmail = (email) => 
{
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

$(document).on('keypress',function(e) {
    if(e.key == "Enter") {
        $('#POSTBUTTON').click();
    }
});


//Get author
function getUser(user) {
    let x;
    $.ajax({
        type: "POST",
        headers: { "Content-Type": "application/json" },
        url: "http://localhost:8080/API/getUser",
        async:false,
        data: user,
        success: function (response) {
            x=response
            $("#username").val(x.username);
            $("#email").val(x.address);
            $("#password").val(x.password);
            $("#confirmpassword").val(x.password);
        }
    });
    return x;
}