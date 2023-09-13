const product = [
    {
        id: 1,
        image: 'headphones.jpeg',
        title: 'Heaphones',
        price: '$20',
    },
    {
        id: 2,
        image: 'microphone.jpeg',
        title: 'Rode NT1 Microphone',
        price: '$45',
    },
    {
        id: 3,
        image: 'smartwatch.jpeg',
        title: 'Smart Watch',
        price: '$30'
    },
    {
        id: 4,
        image: 'laptop.jpeg',
        title: 'HP Laptop Next Generation',
        price: '$70'
    },
    {
        id: 5,
        image: 'camera.jpeg',
        title: '250D DSLR Camera',
        price: '$60'
    },
    {
        id: 6,
        image: 'lamp.jpeg',
        title: 'Metal Desk Lamp',
        price: '$55'
    },
    {
        id: 7,
        image: 'phone.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: '$55'
    },
    {
        id: 8,
        image: 'airpods.jpeg',
        title: 'Air Pods Pro',
        price: '$50'
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                    </div>
                    <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>Add to Cart</button>
                    </div>
                </div>`
        )
    }).join('')