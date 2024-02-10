const countryCust = document.querySelector(".country");
const cellCust = document.querySelector(".cellNumber");
const locCust = document.querySelector(".address");
const teritoryCust = document.querySelector(".teritory");
const regionCust = document.querySelector(".region");
const sapNumber = document.querySelector(".sapCode");
const searchSap = document.querySelector(".sear");
const containerProfile = document.querySelector(".containerHtml");
const reload = document.querySelector(".reFresh");
let html;
const proPic = document.querySelector(".profile-picture");
const proInfo = document.querySelector(".profile-info");

const account1 = {
  Owner: "Md. Mofizul Islam Tradrs",
  SapCode: "373241",
  Location: "Mirshorai , Nowduara ",
  Reg: "Chattogram",
  Teritory: "Feni",
  images: "imgmofiz/Mofizul.jpg",
  imgsig: "imgmofiz/mofizsig.jpeg",
  cellPhone: "01814307141",
};

const account2 = {
  Owner: "M/S PROKASH BEEZ VANDER",
  SapCode: "3728591",
  Location: "Manikchori Bazar,Manikchori,khagrachori ",
  Reg: "Chattogram",
  Teritory: "Chattogram",
  images: "imgprokash/prokashimg.jpeg",
  imgsig: "imgprokash/prokashsig.jpeg",
  cellPhone: "01851571262",
};

const account3 = {
  Owner: "M/S JAHIR STORE",
  SapCode: "3731730",
  Location: "Adhunogor , Lohagara",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgjahir/jahir.jpg",
  imgsig: "imgjahir/jahirsig.jpg",
  cellPhone: "01829804002",
};

const account4 = {
  Owner: "M/S Alif Enterprice",
  SapCode: "3726349",
  Location: "Bandorbon",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgalif/Toubur.jpg",
  imgsig: "imgalif/alifsig.jpg",
  cellPhone: "01715189237",
};
const account5 = {
  Owner: "M/S Anower and brother's",
  SapCode: "3735696",
  Location: "Satkania ,jhot pukuria bazar",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imganower/anower.jpg",
  imgsig: "imganower/anowersig.jpg",
  cellPhone: "01812837574",
};
const account6 = {
  Owner: "M/S Rahman Store",
  SapCode: "3710433",
  Location: "Gunagori,Bashkhali",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgmahfuz/mizan.jpg",
  imgsig: "imgmahfuz/mizansig.jpg",
  cellPhone: "01712784615",
};
const account7 = {
  Owner: "M/S Agro Service",
  SapCode: "3745063",
  Location: "Dohazari",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgagro/borhan.jpg",
  imgsig: "imgagro/agrosig.jpg",
  cellPhone: "01713090965",
};
const account8 = {
  Owner: "M/S Sohan Enterprice",
  SapCode: "3732792",
  Location: "Chandanish, Pathandondi",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgsohan/sohan.jpg",
  imgsig: "imgsohan/sohansig.jpg",
  cellPhone: "01816807223",
};
const account9 = {
  Owner: "M/S Talukder Enterprice",
  SapCode: "3734026",
  Location: "Patiya sadar",
  Reg: "Chattogram",
  Teritory: "Patiya",
  images: "imgtalukder/rokon.jpg",
  imgsig: "imgtalukder/talukdersig.jpg",
  cellPhone: "01816807223",
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
];

searchSap.addEventListener("click", function () {
  accounts.filter((mov) => {
    if (sapNumber.value === mov.SapCode) {
      containerProfile.innerHTML = `
    <div class="profile-picture">
      <img src= ${mov.images} alt="Profile Picture" />
      <img src= ${mov.imgsig} alt="Profile Picture" />
    </div>
    <div class="profile-info">
      <h2>${mov.Owner}</h2>
      <p> SapCode : ${mov.SapCode}</p>
    </div>
    <div class="contact-info">
      <p class="segment">
        <span class="peraName">Country:</span
        ><span class="country"> Bangladesh</span>
      </p>
      <p class="segment">
        <span class="peraName">Phone:  </span
        ><span class="cellNumber"> ${mov.cellPhone}</span>
      </p>
      <p class="segment">
        <span class="peraName">Address:</span>
        <span class="address">${mov.Location}</span>
      </p>
      <p class="segment">
        <span class="peraName">Teritory: </span
        ><span class="teritory">${mov.Teritory}</span>
      </p>
      <p class="segment">
        <span class="peraName">Region:</span
        ><span class="region">${mov.Reg}</span>
      </p>
    </div>`;
      sapNumber.value = "";
    } else {
      return;
    }
  });
});
