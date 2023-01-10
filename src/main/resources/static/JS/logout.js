if(sessionStorage.username != null)
{
    sessionStorage.clear()
    $('#result').html
    (
        "<p>You disconnected. Redirecting to main page.</p>"
    );
    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

else
{
    $('#logoutMenu').hide();
    $('#result').html
    (
        "<p>You are not connected. Redirecting to main page.</p>"
    );
    setTimeout(function()
    {
        window.location.href = "index.html";
    },3000);
}

