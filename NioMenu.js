// ==UserScript==
// @name        NioMenu
// @namespace   BrodyPrestwich
// @description a menu system to navigate nio api.
// @include     http://192.168.1.1*
// @version     1
// @grant       none
// ==/UserScript==


var mainButtons = ["actions","auth","inputs","outputs","settings","system","tiles","tracks","zones"];
var actions = ["actions","active-tracking","contact"];

function changePage(id,link){

    //window.location.href = link;
    id.onclick(document.getElementById(id).style.backgroundColor = "red");


}

function createMenuBar(){
    var menuBar = document.createElement("div");
    menuBar.setAttribute("id" , "menuBar");
    menuBar.style.width = "200px";
    menuBar.style.height = "900px";
    menuBar.style.backgroundColor = "transparent";
    menuBar.style.float = "right";
    menuBar.style.display = "inline-block";
    menuBar.style.position = "fixed";
    menuBar.style.left = "89%";
    menuBar.style.top = "1%";
    document.body.appendChild(menuBar);


}

function createButton(buttonName) {

    link = "http://youtube.com";
    var button = document.createElement("button");
    button.setAttribute("id",buttonName);
    button.style.backgroundColor = "red";
    button.style.width = "200px";
    button.style.height = "60px";
    button.innerHTML = buttonName;
    button.style.display = "block";
    button.onclick = function () {
        window.location.href = link;
    };
    document.getElementById("menuBar").appendChild(button);

}

function createHiddenButton(buttonName) {

    link = "http://youtube.com";
    var button = document.createElement("button");
    button.setAttribute("id",buttonName);
    button.style.backgroundColor = "blue";
    button.style.width = "200px";
    button.style.height = "60px";
    button.innerHTML = buttonName;
    button.style.display = "block";
    button.onclick = function () {
        window.location.href = link;
    };
    document.getElementById("menuBar").appendChild(button);

}

function populateMenuBarWithArray() {
    for(var i = 0; i <= mainButtons.length; i++){
        createButton(mainButtons[i]);

        switch (mainButtons[i]){

            case "actions":
                for(var x = 0; x<=actions.length; x++){
                    createHiddenButton(actions[x]);
                    break;
                }
            default:
                break;


        }

    }

}



createMenuBar();
populateMenuBarWithArray(mainButtons);

//document.body.appendChild(createButton("testing"));
//document.body.appendChild(createButton("testing2"));
