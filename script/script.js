'use strict'
let priority = true
const tdList = document.querySelectorAll('td'),
    table = document.querySelector('table')


/* Intercept mouse click on td element */ 
table.addEventListener('click', event => {
    let td = event.target.closest('td')

    if (!td || !table.contains(td)) return
    addClass(td)
})

 /* Add tic-tac-toe in turn when clicking on the field */
 function addClass(td) {
    let tdClass = td.firstChild.classList

    if (priority && !tdClass.value) {
        tdClass.add('cross')
        priority = false
    } else if (!priority && !tdClass.value) {
        tdClass.add('circles')
        priority = true
    }
    logic()
}

/* Game logic tic tac toe */
function logic() {
    let filledField = 0,
        classCheckListCross = new Array(tdList.length),
        classCheckListCircles = new Array(tdList.length)

    for (let i = 0; i < tdList.length; i++) {
        classCheckListCross[i] = tdList[i].firstChild.classList.contains('cross')
        classCheckListCircles[i] = tdList[i].firstChild.classList.contains('circles')
    }
    
    if (classCheckListCross[0] && classCheckListCross[1] && classCheckListCross[2] ||
        classCheckListCross[3] && classCheckListCross[4] && classCheckListCross[5] ||
        classCheckListCross[6] && classCheckListCross[7] && classCheckListCross[8] ||
        classCheckListCross[0] && classCheckListCross[3] && classCheckListCross[6] ||
        classCheckListCross[1] && classCheckListCross[4] && classCheckListCross[7] ||
        classCheckListCross[2] && classCheckListCross[5] && classCheckListCross[8] ||
        classCheckListCross[0] && classCheckListCross[4] && classCheckListCross[8] ||
        classCheckListCross[2] && classCheckListCross[4] && classCheckListCross[6]
        ) 
    {
        alert('congratulations! cross win') 
        setTimeout(clearField, 500)
    } else if (
        classCheckListCircles[0] && classCheckListCircles[1] && classCheckListCircles[2] ||
        classCheckListCircles[3] && classCheckListCircles[4] && classCheckListCircles[5] ||
        classCheckListCircles[6] && classCheckListCircles[7] && classCheckListCircles[8] ||
        classCheckListCircles[0] && classCheckListCircles[3] && classCheckListCircles[6] ||
        classCheckListCircles[1] && classCheckListCircles[4] && classCheckListCircles[7] ||
        classCheckListCircles[2] && classCheckListCircles[5] && classCheckListCircles[8] ||
        classCheckListCircles[0] && classCheckListCircles[4] && classCheckListCircles[8] ||
        classCheckListCircles[2] && classCheckListCircles[4] && classCheckListCircles[6]
    ) {
        alert('congratulations! circles win') 
        setTimeout(clearField, 500)
    }

    /* Situation if all fields are filled, but there is no winner */
    for (let td of tdList) {
        filledField += td.firstChild.classList[0] ? 1 : 0
        
        if (filledField === tdList.length) {
            alert('play again')
            setTimeout(clearField, 500)
        }
    }
}

/* Сlear the fields to play again */
function clearField() {
    for (let td of tdList) td.firstChild.classList.remove('cross', 'circles')
}