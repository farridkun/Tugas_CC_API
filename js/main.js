document.querySelector(".js-cari").addEventListener('click',function(){
    var input = document.querySelector(".js-uinput").nodeValue;
    var uinput = getUserInput();
    cariGIFS(uinput);
});

document.querySelector(".js-uinput").addEventListener('keyup',function(e){
    if(e.which == 13) {
        var uinput = getUserInput();
        cariGIFS(uinput);
    }
});

function getUserInput() {
    var value = document.querySelector(".js-uinput").value;

    return value;
}

function cariGIFS(cari) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=4AoLSGT5gtO7pCcCVJSfCujgbm6Udzhz&q=" + cari;

    var PanggilGiphy = new XMLHttpRequest();
    PanggilGiphy.open('GET', url);
    PanggilGiphy.send();

    PanggilGiphy.addEventListener('load',function(data){
        var data = data.target.response;
        pushToDOM(data);
        console.log(data);
    });
}

function pushToDOM(response) {
    var response = JSON.parse(response);

    var gambarUrl = response.data;
    var container = document.querySelector(".js-con");

    container.innerHTML = "";

    gambarUrl.forEach(function(image){
        var src = image.images.fixed_height.url;
        
        container.innerHTML += "<img src=\"" + src + "\" class=\"con-image\">";
    });
}