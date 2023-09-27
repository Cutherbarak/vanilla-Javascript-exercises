
// const body = document.body
// body.append('Hello There? my name is Barak ', 'Welcome!');

// const div = document.createElement('div')
// div.innerHTML = 'Hello Too! today it happens '

// const bold = document.createElement('strong')
// bold.innerHTML = 'I am learning 18 ways of DOM Manipulation using Javascript'
// div.append(bold)
// // div.innerHTML = '<strong>Hi you doing good?</strong>' 

// body.appendChild(div)


const body2 = document.body
const div = document.querySelector('div')
const span1 = document.querySelector('#hi')
const span2 = document.querySelector("#bye")

// span2.remove();
// div.append(span2)

console.log(span1.setAttribute('id', 'ghost'));
console.log(span1.id)
span1.removeAttribute('id')
span1.dataset.newName = 'hi'
span1.classList.add('new-class')
span1.classList.remove('hi1')
span1.classList.toggle('hi3', true)
span1.style.backgroundColor = 'darkblue'
span1.style.color = 'white'