let totalAmt = +localStorage.getItem('ajio_price_discount') || +localStorage.getItem('ajio_price')
let address = JSON.parse(localStorage.getItem('addressList')) || []
let date_o = Math.floor(Math.random() * 10 + 1);
console.log(date_o);
// document.getElementById('order_date').innerHTML = `${date_o} Feb`
document.getElementById("bagt").innerHTML = `Rs ${totalAmt.toFixed(
    2
)}`;
// document.getElementById("bags").innerHTML = `- Rs ${totalAmt.total_save.toFixed(
//     2
// )}`;
document.getElementById("bagp").innerHTML = `Rs ${totalAmt.toFixed(
    2
)}`;
document.getElementById("bagp1").innerHTML = `Rs ${totalAmt.toFixed(
    2
)}`;
// document.getElementById('adds').innerHTML = `${address[0].locality}, ${address[0].distt},${address[0].state} -${address[0].pin} `
// document.getElementById('phn').innerHTML = `Phone : <b>${address[0].mob}</b>`
// document.getElementById('user_name').innerHTML = `<i>${address[0].name}</i>`
let bag_arr = JSON.parse(localStorage.getItem('bagItems')) || [];






bag_arr.map((ele) => {
    let div = document.createElement("div")
    div.setAttribute("id", "container_main")
    let div1 = document.createElement("div")
    let image = document.createElement("img")
    let date_e = document.createElement('p');
    date_e.innerHTML = `Expected Delivery : <b>${date_o} Feb</b>`;
    div1.setAttribute("class", "div_img")
    image.src = ele.image.img1;
    let quant = document.createElement('p');
    quant.innerHTML = `Qty <b>${ele.quant}</b>`
    let name = document.createElement("p")
    name.innerHTML = `${ele.name} - <span>${ele.details}</span>`
    let price = document.createElement("p")
    price.innerHTML = `<span>Rs. ${ele.main_price.toFixed(2)}</span><span> (${ele.discount}%)</span> <b>Rs. ${ele.discount_price.toFixed(2)}`




    // let discount_div = document.createElement("div")
    // let discount = document.createElement("p")
    // discount.textContent =  `DISCOUNT ${ele.discount}`
    // discount_div.append(discount)



    div1.append(image, date_e)

    div.append(div1, name, quant, price)

    document.getElementById('order_items').append(div);


})

document.getElementById('btn_final2').onclick = () => {
    bag_arr = [];
    localStorage.setItem('bagItems', JSON.stringify(bag_arr));
    window.location.href = "index.html";
}


document.getElementById('btn_final').onclick = () => {

    bag_arr = [];
    localStorage.setItem('bagItems', JSON.stringify(bag_arr));
    window.location.href = "index.html";
}