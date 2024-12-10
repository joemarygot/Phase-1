console.log(window);

//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));


//Multiple element
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item))

const ul = document.querySelector('.items');
// ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hatdog ko';
// ul.children[1].innerHTML = 'Gwapo\'s Joemar'
// ul.lastElementChild.innerHTML = '<h1>Hehe</h1>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     console.log(e.target.type)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hatdogs</h2>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter fields')
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    }
    else{
        // console.log('Success')
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        //Clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}