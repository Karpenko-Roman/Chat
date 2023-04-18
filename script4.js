document.getElementById("buttonId").onclick = function () {
let a2 = document.getElementById("input_name").value;
let a3 = document.getElementById("input_text").value;
    let oneWords = a3.startsWith("@");
    let arr = a3.split(" ");
    let arr2 = arr[0];
    let arr3 = arr2.split("");
    let arr5 = arr3.reverse();
    let line = arr5.length;
    let slices = arr5.slice(0, line - 1)
    let reverse = slices.reverse();
    let to = reverse.join("");
    let text = arr.reverse();
    let textLine = text.length;
    let splices = text.splice(0, textLine - 1);
    let reverses = splices.reverse();
    let textTo = reverses.join(" ");
    let today = new Date();
    if (a2.length == 0) {
        let a = document.createTextNode("Error 1234: There is no sender name, write your nickname in the field <Name>.");
        let b = document.createElement("p")
        b.appendChild(a);
        let element = document.getElementById("TextId");
        element.appendChild(b);
    } else {
        if (oneWords == false) {
            if (today.getMonth() + 1 > 9) {
                let c1 = document.createTextNode(`[${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}, From: ${a2}, To: null]     ${a3}`);
                let c2 = document.createElement("p")
                c2.appendChild(c1);
                let element1 = document.getElementById("TextId");
                element1.appendChild(c2);
            } else {
                let c1 = document.createTextNode(`[${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}, From: ${a2}, To: null]     ${a3}`);
                let c2 = document.createElement("p")
                c2.appendChild(c1);
                let element1 = document.getElementById("TextId");
                element1.appendChild(c2);
            }
            
        } else {
            if (today.getMonth() + 1 > 9) {
                let c1 = document.createTextNode(`[${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}, From: ${a2}, To: ${to}]    ${textTo}`);
                let c2 = document.createElement("p")
                c2.appendChild(c1);
                let element1 = document.getElementById("TextId");
                element1.appendChild(c2);
            } else {
                let c1 = document.createTextNode(`[${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}, From: ${a2}, To: ${to}]    ${textTo}`);
                let c2 = document.createElement("p")
                c2.appendChild(c1);
                let element1 = document.getElementById("TextId");
                element1.appendChild(c2);
            }
           
        }
        
    }

} 


