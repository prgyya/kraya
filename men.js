let container = document.getElementById('div_container');
let new_div = document.getElementById('add_new_div');

const pricing = document.createElement('div');
pricing.id = "price_and_other_detail";
container.appendChild(pricing);


function addImage(src, content, amount, des) {
    const griditem = document.createElement('div');
    griditem.className = 'grid-item';

    const img = document.createElement('img');
    img.src = src;

    const detail = document.createElement('button');
    detail.className = "detail_style";
    detail.innerHTML = "Click here...";
    detail.style.cursor = 'pointer';
    griditem.appendChild(detail);

    detail.addEventListener('click', (e) => {
        const y = e.pageY;
        if (pricing.style.transform == 'translateX(-100rem)') {
            pricing.style.transform = 'translateX(0)';
            pricing.style.transition = "transform 1s";
            pricing.innerHTML = `<span style="text-decoration:underline;">${content}</span>`;
            pricing.style.top = `${y}px`;
            more_info(amount, des);
        }
        else {
            pricing.style.transform = 'translateX(-100rem)';
            pricing.style.transition = "transform 1s";
            pricing.innerHTML = "";
        }
    })

    griditem.appendChild(img);
    container.appendChild(griditem);

}

function more_info(amount, description) {
    const price = document.createElement('div');
    price.id = "money";
    price.innerHTML = amount;
    pricing.appendChild(price);

    const desc = document.createElement('div');
    desc.id = "descri";
    desc.innerHTML = description;
    desc.style.textDEcoration = "none";
    pricing.appendChild(desc);

    const btn1 = document.createElement('button');
    btn1.id = "btn1";
    btn1.innerHTML = "Add to cart";
    pricing.appendChild(btn1);

    btn1.addEventListener('click', () => {
        window.location.href = 'cart_order.html';
    })

    const btn2 = document.createElement("button");
    btn2.id = "btn2";
    btn2.innerHTML = "Click to Buy";
    pricing.appendChild(btn2);

    btn2.addEventListener('click', () => {
        window.location.href = 'cart_order.html';
    })

    const btn3 = document.createElement('button');
    btn3.id = "close";
    btn3.innerHTML = "X";
    pricing.appendChild(btn3);

    btn3.addEventListener('click', () => {
        pricing.style.transform = 'translateX(-100rem)';
        pricing.style.transition = "transform 1s";
    })
}


const obj = {
    img1: addImage('kraya room/thirteen.jpg'),
    img2: addImage('kraya room/twelve.jpg'),
    img3: addImage('kraya room/eighteen.jpg'),
    img4: addImage('kraya room/ten.jpg'),
    img5: addImage('kraya room/nine.jpg'),
    img6: addImage('kraya room/six.jpg'),
    img7: addImage('kraya room/four.jpg'),
    img8: addImage('kraya room/twenty.jpg'),
    img9: addImage('kraya room/nineteen.jpg'),
    img10: addImage('kraya room/seventeen.jpg'),
    img11: addImage('kraya room/fifteen.jpg'),
    img12: addImage('kraya room/fourteen.jpg'),
    img13: addImage('kraya room/sixteen.jpg'),
    img14: addImage('kraya room/five.jpg'),
    img15: addImage('kraya room/fourty.jpg'),
    img16:addImage('kraya room/eleven.jpg'),
    img17: addImage('kraya room/three.jpg'),
    img18: addImage('kraya room/seven.jpg'),
    img19: addImage('kraya room/eight.jpg'),
    img20:addImage('kraya room/two.jpg'),
    img21: addImage('kraya room/one.jpg'),
}

