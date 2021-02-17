fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data));

        const displayCountries = countries => {
            const countriesDiv = document.getElementById("countries");

            countries.forEach(country => {
                const countryDiv = document.createElement('div')
                countryDiv.className = 'country';

                const countryInfo = `
                    <h2>${country.name}</h2>
                    <p>${country.capital}</p>
                    <button onclick="countryDetails('${country.name}')">Details</button>
                `;
               
                countryDiv.innerHTML = countryInfo;
                countriesDiv.appendChild(countryDiv);
            });
        }
        const countryDetails = name => {
            const url = `https://restcountries.eu/rest/v2/name/${name}`
            
            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
            // .then(data => renderCountryInfo(data[0]));
        }

        const renderCountryInfo = country =>{
            console.log(country);
            const singleCountry = document.getElementById("singleCountry");
            singleCountry.innerHTML = `
                <h1>${country.name}</h1>
                <img class="flag" src="${country.flag}">
                <p>Short Name: ${country.alpha2Code}</p>
                <p>Area: ${country.area}</p>
                <p>Border: ${country.borders}</p>
                <p>Calling Code: ${country.callingCodes}</p>
                <p>Capital: ${country.capital}</p>
                <p>Region: ${country.region}</p>
                <p>Currency: ${country.currencies[0].symbol}</p>
                <button onclick="displayFullPage()">Back</button>
            `;
            document.getElementById("section").style.display = "none";
            document.getElementById("singleCountry").style.display = "block";
        }

        function displayFullPage(){
            document.getElementById("singleCountry").style.display = "none";
            document.getElementById("section").style.display = "block";
        }