// code your solution here

function superbowlWin(record) {
    let element = record.find(isWin);
    if (element != undefined){
        return element.year;
    }
}

function isWin(element, index, array) {
    return (element.result === "W");  
}


// year
// result