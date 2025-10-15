
telefon =
[{
    id:0,
    brand :'iphone',
    name: 'iphone 12 pro',
    price: 220000,
    picture : 'img/iphone/iphone_12_pro.png',
    alter:'iphone12pro',

},
{
    id:1,
    brand :'iphone',
    name: 'iphone 13 pro',
    price: 259000,
    picture : 'img/iphone/iphone_13_pro.png',
    alter:'iphone13pro',

},

{
    id:2,
    brand :'iphone',
    name: 'iphone 14 pro',
    price: 369000,
    picture : 'img/iphone/iphone_14_pro.png',
    alter:'iphone14pro',

},
{
    id:3,
    brand :'iphone',
    name: 'iphone 15 pro',
    price: 459000,
    picture : 'img/iphone/iphone_15_pro.png',
    alter:'iphone15pro',

},
{
    id:4,
    brand :'Samsung',
    name: 'samsung galaxy s25',
    price: 230000,
    picture : 'img/samsung/samsung_galaxy_s25.png',
    alter:'samsunggalaxys25',

},
{
    id: 5,
    brand:'samsung',
    name: 'samsung galaxy s25 ultra',
    price: 350000,
    picture: 'img/samsung/samsung_galaxy_s25_ultra.png',
    alter: 'samsunggalaxys25ultra',
},
{
    id:6,
    brand :'Samsung',
    name: 'samsung galaxy s24',
    price: 220000,
    picture : 'img/samsung/samsung_galaxy_s24.png',
    alter:'samsunggalaxys24',

},
{
    id:7,
    brand :'Samsung',
    name: 'samsung galaxy a56',
    price: 120000,
    picture : 'img/samsung/samsung_galaxy_a56.png',
    alter:'samsunggalaxya56',

},
{
    id:8,
    brand :'huawei',
    name: 'huawei pura 70',
    price: 219000,
    picture : 'img/huawei/huawei_pura_70.png',
    alter:'huaweipura70',

},
{
    id:9,
    brand :'huawei',
    name: 'huawei nova 12',
    price: 159000,
    picture : 'img/huawei/huawei_nova_12i.png',
    alter:'huaweinova12',

},
{
    id:10,
    brand :'huawei',
    name: 'huawei nova 13',
    price: 189000,
    picture : 'img/huawei/huawei_nova_13.png',
    alter:'huaweinova13',

},
{
    id:11,
    brand :'huawei',
    name: 'huawei mate x6',
    price: 349000,
    picture : 'img/huawei/huawei_mate_x6.png',
    alter:'huaweimatex6',

},
]

kosar=[0,0,0,0,0,0,0,0,0,0,0,0,0]

function keres(i) {
    index = -1;
    for (let ij = 0; ij < telefon.length; ij++) {
        if (telefon[ij].id == i) {
            index = ij;
        }
    }
    return index;
}
function kosarbaRak(ID) {
    console.log("kosarbarak fgv elindult ID: " + ID);
    kosar[ID]++;
    console.log(kosar);
    kosarmegjelenites();
}
function kosarmegjelenites() {
    seged = "";
    document.getElementById("kosar").innerHTML = "<h3>Kosár</h3>";
    osszAr = 0;

    for (let i = 0; i < kosar.length; i++) {
        if (kosar[i] > 0) {
            index = i;
            seged += `${telefon[index].brand} ${telefon[index].name} - ${telefon[index].price} Ft/db × ${kosar[index]} db<br>`;
            osszAr += telefon[index].price * kosar[index];
        }
    }

    document.getElementById("kosar").innerHTML += seged + `<h4>Fizetendő: ${osszAr} Ft  
    <button class="button btn btn-dark active" onclick="fizetve()">Fizetés</button></h4>`;
}
function megjelenito() {
  const container = document.getElementById("container");
  container.innerHTML = ""; 

  const markak = ["iphone", "Samsung", "huawei"];

  markak.forEach(brand => {
    
    let szekcio = document.createElement("div");
    szekcio.classList.add("brand-section");
    szekcio.id = `${brand.toLowerCase()}-section`; 

    
    let cim = document.createElement("h2");
    cim.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    szekcio.appendChild(cim);

    
    let grid = document.createElement("div");
    grid.classList.add("brand-grid");

    telefon.forEach(tel => {
      if (tel.brand.toLowerCase() === brand.toLowerCase()) {
        let kartya = document.createElement("div");
        kartya.classList.add("egytelefon");
        kartya.innerHTML = `
          <img src="${tel.picture}" alt="${tel.alter}">
          <h4>${tel.name}</h4>
          <p class="price">${tel.price} Ft</p>
          <button onclick="kosarbaRak(${tel.id})"><i class="bi bi-cart-fill"></i> Kosárba</button>
        `;
        grid.appendChild(kartya);
      }
    });

    szekcio.appendChild(grid);
    container.appendChild(szekcio);
  });
}


function fizetve() {
    prompt("Kártyaszám és CCV kód");
    alert("Köszönjük a vásárlást!");
    kosar = new Array(telefon.length).fill(0);
    kosarmegjelenites();
}

