function Salesperson_Earnings(){
    var product1 = document.getElementById("product1").value;
        if (product1 < 0){ 
            alert("Values must be greater than or equal to 0")
            return};
 

    var product2 = document.getElementById("product2").value;
        if (product2 <= 0){ 
            alert("Values must be greater than or equal to 0")
            return};
    

    var product3 = document.getElementById("product3").value;
        if (product3 < 0){ 
            alert("Values must be greater than or equal to 0")
            return};
            

    var product4 = document.getElementById("product4").value;
        if (product4 <= 0){ 
            alert("Values must be greater than or equal to 0")
            return};
    
    var total_sale = (product1 * 75) + (product2 * 100) + (product3 * 125) + (product4 * 200);
    var commission = (total_sale * .0875);
    var total_earnings = 900 + commission; 
    var text = "Salesperson's total earning is $"+total_earnings.toFixed(2)+ " that includes $900 per week plus a commission of "+commission.toFixed(2)+"(8.75% of total sale of $"+total_sale+")";
    document.getElementById("earnings-Sales").innerHTML = text;
    document.getElementById("earnings-Sales").className = "Sales";
    
}
