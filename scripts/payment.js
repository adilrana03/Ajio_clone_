let totalAmt = +localStorage.getItem('ajio_price_discount') || +localStorage.getItem('ajio_price')

document.getElementById("btnPayment").addEventListener("click", () => {
    let cardNum = document.getElementById("cardNum").value;
    let cusName = document.getElementById("nameOncard").value;
    let forcvv = document.getElementById("forcvv").value;
    if (cardNum.length != 16 && cusName.length == 0 && forcvv.length == 0) {
        alert("Please Enter Valid Card Details");
    } else if (
        cardNum.length >= 6
    ) {
        // alert("hi");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "cart": []
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        let sign = localStorage.getItem('signin')
        fetch(`https://ajio-json.onrender.com/users/${sign}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
                window.location.href = "summaryPage.html";
    }
});
document.getElementById("bagt").innerHTML = `Rs ${totalAmt.toFixed(2)}`;
// document.getElementById("bags").innerHTML = `- Rs ${totalAmt.total_save.toFixed(
//     2
// )}`;
document.getElementById("bagp").innerHTML = `Rs ${totalAmt.toFixed(
    2
)}`;
document.getElementById("bagp1").innerHTML = `Rs ${totalAmt.toFixed(
    2
)}`;
document.getElementById('btnPayment').innerHTML = `PAY Rs. ${totalAmt.toFixed(
    2
)} SECURELY`