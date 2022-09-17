export function createModal(response) {
  return response.reduce((acc, resp) => {
    console.log(resp.name);
    return acc + `<div>${resp.name}</div>`;
  }, ``);
}

// const modalButton = document.querySelector('info__button');
// modalButton.addEventListener('click', googleSearch);

// function googleSearch(response) {
//   window.open(`https://www.google.com/search?q=${response.name}`);
// }
