fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => {
  const globalData = data.Global;
  const totalCases = globalData.TotalConfirmed;
  const totalDeaths = globalData.TotalDeaths;
  const totalRecovered = globalData.TotalRecovered;
  const country = data.Countries;
  // masukan kode untuk menampilkan pada HTML
      // ...
      for (let i = 0; i < country.length; i++) {
        const tableRow = document.createElement("tr");
        tableRow.id = "tableRow";
        document.getElementById("tableBody").appendChild(tableRow);

        //create Country Name
    }
      document.getElementById("hdrTotalCases").innerText += " " + totalCases;
      document.getElementById("hdrTotalDeaths").innerText += " " + totalDeaths;
      document.getElementById("hdrTotalRecovered").innerText += " " + totalRecovered;

      for (let i = 0; i < country.length; i++) {
        //Country Name
        const countryList = document.createElement("td");
        countryList.innerHTML = country[i].Slug;
  
        //Country Cases
        const countryCases = document.createElement("td");
        countryCases.innerText += country[i].TotalConfirmed;
  
        //country Deaths
        const countryDeaths = document.createElement("td");
        countryDeaths.innerText += country[i].TotalDeaths;
  
        //append child countryname, countryCases
        document.querySelectorAll("#tableRow")[i].appendChild(countryList);
        document.querySelectorAll("#tableRow")[i].appendChild(countryCases);
        document.querySelectorAll("#tableRow")[i].appendChild(countryDeaths);
      }
})
.catch(error => console.error(error));
$(document).ready(function () {
    $('#table').DataTable();
});




