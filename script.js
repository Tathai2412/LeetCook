
function applyRowStyle() {
    const list = document.querySelector(".row-item");
    if (list) {
        list.style.border = "5px solid #DF9755";
        list.style.borderRadius = "10px";
        list.style.marginTop = "20px";
        list.style.padding = "10px";
    }
}

function handleSort(value) {
    const isAscending = value === "true";
    const cardList = Array.from(document.querySelectorAll(".list_item"));

    cardList.sort((a, b) => {
        const titleA = a.querySelector(".card-title").innerText.trim().toUpperCase();
        const titleB = b.querySelector(".card-title").innerText.trim().toUpperCase();

        if (value === "true") {
            return titleA.localeCompare(titleB)
        } else if (value === "false") {
            return titleB.localeCompare(titleA)
        }
    });

    const container = document.querySelector(".row-item");
    cardList.forEach(card => container.appendChild(card));


    applyRowStyle();
}

function handleSearch(query) {
    const searchQuery = query.trim().toLowerCase(); 
    const items = document.querySelectorAll(".list_item");
    let firstVisibleItem = null;

    items.forEach(item => {
        const title = item.querySelector(".card-title").innerText.toLowerCase();
        if (searchQuery === "" || title.includes(searchQuery)) {
            item.style.display = ""; 
            if (!firstVisibleItem) {
                firstVisibleItem = item; 
            }
        } else {
            item.style.display = "none";
        }
    });

    if (firstVisibleItem) {
        firstVisibleItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}