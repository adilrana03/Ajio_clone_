let sign_id = localStorage.getItem('signin')
// fetch_cart()
let array = []
async function fetch_cart(){
    let data = await fetch(`https://ajio-json.onrender.com/users/${sign_id}`)
    data = await data.json()
    if(data.cart.length){
        array = data.cart
        display_cart(array)
    }
}
// display_cart(arr)
fetch_cart()
function display_cart(arr){
    document.querySelector('#item').innerHTML = `(${arr.length} items)`
    document.querySelector('.empty-cart').style.display = "none"
    document.querySelector('.cart-container').style.display = "inline-block"
    let main_div = document.querySelector('.card-offer')
    main_div.innerHTML = null
    arr.map((e,i)=>{
        let data = document.createElement('div')
        data.setAttribute('class','product-card')

        data.innerHTML = `<div class="product-card">
        <input type="hidden" name="baseProductId_0" value="441316111_black">
        <div class="card-section row">
            <div class="product-img col-lg-2 col-4">
                <img src="${e.image}">
            </div>
            <div class="product-details col-lg-10 col-8">
                <div class="product-name">
                 ${e.name}
                    <div class="product-delete">
                        <div class="delete-btn">Delete</div>
                    </div>
                </div>
                <div class="update-wrapper">
                    <div class="cartqty">
                        <span>Qty</span>
                        <div>${e.qty}<span class="ic-chevrondown"></span>
                        </div>
                    </div>
                </div>
                <div class="priceinfo">
                    <div class="net-price best-price-strip">Rs. ${e.price}</div>
                </div>
                <div class="save-closet-btn wishlist-icon-mr">
                    <span class="wishlist-icon-mr"><img src="https://assets.ajio.com/static/img/my-bag-wishlist-icon.svg"></span>Move to Wishlist
                </div>
            </div>
        </div>
    </div>`
    main_div.append(data)
    })
    display_price(arr)
    addFunctionalities()
}
localStorage.removeItem('ajio_price_discount')
function display_price(arr){
    let total = arr.reduce((ac,e)=>{
        return ac + e.price*e.qty
    },0)
    localStorage.setItem('ajio_price',total)
    let price = document.querySelectorAll('.price-value')
    price.forEach((e,i)=>{
        if(i!=1)
        e.innerHTML = "₹ " + total.toFixed(2)
    })
}

document.querySelector('.apply-button').addEventListener('click',checkCoupon)

function checkCoupon(){
    let coupon = document.querySelector('.coupon-code-input-vhr-not-apld').value
    if(coupon.toLowerCase()=="masai30"){
        document.querySelector('.content').innerHTML = "Coupon Applied Successfully <br> Discount of 30% is applied"
        let total = +localStorage.getItem('ajio_price')
        total *= .7
        total = total.toFixed(2)
        localStorage.setItem('ajio_price_discount',total)
        let price = document.querySelectorAll('.price-value')
        price[2].innerHTML = "₹ " + total
    }else{
        document.querySelector('.content').innerHTML = "Invalid Coupon"
        let price = document.querySelectorAll('.price-value')
        price[2].innerHTML = "₹ " + (+localStorage.getItem('ajio_price')).toFixed(2)
        localStorage.removeItem('ajio_price_discount')
    }
}

function addFunctionalities(){
    let change = document.querySelectorAll('.update-wrapper') || []
    change = [...change]
    // console.log(change)
    change.map((e,i)=>{
        e.addEventListener('click',()=>{
            changeQty(i)
        })
    })
    let delete_btn = document.querySelectorAll('.delete-btn') || []
    delete_btn = [...delete_btn]
    delete_btn.map((e,i)=>{
        e.addEventListener('click',()=>{
            deleteItem(i)
        })
    })

}

function changeQty(index){
    // console.log('working',index)
    let div = document.createElement('div')
    div.setAttribute('class','modal fade in cart-qty-update-modal')
    div.setAttribute('id','modalId')
    div.style.display = 'block'
    div.innerHTML = `<div class="modal-dialog"><div class="modal-content"><div class="ic-close-quickview"></div><div><div id="cardSizePopup"><div id="cardQtyPopup"><div class="cartqty-section"><p class="header-label">Select quantity</p><button class="decrement button" disabled=""> - </button><div class="counter"> 1 </div><button class="increment button"> + </button></div><button class="full-width-button" id="updateQuantity">Update</button></div></div></div></div>`
    document.querySelector('#dCartWrapper').append(div)

    document.querySelector('.counter').innerHTML = array[index].qty
    if(array[index].qty==1){
        document.querySelector('.decrement').disabled = true
    }else{
        document.querySelector('.decrement').disabled = false
    }
    if(array[index].qty==10){
        document.querySelector('.increment').disabled = true
    }else{
        document.querySelector('.increment').disabled = false
    }
    document.querySelector('.decrement').addEventListener('click',()=>{
        array[index].qty--
        document.querySelector('.counter').innerHTML = array[index].qty
        if(array[index].qty==1){
            document.querySelector('.decrement').disabled = true
        }else{
            document.querySelector('.decrement').disabled = false
        }
        if(array[index].qty==10){
            document.querySelector('.increment').disabled = true
        }else{
            document.querySelector('.increment').disabled = false
        }
    })
    document.querySelector('.increment').addEventListener('click',()=>{
        array[index].qty++
        document.querySelector('.counter').innerHTML = array[index].qty
        if(array[index].qty==1){
            document.querySelector('.decrement').disabled = true
        }else{
            document.querySelector('.decrement').disabled = false
        }
        if(array[index].qty==10){
            document.querySelector('.increment').disabled = true
        }else{
            document.querySelector('.increment').disabled = false
        }
    })
    document.querySelector('#updateQuantity').addEventListener('click',()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            cart : array
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`https://ajio-json.onrender.com/users/${sign_id}`, requestOptions)
        .then((res)=>{return res.json()})
        .then((res)=>{array = res.cart
            display_cart(array)
            console.log(array)
            div.parentNode.removeChild(div)
        })
        .catch(error => console.log('error', error));
    })

    document.querySelector('.ic-close-quickview').addEventListener('click',()=>{
        console.log("hi");
        div.parentNode.removeChild(div)
    })
}

function deleteItem(index) {
    array.splice(index,1)
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            cart : array
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`https://ajio-json.onrender.com/users/${sign_id}`, requestOptions)
        .then((res)=>{return res.json()})
        .then((res)=>{array = res.cart
            if(!array.length){
                window.location.reload()
            }
            display_cart(array)
            console.log(array)
            div.parentNode.removeChild(div)
        })
        .catch(error => console.log('error', error));
}
/*</div> */

document.querySelector('.shipping-button').addEventListener('click',()=>{
    localStorage.setItem('final_cart',JSON.stringify(array))
    window.location.href = "./shipping.html"
})