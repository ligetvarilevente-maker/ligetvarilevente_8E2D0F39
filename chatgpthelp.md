# ChatGpt része a feladatban 

## Megvalósítás 

Én alapul az előző tanévben készített feladatot vettem  amit a ***Szabó Rózsa*** tanárnő segített még tavaj megcsinálni, továbbá használtam ai-t mert pár dolog nem nézett ki jól a weboldalon. 

## ChatGPT része a feladatban

> Az első kérésem az volt hogy a meglévó telefonok amik div ben vannak azok márkánként legyenek egy sorban hogy szebben nézzen ki a weboldal. 

### ChatGPT:

**JavaScript**
```JavaScript
function megjelenito() {
  const container = document.getElementById("container");
  container.innerHTML = ""; // törli az előző tartalmat

  // Márkák sorrendje
  const markak = ["iphone", "Samsung", "huawei"];

  markak.forEach(brand => {
    // Márka szekció létrehozása
    let szekcio = document.createElement("div");
    szekcio.classList.add("brand-section");

    // Márka neve címként
    let cim = document.createElement("h2");
    cim.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    szekcio.appendChild(cim);

    // Telefonok rácsa
    let grid = document.createElement("div");
    grid.classList.add("brand-grid");

    // Adott márkához tartozó telefonok hozzáadása
    telefon.forEach(tel => {
      if (tel.brand.toLowerCase() === brand.toLowerCase()) {
        let kartya = document.createElement("div");
        kartya.classList.add("egycipo");
        kartya.innerHTML = `
          <img src="${tel.picture}" alt="${tel.alter}">
          <h3>${tel.brand}</h3>
          <h4>${tel.name}</h4>
          <p class="price">${tel.price} Ft</p>
          <button onclick="kosarbaRak(${tel.id})"><i class="bi bi-cart-fill"></i> Kosárba</button>
        `;
        grid.appendChild(kartya);
      }
    });

    // Grid hozzáadása a szekcióhoz
    szekcio.appendChild(grid);
    // Szekció hozzáadása a fő konténerhez
    container.appendChild(szekcio);
  });
}
```
---
**CSS**
```CSS
/* A fő konténer – márkánként függőlegesen */
#container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  margin: 40px auto;
}

/* Egy márka szekció – cím + rács */
.brand-section {
  width: 100%;
  max-width: 1200px;
}

/* Márkanév cím */
.brand-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #222;
  font-style: italic;
}

/* A telefonok 4 oszlopos rácsban */
.brand-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-items: center;
}

/* Egy telefonkártya */
.egycipo {
  background: white;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  width: 250px;
}

.egycipo:hover {
  transform: scale(1.05);
}

.egycipo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

```
---

> A második kérésem az volt hogy egy oldalsávot csináljon nekem amiben van három kategória (samsung, iphone, huawei) aztan én pár dolgot át írtam benne pl.: hogy mekkora legyen meg hogy milyenek legyenek a színek es a lekerekítést is.

### ChatGPT:

**CSS**

```CSS
.oldalsav {
  position: fixed;              
  top: 100px;                   
  left: 20px;                  
  width: 180px;
  background-color: #f7edd2;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;                
}


.oldalsav a {
  padding: 12px 15px;
  text-decoration: none;
  color: black;
  border-left: 4px solid transparent;
  transition: all 0.2s;
  border-radius: 10px;
}

.oldalsav a:hover {
  background-color: #ec1a1aab;
  color: white;
}
```
---

> A harmadik kérésem az volt hogy csináljon egy hátteret nekem a weboldalhoz. 

### ChatGPT:

**CSS**

``` CSS
body {
  margin: 0;
  min-height: 200vh; 
  background: radial-gradient(circle at top, #e0aaff, #4b0082 50%, #000000 70%),
              radial-gradient(circle at bottom, #ffffff, #000000 60%);
  background-blend-mode: screen;
  background-attachment: fixed; 
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
}
```
---

> A negyedik kérésem az volt hogy a kártyákat kicsit formázza meg es valami jobb témát állítson be. 

### ChatGPT:

**CSS**

``` CSS
.egytelefon {
  background: #f7edd2;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  width: 250px;
}

.egytelefon:hover {
  transform: scale(1.05);
}

.egytelefon img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
```
---

> Az ötödik kérésem az volt hogy szöveg ötleteket adjon amiket felhasználhatok. 

### ChatGPT:

**CSS**

``` HTML
<div id="leiras">
        <h2>Bemutatkozás</h2>
        <p>Ez itt egy telefon webáruház ahol a nagy márkáktól tudsz telefont vásárolni. Itt megtalálod a kedvencedet legyen
        az Samsung vagy Iphone van minden. Minden telefonról egy részletes leírást is találsz hogy mit tud milyen specifikációk vannak benne.</p>
    </div>
     <div class="intro">
      <h2>Miért válassz minket?</h2>
      <p>
        Webáruházunkban kizárólag megbízható, gyári garanciával rendelkező okostelefonokat találsz. 
        Célunk hogy segítsünk a legjobb döntés meghozatalában akár teljesítmény akár ár-érték arány alapján keresel.
      </p>
      <p>
        Kínálatunkban a legújabb modellek mellett korábbi szériák is megtalálhatók kedvező áron. 
        Nézz körül és rendeld meg pár kattintással!
      </p>
      
    </div>
        <div id="leiras">
        <h2>Szállítási információk</h2>
        <p>Webáruházunkban a szállítási költség 1500 Ft, amelyet a rendelés véglegesítésekor kell fizetni. A szállítási
            idő általában 2-5 munkanap, de bizonyos esetekben ez meghosszabbodhat, például ünnepi időszakokban vagy
            készlethiány esetén.</p>
    </div>

``` 




