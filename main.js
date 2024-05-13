import { buttonsData, menu } from "./js/db.js";
import { elements } from "./js/helpers.js";

// Fonksiyonlar
const renderMenuItems = (menuItems) => {
    // Dizideki her bir obje icin bir elemani temsil eden HTML elemani olusturur. Bu HTML i bir diziye aktarir.
 
    let menuHTML = menuItems.map(
    (item) =>
    `<a href="/productDetail.html?id=${item.id}" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2" id="card">
         <img src="${item.img}" class="rounded shadow">
         <div>
            <div class="d-flex justify-content-between">
               <h5>${item.title}</h5>
                <p class="text-success">$${item.price}</p>
            </div>
              <p class="lead">${item.desc}</p>
         </div>
    </a>`
  );
  menuHTML = menuHTML.join("");
  elements.menuArea.innerHTML = menuHTML;
};

//* tiklanilan butona gore o butonun kategorisine ait urunleri listele
const searchCategory = (e) => {
    const category = e.target.dataset.category;
    
// Tum dizi elemanlarindan yalnizca kategori degeri butonun kategori degeri ile eslesenleri getir ve bir dizi seklinde degiskene aktar.
    const filtredMenu = menu.filter((item) => item.category === category);
    
    // Hepsi secilirse butun menuyu ekrana aktarir.
if (category == "undefined") {
 return;    
}else if(category === "all") {
    renderMenuItems(menu);
} else {
    // Filtrelenen elemanlari ekrana aktarmasi icin menu dizisinden olustutrdugumuz filtredMenu dizisini ekrana aktarir
    renderMenuItems(filtredMenu);
}
// Sectigimiz kategorinin butonunu aktiflestirebilmek icin category i parametre olarak gonderdik.
renderButtons(category)
};

// Ekrana butonlari basma
const renderButtons = (active) => {
    // Eski butonlari ekrandan sil
    elements.buttonsArea.innerHTML = "";
    // Yeni butonlar olusturma
    buttonsData.forEach((btn) => {
        // HTML butonu olusturma
        const buttonEle = document.createElement("button");
// buttonlara classlarini ekleme
        buttonEle.className = "btn btn-outline-dark filter-btn";
        // Icerisindeki yaziyi degistirme
        buttonEle.textContent = btn.text;
        // Hangi kategori oldugu bilgisini buton elementine ekleme
        buttonEle.dataset.category = btn.value
        

// Egerki active kategorisiyle buton eslesirse ona farkli class ekle
if (btn.value === active) {
    buttonEle.classList.add("bg-dark", "text-light");
}


// HTML e gonderme
        elements.buttonsArea.appendChild(buttonEle);
    });
};

//! olay izleyicileri

// document.addEventListener("DOMContentLoaded", renderMenuItems(menu));
//* Sayfa yuklendiginde ekrana renderMenuItems ve renderButtons fonksiyonlarini calistir.
document.addEventListener("DOMContentLoaded", () => {
    renderButtons("all");
    renderMenuItems(menu);
});
elements.buttonsArea.addEventListener("click", searchCategory);
