function validate()
{
    var loginname=document.getElementById("loginname").value;
    var password=document.getElementById("password").value;
    if(loginname=="brit" && password=="sovic")
    {
        location.href = "www.google.com";
    }
else
    {
        alert("Access Denied");
    }
}

