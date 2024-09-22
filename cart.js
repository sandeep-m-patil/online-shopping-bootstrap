let name = localStorage.getItem("loginname")

document.getElementById('name').innerHTML = `<h1>Welcome ${name}<h1>`



let cartlist = JSON.parse(localStorage.getItem("data")) || []



function show_cart() {



    console.table(cartlist)
    if (cartlist.length !== 0) {
        let a = ``;

        cartlist.forEach((item) => {
            a += `          <div class="card m-2 d-flex flex-md-row flex-col text-center">

            <div class="w-sm-100 w-md-25 d-flex justify-content-center align-items-center text-center">
                <img src=${item.img}
                    class="img-fluid p-3 mx-auto d-block" alt=${item.title} style="width:10rem;">
    
            </div>
    
            <div class="card-body text-center d-flex flex-md-row flex-col justify-content-around align-items-center flex-md-nowrap flex-wrap">
                <h5 class="card-title w-md-25 w-100 p-1">${item.name}</h5>
                <p class="card-text w-md-25 w-100"> ₹${item.price} X
                    <button class="btn btn-danger" onclick="count(${cartlist.indexOf(item)},-1)">-</button> ${item.quantity}
    
                    <button class="btn btn-success" onclick="count(${cartlist.indexOf(item)},+1)">+</button>
                </p>
    
                <div class"w-md-100"><button class="btn btn-danger" onclick="remove_item(${cartlist.indexOf(item)})">Remove</button></div>
            </div>
        </div>
                      `
        });


        document.querySelector('.carts').innerHTML = a;

        show_total()

    }

    else {
        document.querySelector('.carts').innerHTML = `<h5 style="text-align:center" class="p-3">Shopping Cart is Empty</h5>`;

    }


}

show_cart()

function count(i, c) {
    let index = cartlist.indexOf(cartlist[i])
    cartlist[index].quantity += c;
    if (cartlist[index].quantity <= 0) {
        remove_item(i)
    }
    else {
        localStorage.setItem("data", JSON.stringify(cartlist))
        show_cart()
        show_total()

    }

}

function remove_item(i) {

    let index = cartlist.indexOf(cartlist[i])
    cartlist.splice(index, 1)
    localStorage.setItem("data", JSON.stringify(cartlist))
    show_cart()
    show_total()



}

function show_total() {

    let total = 0;

    cartlist.forEach((item) => {
        total += item.price * item.quantity;
    })

    document.getElementById("cart-bill").innerHTML = `<h4 style="text-align:center">Total Bill is : ${total}</h4>`;

}


function logout() {
    window.location.href = "index.html";
}
