function display_price(price){
    let price_arr = document.querySelectorAll('.price-value')
    price_arr.forEach((e,i)=>{
        if(i!=1)
        e.innerHTML = "₹ " + (+price).toFixed(2)
    })
}
let data = localStorage.getItem('ajio_price_discount') || localStorage.getItem('ajio_price')
display_price(data)

let arr = JSON.parse(localStorage.getItem('final_cart')) || []
display(arr)
function display(arr){
    let main_div = document.querySelector('.edd-items-list')
    arr.map((e)=>{
        let div = document.createElement('div')
        div.setAttribute('class','edd-items-list__each-item')
        div.innerHTML = `<div class="edd-items-list__images-container ">
        <img class="edd-items-list__images-container__image" src="${e.image}" alt="image">
      </div>
      <div class="edd-items-list__header">
        <span class="edd-items-list__header__text__date">05 Dec </span>
        <span class="edd-items-list__header__brand marginAdd">outryt</span>
        <span class="edd-items-list__header__text marginAdd">${e.name} </span>
      </div>`
      main_div.append(div)
    })
}
document.querySelector('.change-address-section').addEventListener('click',()=>{
    let div = document.createElement('div')
    div.setAttribute('class','modal fade in modal-add-address shipping-address-view-popup')
    div.setAttribute('id','modalId')
    div.style.display = "block"
    div.innerHTML =
    `<div class="modal-dialog"><div class="modal-content"><div class="ic-close-quickview"></div><div class="sidebar-address-view"><div class="header"><div class="change-address"><span class="ic-address"></span>Change Address</div><div class="add-address">Add New Address</div></div><div class="mobaddr-pageadj"><div class="address-section"><div class="mobaddr-box  active-address shipping-address-box shipping-sidebar-address-box"><div class="address-info-wrapper "><div class="address-info-desk-name"><span class="address-book-user-name">Sanket  Sapate  </span><span class="address-book-addtype">HOME</span></div><div class="default-address-tag tan-color">Default</div><div class="address-info"><div class="">545, New Subedar layout Behind thawre colony, </div><div class="address-second"></div><div class="address-third">NAGPUR, MAHARASHTRA</div><div class="address-fifth">India - 440024</div></div><div class="address-mobile"><span>Phone : </span><span class="addFontWeight">9673343022</span></div></div><div class="edit-remove-button-container"><span class="mobaddr-editc"><span class="ic-Edit ic--icon-right-gutter-space"></span>Edit</span><span class="mobaddr-icon-mar" data-test="delete-click">Delete</span><div class="address-selected"><span class="ic-Circle-tick"></span>Selected</div></div></div></div></div></div></div></div>`
    document.querySelector('#dAccountWrapper').append(div)
    document.querySelector('.ic-close-quickview').addEventListener('click',()=>{
        div.parentNode.removeChild(div)
    })
    // document.querySelector('.add-address').addEventListener('click',()=>{
    //     document.querySelector('.ic-close-quickview').addEventListener('click',()=>{
    //         div.parentNode.removeChild(div)
    //     })  
    // })
})
