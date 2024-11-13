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
    img1: addImage('kraya room/twentyOne.jpg', `puff sleeve top`, "INR 12345", "puff sleeve top and skirt"),
    img2: addImage('kraya room/twentyTwo.jpg', `shirt and corset`, "INR 9876000", "shirt along with corset and skirt"),
    img3: addImage('kraya room/twentyFour.jpg'),
    img4: addImage('kraya room/twentyThree.jpg'),
    img5: addImage('kraya room/twentyFive.jpg'),
    img6: addImage('kraya room/twentySix.jpg'),
    img7: addImage('kraya room/twentySeven.jpg'),
    img8: addImage('kraya room/twentyEight.jpg'),
    img9: addImage('kraya room/twentyNine.jpg'),
    img10: addImage('kraya room/thirty.jpg'),
    img11: addImage('kraya room/thirtyOne.jpg'),
    img12: addImage('kraya room/thirtyTwo.jpg'),
    img13: addImage('kraya room/thirtyThree.jpg'),
    img14: addImage('kraya room/thirtyFour.jpg'),
    img15: addImage('kraya room/thirtyFive.jpg'),
    img16: addImage('kraya room/thirtySix.jpg'),
    img17: addImage('kraya room/thirtySeven.jpg'),
    img18: addImage('kraya room/thirtyEight.jpg'),
    img19: addImage('kraya room/thirtyNine.jpg'),
}

