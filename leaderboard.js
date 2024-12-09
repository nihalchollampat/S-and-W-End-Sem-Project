
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

        arr = data

        console.log("arr:", arr)
        DisplayData()
    })
