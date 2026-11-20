const set = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

set.addEventListener("click", () => {
    menu.classList.toggle("menu-active");

})

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnfilter = document.querySelectorAll(".koleksi-box ul li");
const imgItem = document.querySelectorAll(".koleksi-list img");

btnfilter.forEach(data => {

    data.onclick = () => {

        btnfilter.forEach(btn => {
            btn.className = "";
        });

        data.className = "active";

        // Filter
        const btntext = data.textContent.trim().toLowerCase();

        imgItem.forEach(img => {

            const imgfilter = img.getAttribute("data-filter").toLowerCase();

            img.style.display = "none";

            if (imgfilter === btntext || btntext === "semua koleksi") {
                img.style.display = "block";
            }

        });

    };

});