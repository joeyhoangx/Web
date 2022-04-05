function myFunction() {
    var product1 = document.getElementById("product1").value;
    if (product1 <= 0){ 
        alert("Please enter your name using letters only.")
        return}

    var product2 = document.getElementById("product2").value;
    if (product2 <= 0){ 
        alert("Please enter a value for the amount of people greater than 0.")
        return}

    var product3 = document.getElementById("product3").value;
    if (product3 <= 0){ 
        alert("Please enter a proper date.")
        return}

    var product4 = document.getElementById("product4").value;
    if (product4 <= 0){ 
        alert("Please enter a proper time.")
        return}

        var text = "The reservation for "+product1+" for "+product2+" people has been set on "+product3+" at "+product4+ ". Thank you for your reservation!";
    
        if(confirm("Press ok if your reservation information is correct.")){
            location.reload();

            alert(text)
}

}
