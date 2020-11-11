function dropdown(){
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches(".dropdown")){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var open = dropdowns[i];
            if(open.classList.contains('show')){
                open.classList.remove('show');
            }
        }
    }
}