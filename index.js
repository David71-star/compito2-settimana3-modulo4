// this function ( fecthData() ) allows us to perform feth

async function fetchData() {
  const resFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resFetch.json();

  const allUser = document.querySelector(".all-user");
  data.forEach((item) => {
    allUser.innerHTML += `<div class="card col-3 m-4">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Username: ${item.username}</li>
          <li class="list-group-item">E-mail: ${item.email}</li>
          <li class="list-group-item">Phone: ${item.phone}</li>
        </ul>
      </div>`;
  });

  document.getElementById("filterBy").addEventListener("change", filterResults);
  document.getElementById("textInput").addEventListener("input", filterResults);

  function filterResults() {
    const filterBy = document.getElementById("filterBy").value.toLowerCase();
    const searchText = document.getElementById("textInput").value.toLowerCase();
    allUser.innerHTML = "";

    const filteredData = data.filter((item) => {
      const fieldValue = item[filterBy].toLowerCase();
      return fieldValue.includes(searchText);
    });
    displayResults(filteredData);
  }

  // in this function (displayResults()) I print the searched cards, putting the constant filteredData as a parameter in the function above (filterResults()).

  function displayResults(results) {
    if (document.getElementById("textInput").value.toLowerCase() === "") {
      const allUser = document.querySelector(".all-user");
      data.forEach((item) => {
        allUser.innerHTML += `<div class="card col-3 m-4">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Username: ${item.username}</li>
              <li class="list-group-item">E-mail: ${item.email}</li>
              <li class="list-group-item">Phone: ${item.phone}</li>
            </ul>
          </div>`;
        resultsList.innerHTML = "";
      });
    } else {
      const resultsList = document.getElementById("resultsList");
      resultsList.innerHTML = "";

      results.forEach((item) => {
        const listItem = document.createElement("article");

        listItem.innerHTML = `<div class="card col-3 m-4">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Username: ${item.username}</li>
              <li class="list-group-item">E-mail: ${item.email}</li>
              <li class="list-group-item">Phone: ${item.phone}</li>
            </ul>
          </div>`;
        resultsList.appendChild(listItem);
      });
    }
  }
}
fetchData();
