let container = document.querySelector("#onur");
let biletSayisi = document.getElementById("biletadet");
let biletFiyati = document.getElementById("fiyat");
let filmSec = document.getElementById("film");
let koltuklar = document.querySelector(".koltuk:not(.reserved)");

// tıklanınca çalışacak fonks.
container.addEventListener("click", tikla);

function tikla(e) {
  if (
    e.target.classList.contains("koltuk") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    hesapdegis(e);
  }
}

// filmleri select kutusunda değişince hesap güncellenmesi
filmSec.addEventListener("change", hesapdegis);

function hesapdegis(e) {
  let koltukSayisi = document.querySelectorAll(".koltuk.selected");
  let seciliKoltukSayisi = koltukSayisi.length;
  biletSayisi.innerText = seciliKoltukSayisi;
  biletFiyati.innerText = filmSec.value * seciliKoltukSayisi;
}
