'use strict'

let iter = true
let tdList = document.querySelectorAll('td')
let table = document.querySelector('table')


 /* Add tic-tac-toe in turn when clicking on the field */
 function addClass(td) {
    let tdClass = td.children['0'].classList
    if (iter && tdClass[0] == undefined) {
        tdClass.add('cross')
        iter = false
    } else if (!iter && tdClass[0] == undefined) {
        tdClass.add('circles')
        iter = true
    }
    logic()
}

/* Game logic tic tac toe */
function logic() {
    let filledField = 0
    let classCheckListCross = new Array(tdList.length)
    let classCheckListCircles = new Array(tdList.length)

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
    for (let i = 0; i < tdList.length; i++) {
        filledField += tdList[i].firstChild.classList[0] != undefined ? 1 : 0
        if (filledField === tdList.length) {
            alert('play again')
            setTimeout(clearField, 500)
        }
    }
}

/* Сlear the fields to play again */
function clearField() {
    for (let i = 0; i < tdList.length; i++) tdList[i].firstChild.classList.remove('cross', 'circles')
}


/* Intercept mouse click on td element */ 
table.onclick = event => {
    let td = event.target.closest('td')
    if (!td) return
    if (!table.contains(td)) return
    addClass(td)
}
