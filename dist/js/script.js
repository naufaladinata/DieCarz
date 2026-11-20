const set = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

set.addEventListener("click", () => {
    menu.classList.toggle("menu-active");

})

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnfilter = document.querySelectorAll("koleksi-box ul li");
const imgItem = document.querySelectorAll(".koleksi-list .img");

btnfilter.forEach(data => {
    
    data.onclick = () => {
        btnfilter.forEach(data => {
            data.className = "";
        })
        data.className = "active";
        
        //Filter
        const btntext = data.textContent;
        imgItem.forEach(img => {
          img.style.display = "none";
          if (img.getAttribute("data-filter") == btntext.toLowerCase() || btnText == "Semua Koleksi") {
            img.style.display = "block";
          }
        });

    }
   
    })
