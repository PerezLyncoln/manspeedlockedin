function change_section() {
    document.getElementsByClassName("image_1")[0].src = "images/ishowspeed-ishowspeed-fortnite.gif";
    document.getElementsByClassName("target_1")[0].innerText = "Man Speed Locked In!";

    document.getElementById("heading").style.fontFamily = "Comic Sans MS, sans-serif";
    document.getElementById("heading").style.color = "#FF0000";
    document.getElementById("heading").style.fontSize = "100px";
}

function page_reload() {
    location.reload();
}

function disappear() {
    document.getElementsByClassName("disappear")[0].style.opacity = "0";
}

function appear() {
    document.getElementsByClassName("disappear")[0].style.opacity = "1";
}