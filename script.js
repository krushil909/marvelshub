
function myFunction() {
    alert("sorry! search invalid ");
}

//Make the DIV element draggagle:
$(document).ready(function () {

    $("#Sky9Students").draggable();

    // $("#Sky9").droppable({
    //     accept: "#Sky9Students",
    //     drop: function (event, ui) {
    //         $(this).addClass("MyCls").find("p").html("perfect...");

    //     }
    // });

});




//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function bakaaa() {
    window.open("https://bakaaa.redskull.me/");
}



function download() {
    window.open("https://drive.google.com/u/0/uc?id=1if0nXOM_RGSiVCTpIavmRwTc7LQhb9C-&export=download");
}
function download2() {
    window.open("https://drive.google.com/u/0/uc?id=1lp437BuIgkbyS45N84V5u9hpKDbZ196d&export=download");
} function download3() {
    window.open("https://drive.google.com/u/0/uc?id=14Wyc5qRP4czi9rchyuM_b6DKnTn42DDM&export=download");
} function download4() {
    window.open("https://drive.google.com/u/0/uc?id=1yNCEeXJz_Olr8lxc4KJKuIVKadiPMgd5&export=download");
}