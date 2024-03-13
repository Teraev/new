import arr from './products.js'

let container = document.createElement('div');
let h1 = document.createElement('h1');
let buttons = document.createElement('div');
let firstButton = document.createElement('button');
let secondButton = document.createElement('button');


container.classList.add('container');

h1.innerHTML = 'В корзине: 1 товар';

buttons.classList.add('buttons');

firstButton.classList.add('left');
firstButton.innerHTML = 'Показать первые 5';

secondButton.classList.add('right');
secondButton.innerHTML = 'Показать все';



const clothes = document.createElement('div');
clothes.classList.add('clothes');

for (let i = 0; i < 4; i++) {
    let product = document.createElement('div');
    let image = document.createElement('img');
    let white = document.createElement('div');
    let black = document.createElement('div');
    let h2 = document.createElement('h2');
    let paragraph = document.createElement('p');
    let Button = document.createElement('button');
    product.classList.add('product');

    white.classList.add('white');

    image.src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

    black.classList.add('black');

    h2.innerHTML = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15" Laptops';

    paragraph.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';

    Button.classList.add('favorite');
    Button.innerHTML = 'В избранное';


    white.append(image);
    black.append(h2);
    black.append(paragraph);
    black.append(Button);
    product.append(white);
    product.append(black);
    clothes.append(product);
}

buttons.append(firstButton);
buttons.append(secondButton);
container.append(h1);
container.append(buttons);
container.append(clothes);
document.body.append(container);