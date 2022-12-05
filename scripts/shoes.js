let  productData= [
    {
      "id": 90,
      "image": "https://th.bing.com/th/id/OIP.3_TUbB62YNKYxbIQ8O7C8QHaFA?w=268&h=181&c=7&r=0&o=5&pid=1.7",
      "img1": "https://assets.ajio.com/medias/sys_master/root/20221109/uL3I/636ac868f997ddfdbd621946/-78Wx98H-465250176-green-MODEL.jpg",
      "img2": "https://assets.ajio.com/medias/sys_master/root/20221109/yR3f/636ac868f997ddfdbd6218b9/-473Wx593H-465250176-green-MODEL6.jpg",
      "name": "MC STAN",
      "des": "Premium 80k shoes",
      "price": 80000,
      "type": "Shoes",
      "Gender": "M"
    },
    {
        "id": 91,
        "image": "https://cdn.shopify.com/s/files/1/0257/8225/5674/products/AIRJORDAN11RETRO_GS_378038-0111.jpg?v=1611901957",
        "img1": "https://assets.ajio.com/medias/sys_master/root/20221109/uL3I/636ac868f997ddfdbd621946/-78Wx98H-465250176-green-MODEL.jpg",
        "img2": "https://assets.ajio.com/medias/sys_master/root/20221109/yR3f/636ac868f997ddfdbd6218b9/-473Wx593H-465250176-green-MODEL6.jpg",
        "name": "MC STAN",
        "des": "Premium 80k shoes",
        "price": 80000,
        "type": "Shoes",
        "Gender": "M"
      }
]

filterGender(productData);

 
 
 function filterGender(data){
     
   
  var filter=data.filter(function(elem,i)
  {
   
      return elem.Gender=="M";
    
  })
  displayData(filter);
  localStorage.setItem("data",JSON.stringify(filter));
  localStorage.setItem("mensData",JSON.stringify(filter));
  
 
}

function tshirts(){
  if(document.getElementById("tshirts").checked)
  {
    let Data=JSON.parse(localStorage.getItem("mensData"));
  
  var fitertshirt=Data.filter(function(elem,i){
    return elem.type=="tshirt";
  })
  console.log(fitertshirt);
  displayData(fitertshirt);
  localStorage.setItem("data",JSON.stringify(fitertshirt));
  if(document.getElementById("shirts").checked){
    document.getElementById("shirts").checked=false;

  }
  if(document.getElementById("ethentics").checked){
    document.getElementById("ethentics").checked=false;

  }
  if(document.getElementById("winterwears").checked){
    document.getElementById("winterwears").checked=false;
  }

  }
  else{
    filterGender(productData);
  }
 
  
  
  
}
function shirts(){
 
  if(document.getElementById("shirts").checked)
  {
    let Data=JSON.parse(localStorage.getItem("mensData"));
    var fitertshirt=Data.filter(function(elem,i){
      return elem.type=="shirt";
    })
    displayData(fitertshirt);
    localStorage.setItem("data",JSON.stringify(fitertshirt));
    if(document.getElementById("tshirts").checked){
      document.getElementById("tshirts").checked=false;
  
    }
    if(document.getElementById("ethentics").checked){
      document.getElementById("ethentics").checked=false;
  
    }
    if(document.getElementById("winterwears").checked){
      document.getElementById("winterwears").checked=false;
    }
  }
    
  else{
    filterGender(productData);
  }
 
  
 
 
  
}
function ethentics(){
  if(document.getElementById("ethentics").checked)
  {
    let Data=JSON.parse(localStorage.getItem("mensData"));
    var fitertshirt=Data.filter(function(elem,i){
      return elem.type=="ethentic";
    })
    displayData(fitertshirt);
    localStorage.setItem("data",JSON.stringify(fitertshirt));
    if(document.getElementById("shirts").checked){
      document.getElementById("shirts").checked=false;
  
    }
    if(document.getElementById("tshirts").checked){
      document.getElementById("tshirts").checked=false;
  
    }
    if(document.getElementById("winterwears").checked){
      document.getElementById("winterwears").checked=false;
    }
  }
  else{
    filterGender(productData);
  }
 
  
  
}
function winterwears(){
  if(document.getElementById("winterwears").checked)
  {
    let Data=JSON.parse(localStorage.getItem("mensData"));
  var fitertshirt=Data.filter(function(elem,i){
    return elem.type=="winterwear" || elem.type=="jacket";
  })
  displayData(fitertshirt);
  localStorage.setItem("data",JSON.stringify(fitertshirt));
  if(document.getElementById("shirts").checked){
    document.getElementById("shirts").checked=false;

  }
  if(document.getElementById("ethentics").checked){
    document.getElementById("ethentics").checked=false;

  }
  if(document.getElementById("tshirts").checked){
    document.getElementById("tshirts").checked=false;
  }
  
  }
  else{
    filterGender(productData);
  }
 
 
  
}
function displayData(data)
 {
  document.getElementById("products").innerHTML="";
  let value=document.getElementById("sort").value;
  
  if(value=="htl")
  {
    data.sort(function(a, b)
    {
      return b.price-a.price;
    
    });
    

  }
  if(value=="lth")
  {
    
    data.sort(function(a, b)
    {
      return a.price-b.price;
    
    });
 

  }

  document.getElementById("span").innerText=data.length+" Items Found";
data.map(function(elem){
  let div=document.createElement("div");
  let img=document.createElement("img");
  img.src=elem.image;
  let div1=document.createElement("div");
  let n=document.createElement("h5");
  n.innerText=elem.name;
  n.style.color="rgb(180, 121, 80)";
  let d=document.createElement("p");
  d.innerText=elem.des;
 
  let p=document.createElement("h4");
  p.innerText= "₹"+elem.price;

  let button=document.createElement("button");
  button.innerText="ADD TO BAG";
  button.addEventListener("click", function(){
    addToCart()
  });
 
  div1.append(n,d,p,button);
  div.append(img,div1);

  document.getElementById("products").append(div);


})
    
 }    
    
     
     


// var cartArray=JSON.parse(localStorage.getItem("getProduct"))||[];
  async function addToCart(){
    let sign = localStorage.getItem('signin')
    if(sign){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let data = await fetch(`https://ajio-json.onrender.com/users/${sign}`, requestOptions)
      data = await data.json()
      let filter1 = data.cart.filter((e)=>{
        return e.id == obj.id
      })
      if(!filter1.length){
        obj.qty = 1
        data.cart.push(obj)
        raw = JSON.stringify( {
          "cart" : data.cart
        })
        var requestOptions = {
          method: 'PATCH',
          body : raw,
          headers: myHeaders,
          redirect: 'follow'
        };
        let data1 = await fetch(`https://ajio-json.onrender.com/users/${sign}`, requestOptions)
        alert("Product Added To The Cart");
      }else{
        alert("Product Already Exists In Cart")
      }
    }
  }

 
      
   function sort(){
    let availableData=JSON.parse(localStorage.getItem("data"));
    var selectedValue=document.getElementById("sort").value ;
  
    if(selectedValue=="All")
    {
    
      displayData(availableData);
    }
    
      else if(selectedValue=="htl")
      {
        availableData.sort(function(a, b)
        {
          return b.price-a.price;
        
        });
        displayData(availableData);
    
      }
       else if(selectedValue=="lth")
      {
         availableData.sort(function(a, b)
        {
          return a.price-b.price;
        
        });
        displayData(availableData);
    
      }
     
  


   }
   