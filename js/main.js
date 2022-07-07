//seleccionamos el body
const body = document.querySelector('#body');

//creacion de div, span, img, article, etcs.
const containerCard = document.createElement('div');
const spanImage = document.createElement('span');
const imgStar = document.createElement('img');
const containerCardContent = document.createElement('div');
const article = document.createElement('article');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const divContentNumbers = document.createElement('div');
const btnSubmit = document.createElement('button');

//se agrega la clase al span que contenerdor de la imagen
spanImage.classList.add('card_span');
//se agrega ruta de la imagen
imgStar.setAttribute('src', './images/icon-star.svg');
imgStar.setAttribute('alt', 'estrella');
spanImage.appendChild(imgStar);
containerCardContent.classList.add('container-card_content');
h1.textContent = 'How did we do?';
p.textContent =
  'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';
article.appendChild(h1);
article.appendChild(p);

divContentNumbers.classList.add('container-card_content-span');

for (let i = 0; i < 5; i++) {
  // creamos 5 botones mediante un ciclo
  const btn = document.createElement('button');
  btn.classList.add('card_span');
  btn.classList.add('btn_orange');
  btn.setAttribute('id', `btn-${i + 1}`);
  btn.textContent = i + 1;
  divContentNumbers.appendChild(btn);
}
btnSubmit.classList.add('container-card_btn');
btnSubmit.textContent = 'Submit';

containerCardContent.appendChild(article);
containerCard.appendChild(spanImage);
containerCard.appendChild(containerCardContent);
containerCard.appendChild(divContentNumbers);
containerCard.appendChild(btnSubmit);
containerCard.classList.add('container-card');
body.appendChild(containerCard);

//Seleccionamos los bottones creados mediante el for
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');

//le asignamos un evento al boton y le agregamos una funcion
// cada vez que le damos click cambia el color del body
btn1.addEventListener('click', (e) => {
  body.style.backgroundColor = '#ffc107';
  console.log('Valor del botton: ', e.target.innerText);
});
btn2.addEventListener('click', (e) => {
  body.style.backgroundColor = '#051937';
  console.log('Valor del botton: ', e.target.innerText);
});
btn3.addEventListener('click', (e) => {
  body.style.backgroundColor = '#A8EB12';
  console.log('Valor del botton: ', e.target.innerText);
});
btn4.addEventListener('click', (e) => {
  body.style.backgroundColor = '#5FFBF1';
  console.log('Valor del botton: ', e.target.innerText);
});
btn5.addEventListener('click', (e) => {
  body.style.backgroundColor = '#86A8E7';
  console.log('Valor del botton: ', e.target.innerText);
});

btnSubmit.addEventListener('click', () => {
  alert('Hola, soy un botton.');
});
