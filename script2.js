let cancel = document.getElementById('cancel');
let inject = document.getElementById('inject');
let another_box = document.getElementById('another_box');
let one = document.getElementById('one');

cancel.addEventListener('click', () => {
   inject.style.zIndex = -30;
   inject.style.transform = 'translate(-100rem)';
   another_box.style.filter = 'blur(0px)';
})

let iframe = document.createElement('iframe');
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.boxShadow = '20px 20px 60px #00000041,inset -20px -20px #f8dc7041';
iframe.style.borderRadius = "2rem";
iframe.style.overflow = 'hidden';
iframe.style.border = 'none';

function Style() {
   inject.style.zIndex = 30;
   inject.style.transform = 'translate(0rem)';
   another_box.style.filter = 'blur(2px)';
   inject.appendChild(iframe);
}

one.addEventListener('click', () => {
   Style();
   iframe.src = 'cart_order.html';
})

function exchange() {
   Style();
   iframe.src = 'Profile.html';

}
function login() {
   Style();
   iframe.src = 'login.html';
}
function women() {
   Style();
   iframe.src = 'women.html';
}
function men() {
   Style();
   iframe.src = 'men.html';
}

function search() {
   let text = document.getElementById('searching').value;
   console.log(text);
   let store = {
      women: 'women.html',
      Women: 'women.html',
      woman: 'women.html',
      Woman: 'women.html',
      'women wear':'women.html',
      'Women wear':'women.html',
      'woman wear':'women.html',
      'Woman wear':'women.html',
      girls:'women.html',
      girl:'women.html',
      Girls:'women.html',
      Girl:'women.html',
      'girl wear':'men.html',
      'girls wear':'men.html',
      'Girls wear':'men.html',
      'Girl wear':'men.html',
      men: 'men.html',
      man: 'men.html',
      Men: 'men.html',
      Man: 'men.html',
      'men wear':'men.html',
      'man wear':'men.html',
      'Man wear':'men.html',
      'Men wear':'men.html',
      boys: 'men.html',
      Boys:'men.html',
      boy:'men.html',
      Boy:'men.html',
      'boys wear':'men.html',
      'Boys wear':'men.html',
      'Boy wear':'men.html',
      'Boys wear':'men.html',
   }
   if (store[text]) {
      window.location.href = store[text];
   }
   else {
      alert('Product not found');
   }
}
