

$(function(){
    //your code here;

    console.log('page is fully loaded');
    document.getElementById("sex").addEventListener("click",function(){
        console.log("tule")
        if($("#opt_s").css("display") === "none")
        {
            console.log("nbrvbr")   
            $("#opt_s").css("display", "block");
            
        }
        else {
            $("#opt_s").css("display", "none");
        }
    })
    
    
    document.getElementById("cat").addEventListener("click",function(){
        if($("#opt_c").css("display") === "none")
        {
            $("#opt_c").css("display", "block")
        }
        else {
            $("#opt_c").css("display", "none");
        }
    })    
})
    

    
    
   


