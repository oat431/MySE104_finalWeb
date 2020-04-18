function turnGreen(elem){
    elem.className = "btn btn-success";

}

function turnBlue(elem){
    elem.className = "btn btn-primary";
}


function getValue(elem){
    localStorage.setItem("InterTitle",elem.value);
}

//Fruit pic
document.getElementById('fruit').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preFruit.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreFruit.jpg)';
});

document.getElementById('fruit').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});

document.getElementById('Fruit').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preFruit.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreFruit.jpg)';
});

document.getElementById('Fruit').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});

//food pic
document.getElementById('food').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preFood.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreFood.jpg)';
});

document.getElementById('food').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});

document.getElementById('Food').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preFood.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreFood.jpg)';
});

document.getElementById('Food').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});

//song
document.getElementById('song').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preSong.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreSong.jpg)';
});

document.getElementById('song').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});

//toy
document.getElementById('toy').addEventListener('mouseover',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/preToy.jpg)';
    b.style.backgroundImage = 'url(../assets/image/PreToy.jpg)';
});

document.getElementById('toy').addEventListener('mouseout',function(){
    let a = document.getElementById('preWidth');
    let b = document.getElementById('PrePic');
    a.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
    b.style.backgroundImage = 'url(../assets/image/Preference.jpg)';
});
function start(){
    let a = document.getElementById('interestWidth');
    let b = document.getElementById('InterestPic');
    setInterval(
        function(){
            setTimeout(function(){
                a.style.backgroundImage = 'url(../assets/image/InterPro.jpg)';
                b.style.backgroundImage = 'url(../assets/image/InterPro.jpg)';
            },2000);
            setTimeout(function(){
                a.style.backgroundImage = 'url(../assets/image/InterOri.jpg)';
                b.style.backgroundImage = 'url(../assets/image/InterOri.jpg)';
            },4000);
            setTimeout(function(){
                a.style.backgroundImage = 'url(../assets/image/Interdys.jpg)';
                b.style.backgroundImage = 'url(../assets/image/Interdys.jpg)';
            },6000);
            setTimeout(function(){
                a.style.backgroundImage = 'url(../assets/image/InterRubik.jpg)';
                b.style.backgroundImage = 'url(../assets/image/InterRubik.jpg)';
            },8000);
            setTimeout(function(){
                a.style.backgroundImage = 'url(../assets/image/InterPhoto.jpg)';
                b.style.backgroundImage = 'url(../assets/image/InterPhoto.jpg)';
            },10000);
        },12000);
}