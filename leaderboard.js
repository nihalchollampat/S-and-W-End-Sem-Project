
let arr = []

function DisplayData() {
    const ele = document.getElementById('disdata');
    
    for (i = 0; i < arr.length; i++) {
        const newDiv = document.createElement('div.Participant');
        newDiv.innerHTML =
            `
        <div class="Participant">
            <h2>
                ${i+1})
                ${arr[i].Name}
            </h2>
            <h2>
                ${arr[i].Points}
            </h2>
        </div>
            `;
        ele.appendChild(newDiv);
    }
}


fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        arr = data

        console.log("arr:", arr)
        DisplayData()
    })


// function add() {
//     const NameField = document.getElementById('name')
//     const PointsField = document.getElementById('points')

//     // let data = {
//     //     Id: Date.now(),
//     //     "Name": NameField.value,
//     //     "Points": PointsField.value,
//     // }

//     // console.log(data)

//     // arr.push(data)
//     // arr.sort()



//     DisplayData()
// }

