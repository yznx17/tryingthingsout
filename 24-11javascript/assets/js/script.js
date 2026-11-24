document.oncontextmenu = function () {
    return false;
};


window.oncontextmenu = function (menu) {
    document.querySelector(".menu").style.top = menu.clientY + "px";
    document.querySelector(".menu").style.left = menu.clientX + "px";
    document.querySelector(".menu").style.display = "grid";

}

window.onclick = function (hidemenu) {
    document.querySelector(".menu").style.display = "none";

}

document.oncopy = function () {
    // return false; (THIS DISABLES THE ENTIRE COPYING)
    let selectedText = window.getSelection().toString();
    navigator.clipboard.writeText("HAHA DID YOU ACTUALY THINK YOU CAN COPY????   You tried to copy  " + selectedText.length + " Charecters BTW");

}