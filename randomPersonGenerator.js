const createButton = document.getElementById('createButton')
const personPane = document.querySelector('.personPane')
const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const gender = ['male', 'female']


class Person {
    constructor(first, last, gender, hobbies){
        this.name = {
            first,
            last
        }
        this.hobbies = hobbies
        this.gender = gender
    }
    
    displayPerson(){
        let personDiv = document.createElement('div')
        let nameHeader = document.createElement('h2')
        nameHeader.textContent = `Name: ${this.name.first} - ${this.name.last}`
        personDiv.appendChild(nameHeader)
        let para = document.createElement('p')
        if (this.gender === 'male') {
            para.textContent = `His hobbies are`
        } else {
            para.textContent = `Her hobbies are`
        }
        let hobb = document.createElement('ul')
        for (const hobby in this.hobbies) {
            let hobbsList = document.createElement('li')
            hobbsList.textContent = `${this.hobbies[hobby]}`
            hobb.appendChild(hobbsList)
        }
        personDiv.appendChild(para)
        personDiv.appendChild(hobb)
        personPane.appendChild(personDiv)
    }
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function generateName() {
    let name = ''
    for (let i = 0; i < 6; i++) {
        name += alphabets[random(0,25)]
    }
    return name
}

function generateGender() {
   return gender[random(0,1)]
}

createButton.addEventListener('click', () => {
    let newPerson = new Person(generateName(), generateName(), generateGender(), ['snowboarding', 'hunting'])
    newPerson.displayPerson()
})