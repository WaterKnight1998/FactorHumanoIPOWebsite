function opencard(){
    var currentUrl = document.URL;
    segments   = currentUrl.split('#');
    if(segments.length > 1){
        var aux = segments[1].split("-");
        if(aux.length == 1){
            document.getElementById(aux[0]).getElementsByTagName("button")[0].click();
        }else if(aux.length == 2){
            document.getElementById(aux[0]).getElementsByTagName("button")[0].click();
            document.getElementById(aux[1]).getElementsByTagName("button")[0].click();
            document.getElementById(aux[1]).scrollIntoView(true);
        }  
    }
}

window.addEventListener("load",function(){
    opencard();
    window.addEventListener('hashchange', function(){
        opencard();
    })
});