
const oneRadio = document.getElementById("pair-one");
const twoRadio = document.getElementById("pair-two");
const threeRadio = document.getElementById("three");

oneRadio.addEventListener("click", () => ChangeColorone("#f4fbf9", "0.9px solid #007f61"));
twoRadio.addEventListener("click", () => ChangeColortwo("#f4fbf9", "0.9px solid #007f61"));
threeRadio.addEventListener("click", () => ChangeColorthree("#f4fbf9", "0.9px solid #007f61"));

function ChangeColorone(color,border) {

    // Set the background color of the body element
    document.getElementById('one').style.backgroundColor = color;
    document.getElementById('one').style.border = border;
    document.getElementById('two').style.backgroundColor ="";
    document.getElementById('two').style.border = "";
    document.getElementById('three').style.backgroundColor = "";
    document.getElementById('three').style.border = "";
}
function ChangeColortwo(color,border) {
    // Set the background color of the body element
    document.getElementById('two').style.backgroundColor =color;
    document.getElementById('two').style.border = border;
    document.getElementById('one').style.backgroundColor = "";
    document.getElementById('one').style.border = "";
    document.getElementById('three').style.backgroundColor = "";
    document.getElementById('three').style.border = "";
}
function ChangeColorthree(color,border) {
    // Set the background color of the body element
    document.getElementById('three').style.backgroundColor = color;
    document.getElementById('three').style.border = border;
    document.getElementById('one').style.backgroundColor = "";
    document.getElementById('one').style.border = "";
    document.getElementById('two').style.backgroundColor ="";
    document.getElementById('two').style.border = "";

}

