var tien = 0 


function tienout() {
    if (document.getElementById("tien").value !== "" & document.getElementById("chiphi").value =="")
    {
        tien = document.getElementById("tien").value;
        document.getElementById("tienout").innerText = tien
        document.querySelector('form').reset();
        return true

    }
    
    else {
        confirm("Nhập vào tiền của bạn")
        return false
        
    }
}
let chiphi1 = []
let ten = document.getElementById("ten")
let chiphi = document.getElementById("chiphi")
var temp2=0
var temp1 = 0
  function tinhchiphi() {
        temp1=0
    if (chiphi.value!="") {
        let sign = { ten: ten.value, chiphi: chiphi.value}
            chiphi1.push(sign)
        for (var i = 0; i < chiphi1.length; i++) {
            temp1 = temp1 + parseInt(chiphi1[i].chiphi)
            document.getElementsByClassName("tenchiphitungcai")[i].innerText = chiphi1[i].chiphi

            document.getElementsByClassName("chiphitungcai")[i].innerText = chiphi1[i].chiphi
        }
        

        document.getElementById("tongchiphi").innerText = temp1
        document.querySelector(".form2").reset()
        document.getElementById("canbang").innerText = tien - temp1
        temp2 = temp1
        return temp1 
    }
    
    else {
     return temp2
 }
}
function tinhchiphi2() {
    temp1 = 0
    if (chiphi.value != "") {
        let sign = { ten: ten.value, chiphi: chiphi.value }
        chiphi1.push(sign)
        for (var i = 0; i < chiphi1.length; i++) {
            temp1 = temp1 + parseInt(chiphi1[i].chiphi)
            document.getElementsByClassName("tenchiphitungcai")[i].innerText = chiphi1[i].ten

            document.getElementsByClassName("chiphitungcai")[i].innerText = chiphi1[i].chiphi
        }
        document.getElementById("tongchiphi").innerText = temp1
        document.querySelector(".form2").reset()
        document.getElementById("canbang").innerText = tien - temp1
        temp2 = temp1
        return temp1
    }

    else {
        confirm("Nhập vào chi phí")
        return temp2
    }
}
function canbang() {
    tienout(), tinhchiphi()

    document.getElementById("canbang").innerText = tien - temp2

}

const quotes = [
    {
        content:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        text: " Life"
    },
    {
        content:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        text: "John Kenneth Galbraith"
    },
    {
        content:
            "God save me from my friends. I can protect myself from my enemies.",
        text: "Claude Louis Hector de Villars "
    },
    {
        content: "The price of anything is the amount of life you exchange for it.",
        text: "David Thoreau"
    },
    {
        content:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        text: "Charles Lindbergh"
    },
    {
        content:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        text: " Tyne Daly"
    }
];

function random() {
    document.getElementById("randomcontent").innerHTML = quotes[Math.floor(Math.random() * quotes.length)].content;
    document.getElementById("randomtext").innerHTML = quotes[Math.floor(Math.random() * quotes.length)].text;
}