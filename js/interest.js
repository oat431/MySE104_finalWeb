function loadMedia(){
    let file = localStorage.getItem("InterTitle");
    fetch('/js/'+ file +'.json').then((res)=>{
        return res.json();
    }).then((json)=>{
        document.getElementById('Interest_Topic').innerHTML = "<img src = "+json[6].Pic+" alt=logo width=45rem height=45rem>" + `&#32;` +json[0].title;
        document.getElementById('topic1').src = json[0].Pic;
        document.getElementById('description1').innerHTML = "<p class=specialFrame>" + json[0].Description + "<p>";
        document.getElementById('topic2').src = json[1].Pic;
        document.getElementById('topic3').src = json[1].Pic;
        document.getElementById('description2').innerHTML = "<p class=specialFrame>" + json[1].Description + "<p>";
        for(let i=2;i<6;i++){
            document.getElementById('Picture'+(i-1)).src = json[i].Pic;
            document.getElementById('description'+(i+1)).innerHTML = json[i].Description;
        }
    });
}

function blue(elem){
    elem.className = "btn btn-primary";
}

function yellow(elem){
    elem.className = "btn btn-warning";
}

function green(elem){
    elem.className = "btn btn-success";
}
