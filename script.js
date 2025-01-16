// Hàm áp dụng CSS vào phần tử với id 'list'

function applyRowStyle() {
    const list = document.querySelector(".row-item");
    if (list) {
        list.style.border = "5px solid #DF9755";
        list.style.borderRadius = "10px";
        list.style.marginTop = "20px";
        list.style.padding = "10px";
    }
}

// Hàm sắp xếp từ A đến Z
function handleSort(value) {
    // Chuyển đổi giá trị "true" hoặc "false" từ chuỗi sang boolean
    const isAscending = value === "true";
    // Lấy tất cả các div có class 'list_item'
    const cardList = Array.from(document.querySelectorAll(".list_item"));

    // Sắp xếp danh sách dựa trên nội dung của thẻ h5 có class 'card-title'
    cardList.sort((a, b) => {
        const titleA = a.querySelector(".card-title").innerText.trim().toUpperCase();
        const titleB = b.querySelector(".card-title").innerText.trim().toUpperCase();

        if (value === "true") {
            return titleA.localeCompare(titleB)
        } else if (value === "false") {
            return titleB.localeCompare(titleA)
        }
    });

    // Gắn lại các phần tử đã sắp xếp vào container
    const container = document.querySelector(".row-item");
    cardList.forEach(card => container.appendChild(card));


    applyRowStyle();
}