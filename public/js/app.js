// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((puzzle) => {
//     console.log(puzzle);
//   });
// });

const weatherForm = document.querySelector("form");
const search = weatherForm.querySelector("input");

const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const address = search.value;
  const url = `/weather?address=${address}`;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(url).then((response) => {
    response.json().then((forecastData) => {
      if (forecastData.error) {
        messageOne.textContent = "";
        messageTwo.textContent = forecastData.error;
        return; //console.log(forecastData.error);
      }
      // console.log(forecastData.location);
      // console.log(forecastData.address);
      // console.log(forecastData.forecast);
      messageOne.textContent = forecastData.location;
      messageTwo.textContent = forecastData.forecast;
    });
  });
});
