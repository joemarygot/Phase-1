const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent Capture")
// }, {capture: true})
// grandparent.addEventListener('click', e => {
//     console.log("Grandparent Bubble")
// })
// parent.addEventListener('click', e => {
//     console.log("Parent Capture")
// }, {capture: true})
// parent.addEventListener('click', e => {
//     console.log("Parent Bubble")
// })
// child.addEventListener('click', e => {
//     console.log("Child Capture")
// }, {capture: true})
// child.addEventListener('click', e => {
//     console.log("Child Bubble")
//     e.stopPropagation()
// })
// grandparent.addEventListener('click', printHatdog)

//If you want to remove event listener, create a function
// setTimeout(() => {
//     grandparent.removeEventListener('click', printHatdog)
// }, 2000)

// parent.addEventListener('click', e => {
//     console.log("Parent")
// }, {once: true})
// child.addEventListener('click', e => {
//     console.log("Child")
// })
// function printHatdog(){
//     console.log('Hatdog ko')
// }

//Event Delegation
const divs = document.querySelectorAll('div')

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log('hi')
//     })
// })

// document.addEventListener('click', e => {
//     if(e.target.matches('div')){
//         console.log('Hatdog')
//     }
    
// })
addGlobalEventListener('click', 'div', e => {
    console.log('Hatdog')
})

//You can also create a function
function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
            callback(e)
        }
    })
}

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
// newDiv.addEventListener('click', () => {
//     console.log('This is a new div')
// })
document.body.append(newDiv)