const body = document.body
// //body.append('Hatdog', 'Gwapo')
// //When using appendChild, it should be elements and can only contain
// //one parameter

// const div = document.createElement('div')
// //div.innerText = 'Hello Hatdog'
// div.textContent = 'Hatdog ko'
// const strong = document.createElement('strong') //Much more secure
// strong.innerText = "Hello Hakdog"
// div.innerHTML = '<strong>Hatdog ko</strong>'
// div.append(strong)

// body.append(div)

// const div = document.querySelector('div')

// console.log(div.textContent)    //Prints all the text content in the HTMl inside div
// console.log(div.innerText)      //Prints visible text in the website

//Removing elements
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)
// spanHi.remove()
// console.log(spanHi.id)
// console.log(spanHi.setAttribute('id', 'gwapoko'))
// console.log(spanHi.id = 'qwerty')
// spanHi.removeAttribute('id')

//Modifying Data Attributes
// console.log(spanHi.dataset.longerName)
// spanHi.dataset.newName = 'Whut'

//Modifying Element Classes
spanHi.classList.add('new-class')
spanHi.classList.remove('hi1')
spanHi.classList.toggle('hi3', true)

//Modifying Element Style
spanHi.style.color = 'red'
spanHi.style.backgroundColor = "gray"