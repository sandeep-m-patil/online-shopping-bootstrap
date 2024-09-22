

let products = [
    {
        'img': 'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg',
        'title': "Apple iPhone 15 (128 GB)",
        'price': 70900,
        'category': "Electronic"
    },
    {
        'img': 'https://m.media-amazon.com/images/I/511jgZKz8UL._SR240,220_.jpg',
        'title': "Dyazo Laptop bag - Grey",
        'price': 299,
        'category': "Accessory"

    }
    ,
    {
        'img': 'https://m.media-amazon.com/images/I/41ruti33J+L._AC._SR180,230.jpg',
        'title': "ProElite Smart Case for iPad",
        'price': 699,
        'category': "Accessory"


    },
    {
        'img': 'https://m.media-amazon.com/images/I/41GMgZG6zdL.AC_SX250.jpg',
        'title': "Razer Headset",
        'price': 1200,
        'category': "Electronic"

    }
    ,
    {
        'img': 'https://m.media-amazon.com/images/I/51dRoa85BNL._SR480,440_.jpg',
        'title': "Samsung Smart TV",
        'price': 66900,
        'category': "Electronic"

    },
    {
        'img': 'https://m.media-amazon.com/images/I/61NqrZdoh6L._SY695_.jpg',
        'title': "YOHO Stride Sneakers",
        'price': 1799,
        'category': "Foot Wear"

    }
    ,
    {
        'img': 'https://images-eu.ssl-images-amazon.com/images/I/61-SNkMcaqL._AC_UL675_SR675,480_.jpg',
        'title': "Safari Pentagon 3 Pc Set",
        'price': 6299,
        'category': "Package"

    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnU7MkRdE9JtIsiUfEhq8VGYya_O7zVEl4Cg&s',
        'title': "Leather  Analog Watch",
        'price': 13999,
        'category': "Accessory"

    }

];








function show_home() {

    let a = ``;

    products.forEach((item) => {
        a += `
      <div class="card m-2" style="width: 18rem;">
        
        <div class="contianer mx-auto d-block" style="height: 10rem;">
      <img src=${item.img} class="card-img-top  w-50 pt-2 mx-auto d-block" alt=${item.title}>

  </div>

        <div class="card-body text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text fs-4">₹${item.price}</p>
          <p class="card-text">${item.category}</p>

          <button class="btn btn-warning" onclick="addtoCart(${products.indexOf(item)})">Add to Cart</button>
        </div>
      </div>

        `


    });


    document.querySelector('.products').innerHTML = a;


}



show_home()


let cartlist = JSON.parse(localStorage.getItem("data")) || []


function addtoCart(i) {
    alert(`${products[i].title} is added to Cart`)

    const existingItem = cartlist.find(item => item.id === i);

    if (existingItem) {
        existingItem.quantity++;
    } else {




        cartlist.push({
            'id': i,
            'img': `${products[i].img}`,
            'name': `${products[i].title}`,
            'price': products[i].price,
            'quantity': 1

        })

    }





    console.table(cartlist)

    localStorage.setItem("data", JSON.stringify(cartlist))


    show_cart_count()

}

function show_cart_count() {

    let cart_count = cartlist.length;

    document.getElementById("cart_count").innerText = `(${cart_count})`;


}

show_cart_count()

function logout() {
    window.location.href = "index.html";
}
