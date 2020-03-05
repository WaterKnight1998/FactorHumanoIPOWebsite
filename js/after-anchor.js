function opencard(){
    var currentUrl = document.URL;
    segments   = currentUrl.split('#');
    if(segments.length > 1){
        this.document.getElementById(segments[1]).getElementsByTagName("button")[0].click();
    }
}

window.addEventListener("load",function(){
    opencard();
    window.addEventListener('hashchange', function(){
        opencard();
    })
});