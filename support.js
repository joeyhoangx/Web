function supportpage() {
    var product5 = document.getElementById("product5").value;
    if (product5 <= 0){
        alert("Please enter your name using letters only.")
    return}

    var product6 = document.getElementById("product6").value;
    if (product6 <= 0){
        alert("Please enter your email.")
    return}

    var product7 = document.getElementById("product7").value;
    if (product7 <= 0){
        alert("Please enter your message subject.")
    return}

    var product8 = document.getElementById("product8").value;
    if (product8 <= 0){
        alert("Please enter your message for Ramen House.")
    return}

        var text = "The message by "+product5+" about "+product7+" will be replied to "+product6+" shortly. Thank you for sending a message!";
        
        if(confirm("Press ok if your message is correct.")){
            location.reload();
        
            alert(text)
}

}