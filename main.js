// Task 1 

function say() {

    let age = prompt('How old are you?')

    if (isNaN(age) || age <= 0) {
        alert('Delbik')
    } else if (age >= 18) {
        alert('Good')
    } else {
        alert('provalivai')
    }
}

say()

// Task 2

function max_name(name1, name2, name3) {

    let arr = [name1,name2,name3]

    let longest = ""

    for(let name of arr) {
        if(name.lenght > longest.length) {
            longest = name
        }
    }
    return longest
}
console.log(
    max_name('Alex', 'George', 'Michael')
)


