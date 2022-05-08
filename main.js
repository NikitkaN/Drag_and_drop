let model = document.querySelector(".model");
let outerwear = document.querySelector(".outerwear");
let underwear = document.querySelector(".underwear");
let shoes = document.querySelector(".shoes");
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
        case (cells.outer == 'yellow_left' && cells.under == 'empty'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'yellow_right' && cells.under == 'empty'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'yellow_left' && cells.under == 'true'):
            model.src = 'img/.jpg';
            break;
        case (cells.outer == 'yellow_right' && cells.under == 'true'):
            model.src = 'img/.jpg';
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
            break;
        case '.underwear':
            outerwear.classList.remove('visible');
            underwear.classList.add('visible');
            shoes.classList.remove('visible');
            break;
        case '.shoes':
            outerwear.classList.remove('visible');
            underwear.classList.remove('visible');
            shoes.classList.add('visible');
            break;
        default:
            alert( "Нет таких значений" );
    }
}