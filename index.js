

//PRACTICE
// function superbowlWin(array) {
//     const win = array.find((object) => {
//         return object.result === "W"
//     })
//     return win.year
// }
// console.log(superbowlWin(record))


function superbowlWin(array) {
    const winYear = []
    for (const object of array) {
        if (object.result === "W") {
            winYear.push(object.year)
        }
    }
    return winYear[0]
}








/// practice
// function superbowlWin(array) {
//     const winYears = []
//     for (const object of array) {
//         if (object.result === "W") {
//             winYears.push(object.year)
//         }
//     }
//     return winYears
// }
// console.log(superbowlWin(record))