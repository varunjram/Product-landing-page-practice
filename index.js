const dropCity = document.getElementById("myCity");

const fetchdata = () => {
  fetch("./cities.json")
    .then((response) => response.json())
    .then((jsondata) => {
      let cities = jsondata.cities;

      const city = cities.map((e) => {
        const newOption = document.createElement("option");
        newOption.value = e.City;
        newOption.text = e.City;
        dropCity.appendChild(newOption);
      });
      //   console.log(new);
    });
};

fetchdata();

// const displayOption = async () => {
//   const options = await getPost();
//   options.data.forEach((option) => {
//     const newOption = document.createElement("option");
//     console.log(option);
//     newOption.value = option.batchName;
//     newOption.text = option.batchName;
//     batchTrack.appendChild(newOption);
//   });
// };
// displayOption();
