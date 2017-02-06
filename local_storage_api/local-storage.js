function testLocalStorage()
{
    if (typeof(Storage) !== "undefined")
    {
        // Code for localStorage/sessionStorage.
        // Store
        localStorage.setItem("name", "Brandon");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } 
    else 
    {
    // Sorry! No Web Storage support..
    }
    return;
}
