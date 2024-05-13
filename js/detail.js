import { elements } from "./helpers.js";
import { menu } from "./db.js";


console.log(window.location);

// URL de ki parametreleri yonetebilmek icin URLSearchParams class'indan ornek olusturduk.
// Ornegi olustururken kendi URL'mizdeki parametreleri gonderdik.

const searchParams = new URLSearchParams(window.location.search);
//* Get methodu ile URL de ki parametresine eristik
const paramId = searchParams.get("id");
//* Menu icerisinden idsini bildigimiz elemana ulasma
const product = menu.find((item) => item.id === Number(paramId));
console.log(product);

//* Buldugumuz urune gore arayuzu ekrana basma
elements.outlet.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <a href="/"><i class="bi bi-house fs-1"></i></a>
        <div>home / ${product.category} / ${product.title.toLowerCase()}</div>
      </div>
        <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          src="${product.img}"
          style="max-width: 500px"
          class="img-fluid shadow rounded"
        />
      </div>
      <div>
        <h3 class="my-5">
          Pruduct category : <span class="text-success"> ${product.category} </span>
        </h3>
        <h3 class="my-5">
          Pruduct price: <span class="text-success">$ ${product.price}  </span>
        </h3>
      </div>
       <p class="lead fs-3">
        ${product.desc}
       </p>
    
`;