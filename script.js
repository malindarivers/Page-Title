$("button").click(function(){
    var age = $(".Age").val();
    var color = $(".color").val();

if (age <= 15 && color==="green"){
    $("img").show("src","https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/c/c0/Season_3_Gumball.png/revision/latest/scale-to-width-down/2000?cb=20180626174718");
        
} else if (age >15&&color==="green"){
    $("img").show("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYmCWCWWPohDuDlXQRHwnG3Q9aJcVkl--ZjOmpH7sq9quSxd4fA");
    
} else if (age <15&&color==="orange"){
    $("img").show("src","data:image/png;base64,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");

} else if (age >15 && color==="orange"){
    $("img").show("src","data:image/jpeg;base64,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");
}

    
});

