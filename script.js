import  bagsFootware from "./data/bagsFootware.js"
import  beautyHealth from "./data/beautyHealth.js"
import  electronics from "./data/electronics.js"
import  HomeAndKitchen from "./data/HomeAndKitchen.js"
import Jewellery from "./data/Jewellery.js"
import kids from "./data/kids.js"
import  Men from "./data/Men.js"
import womenEthinic from "./data/womenEthinic.js"
import womenWestern from "./data/womenWestern.js"


let inputSearchEl = document.querySelector(".inputSearch");
let recentInput = [];
let formInputEl = document.getElementById("inputForm");

const listofRecentEl = document.querySelector(".listofRecent");

inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl);
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block";
    }
    else {
        document.getElementById("closeSearch").style.display = "none";
    }
});

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let listofRecentHTMLEl = ""

    recentInput.push(inputSearchEl.value);
    // console.log(recentInput);

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }
        // console.log(recentInput)
        listofRecentEl.innerHTML = listofRecentEl
    }

})

/**  function reusable */



/*** Women Ethinic */

let womenEthic = document.getElementById("womenEthic")
function womenEthicFunc() {
    return womenEthinic.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
womenEthic.innerHTML = womenEthicFunc()

/**Women wastern */

let womenWst = document.getElementById("womenWst")
function womenWstFunc() {
    return womenWestern.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
womenWst.innerHTML = womenWstFunc()


/**Men */ 

let mens = document.getElementById("mens")
function mensFunc() {
    return Men.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
mens.innerHTML = mensFunc()


/**kids  */

let kid = document.getElementById("kid")
function kidFunc() {
    return kids.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
kid.innerHTML = kidFunc()

/** home and kitchen */

let HomeAndKitchenEl= document.getElementById("HomeAndKitchen")
function HomeAndKitchenFunc() {
    return HomeAndKitchen.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
HomeAndKitchenEl.innerHTML = HomeAndKitchenFunc()

/** beauty and health */

let beauty = document.getElementById("beauty")
function beautyFunc() {
    return beautyHealth.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
beauty.innerHTML = beautyFunc()

/**jwellery  */

let jewels = document.getElementById("jewels")
function jewelsFunc() {
    return Jewellery.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
jewels.innerHTML = jewelsFunc()


/** Bags and footware */

let bags = document.getElementById("bags")
function bagsFunc() {
    return bagsFootware.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
bags.innerHTML = bagsFunc()

/** electronics */

let elect = document.getElementById("elect")
function electFunc() {
    return electronics.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
          <div class="column">
             <h4>${el.heading}</h4>
             ${list}
          </div>   
        `
    }).join("")
}
elect.innerHTML = electFunc()











