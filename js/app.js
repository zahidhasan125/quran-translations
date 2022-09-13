const loopData = (data) => {
    for (const singleData of data) {
        // console.log(singleData);
        const dropdownItem = document.getElementById('dropdown-list');
        const li = document.createElement('li');
        li.innerHTML = `<button class="dropdown-item" onclick="getSurah(${singleData.number})" href="#">${singleData.englishName}</button>`;
        dropdownItem.appendChild(li);
    }
}
const loadData2 = () => {
    const url = `http://api.alquran.cloud/v1/quran/en.asad`;
    fetch(url)
    .then(res => res.json())
    .then(data => loopData(data.data.surahs))
}

const getSurah = (id = 1) => {
    const url = `http://api.alquran.cloud/v1/surah/${id}/en.asad`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetailsOnCard(data.data))
}

const showDetailsOnCard = (data) => {
    const ayahs = data.ayahs;
    const detailsDiv = document.getElementById('name-element');
    
    detailsDiv.innerHTML = `<h2 class="fw-bold text-center py-2">
    ${data.name}(${data.englishName})- ${data.englishNameTranslation}
    </h2>`;

    const ayahList = document.getElementById('ayah-lists');
    ayahList.textContent = '';

    for (let ayah of ayahs){
        const li = document.createElement('li');
        li.classList.add('border', 'rounded','m-2', 'p-2', 'bg-warning', 'fw-bold')
        li.innerText =`${ayah.text}`;
        ayahList.appendChild(li);
    }
}


loadData2();
getSurah()
