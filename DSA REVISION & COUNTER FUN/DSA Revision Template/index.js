document.querySelector("form").addEventListener("submit", myDsa);

let qsnArr = JSON.parse(localStorage.getItem("qsnData")) || [];

// if (localStorage.getItem("qsnData")== null){
//     qsnArr = [];
// }else{
//     qsnArr = JSON.parse(localStorage.getItem("qsnData")) ;
// }



// window.addEventListener("load",function(){
//     displayTable(qsnArr)
// })


function myDsa(event) {
    event.preventDefault();

    let qsnObj = {
        qsnTitle: document.querySelector("#title").value,
        qsnLink: document.querySelector("#link").value,
        qsnDiff: document.querySelector("#difficulty").value
    };

    qsnArr.push(qsnObj);
    displayTable(qsnArr);
    localStorage.setItem("qsnData",JSON.stringify(qsnArr))
}

function displayTable(qsnArr) {
    document.querySelector("tbody").innerHTML = "";

    qsnArr.forEach(function (el) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = el.qsnTitle
        let td2 = document.createElement("td")
        td2.innerText = el.qsnLink

        let td3 = document.createElement("td")
        td3.innerText = el.qsnDiff

        let td4 = document.createElement("td")
        if (el.qsnDiff == "Easy") {
            td4.innerText = "No"
        } else {
            td4.innerText = "Yes"
        }

        let td5 = document.createElement("td")
        td5.innerText = "DELETE"
        td5.addEventListener("click",deleteRow);
        td5.style.backgroundColor = "red"
        td5.style.cursor = "pointer"


        tr.append(td1, td2, td3, td4,td5)
        document.querySelector("tbody").append(tr)
    })


    function deleteRow(event){
        event.target.parentNode.remove()
    }


}