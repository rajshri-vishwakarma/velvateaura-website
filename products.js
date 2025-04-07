let cards = document.querySelectorAll(".card");

 cards.forEach(function(card){
   card.addEventListener("click", function(){
      console.log(card);

      document.querySelector("body").innerHTML="";
      let div = document.createElement("div");
      div.classList.add("productDetail");
      div.innerHTML=`
      <img src=${card.firstElementChild.src} alt="">
        <div class="detailText">
            <h1>sling bag</h1>
            <h2>Upto 40% OFF</h2>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <p>Pay on delivery might be available</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>
      `
      document.querySelector("body").appendChild(div)
   })
 })

