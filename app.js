const flagImg = document.querySelector('.card-img-top');
const main = document.querySelector('.main');


function displayError(err) {
    main.innerHTML = err;
}


function uiCreation (detailsObj) {
    main.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${detailsObj.image ?? detailsObj.flag}" class="card-img-top" alt="Country's flag image">
    <div class="card-body">   
        <ul class="detailsContainer">
            <li id="country">Country:<span class="detail"> ${detailsObj.country}</span> </li>
            <li id="city">City: <span class="detail">${detailsObj.city}</span></li>
            <li id="region">Region: <span class="detail">${detailsObj.region}</span></li>
            <li id="lat">Latitudes: <span class="detail">${detailsObj.latt}</span></li>
            <li id="lng">Longitudes: <span class="detail">${detailsObj.longt}</span></li>
            <li id="timezone">Timezone: <span class="detail">${detailsObj.timezone}</span></li>
        </ul>
        <a href="#" class="btn btn-primary disabled">WhereAmI</a>
    </div>
</div>`
}


function whereAmI (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        if(data.error){
            throw new Error('Sorry, your coordinates status is invalid.' + " " + data.error.description);
        };
        uiCreation(data);
    }).catch((err) => {
        console.log(err);
        displayError(err);
    });
}

// whereAmI('34.98300013', '63.13329964');
// whereAmI('52.508', '13.81');
whereAmI('-33.933', '18.474');
