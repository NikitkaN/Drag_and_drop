let model = document.querySelector(".model");
let outerwear = document.querySelector(".outerwear");
let underwear = document.querySelector(".underwear");
let shoes = document.querySelector(".shoes");
let edit_yell = document.querySelector(".edit_yell");
// let flag = true;
let cells = {
    outer: "empty",
    under: "empty",
    shoe: "empty"
};
// console.log(model.getAttribute('src'));

document.getElementById('nav').onmouseover= function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s=target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event) {
    var target = event.target;
    // console.log(event.target);
    if (target.className!='menu-item' && target.className!='submenu') {
        closeMenu();
    }
}
function closeMenu(){
    var menu=document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
function ClickCh(num) {
    let clothes = document.querySelector(num);
    if (clothes.style.backgroundColor != "lightgreen") {
        clothes.style.backgroundColor = "lightgreen";
    } else {
        clothes.style.backgroundColor = "white";
    }
    Clothe(num);
    console.log(num);
}
function Clothe(num) {
    switch(true) {
        case (num == '.clothes1' && cells.outer == 'empty'):
            cells.outer = 'yellow';
            break;
        case (num == '.clothes1' && cells.outer == 'yellow'):
            cells.outer = 'empty';
            break;
        case (num == '.clothes2' && cells.under == 'empty'):
            cells.under = 'true';
            break;
        case (num == '.clothes2' && cells.under == 'true'):
            cells.under = 'empty';
            break;
        case (num == '.clothes3' && cells.outer == 'empty'):
            cells.outer = 'red';
            break;
        case (num == '.clothes3' && cells.outer == 'red'):
            cells.outer = 'empty';
            break;
        case (num == '.clothes1' && cells.outer == 'red'):
            cells.outer = 'yellow';
            break;
        case (num == '.clothes3' && cells.outer == 'yellow'):
            cells.outer = 'red';
            break;
        case (num == '.edit_yell1' && cells.outer == 'yellow'):
            cells.outer = 'yell_1';
            break;
        case (num == '.edit_yell1' && cells.outer == 'red'):
            cells.outer = 'yell_1';
            break;
        case (num == '.edit_yell1' && cells.outer == 'empty'):
            cells.outer = 'yell_1';
            break;
        case (num == '.edit_yell2' && cells.outer == 'yellow'):
            cells.outer = 'yell_2';
            break;
        case (num == '.edit_yell2' && cells.outer == 'red'):
            cells.outer = 'yell_2';
            break;
        case (num == '.edit_yell2' && cells.outer == 'empty'):
            cells.outer = 'yell_2';
            break;
        default:
            alert( "Нет таких значений" );
    }
    console.log(cells);
    switch(true) {
        case (cells.outer == 'empty' && cells.under == 'empty'):
            model.src = 'img/model_men.jpg';
            break;
        case (cells.outer == 'yellow' && cells.under == 'empty'):
            model.src = 'img/yellow.jpg';
            break;
        case (cells.outer == 'red' && cells.under == 'empty'):
            model.src = 'img/red_man.jpg';
            break;
        case (cells.outer == 'empty' && cells.under == 'true'):
            model.src = 'img/short.jpg';
            break;
        case (cells.outer == 'yellow' && cells.under == 'true'):
            model.src = 'img/muzhik_1__1.jpg';
            break;
        case (cells.outer == 'red' && cells.under == 'true'):
            model.src = 'img/muzhik_1.jpg';
            break;
        case (cells.outer == 'yell_1' && cells.under == 'empty'):
            model.src = 'img/yell_left.jpg';
            break;
        case (cells.outer == 'yell_2' && cells.under == 'empty'):
            model.src = 'img/yell_right.jpg';
            break;
        case (cells.outer == 'yell_1' && cells.under == 'true'):
            model.src = 'img/yell_left.jpg';
            break;
        case (cells.outer == 'yell_2' && cells.under == 'true'):
            model.src = 'img/yell_right.jpg';
            break;
        case (cells.outer == 'red_left' && cells.under == 'empty'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'red_right' && cells.under == 'empty'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'red_left' && cells.under == 'true'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'red_right' && cells.under == 'true'):
            model.src = 'img/.jpg';
            break;
        default:
            alert( "Нет таких значений" );
    }
}
function Nav(nav) {
    switch(nav) {
        case '.outerwear':
            outerwear.classList.add('visible');
            underwear.classList.remove('visible');
            shoes.classList.remove('visible');
            edit_yell.classList.remove('visible');
            break;
        case '.underwear':
            outerwear.classList.remove('visible');
            underwear.classList.add('visible');
            shoes.classList.remove('visible');
            edit_yell.classList.remove('visible');
            break;
        case '.shoes':
            outerwear.classList.remove('visible');
            underwear.classList.remove('visible');
            shoes.classList.add('visible');
            edit_yell.classList.remove('visible');
            break;
        case '.edit':
            outerwear.classList.remove('visible');
            underwear.classList.remove('visible');
            shoes.classList.remove('visible');
            edit_yell.classList.add('visible');
        default:
            alert( "Нет таких значений" );
    }
}
function Edit(value) {

}