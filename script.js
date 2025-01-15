const sortButtonZToA = document.getElementById('sortButtonZToA');
const sortButtonAToZ = document.getElementById('sortButtonAToZ');
const list = document.getElementById('list');

sortButtonZToA.addEventListener('click', () => {
    const items = Array.from(list.getElementsByClassName('list_item'));

    items.sort((a, b) => b.textContent.localeCompare(a.textContent));

    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));
});

sortButtonAToZ.addEventListener('click', () => {
    const items = Array.from(list.children);

    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));
});

//document.addEventListener("DOMContentLoaded", function () {
sortButtonAToZ.addEventListener("DOMContentLoaded" , () => {
    // Lấy tất cả các div có class 'card'
    const cardList = Array.from(document.querySelectorAll(".list_item"));

    // Sắp xếp danh sách dựa trên nội dung của thẻ h5 có class 'card-title'
    cardList.sort((a, b) => {
        const titleA = a.querySelector(".card-title").innerText.trim().toUpperCase();
        const titleB = b.querySelector(".card-title").innerText.trim().toUpperCase();
        return titleA.localeCompare(titleB); // Sắp xếp từ A-Z
    });

    // Gắn lại các phần tử đã sắp xếp vào container
    const container = document.querySelector(".row");
    cardList.forEach(card => container.appendChild(card));
});