let greeting = prompt("Lütfen Adınızı Giriniz:");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} <small> ${greeting} </small>`

var aSaat = document.getElementById("clock");
function format(saatcek) {
    var bSaat = saatcek.toString();
    if (bSaat.lenght == 1) {
        return "0" + bSaat;
    } else {
        return bSaat;
    }
}

function saatGuncelleme() {
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    var ay = tarih.getMonth();
    var gün = tarih.getDay();
    var yil = tarih.getFullYear();

    aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye) + ":" + "     " + format(gün) + ":" + format(ay) + ":" + format(yil);
}
setInterval(saatGuncelleme, 1000);