const sortButtonZToA = document.getElementById('sortButtonZToA');
const sortButtonAToZ = document.getElementById('sortButtonAToZ');
const list = document.getElementById('list');

sortButtonZToA.addEventListener('click', () => {
    const items = Array.from(list.children);

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
