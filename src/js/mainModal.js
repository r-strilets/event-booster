export function createModal(response) {
  return response.reduce(
    (acc, { info, city, country, name, images, dates, url }) =>
      acc +
      ` <div class="event-card">
     <button type="button" class="close__modal"><svg>
  <use href="../images/sprite.svg#icon-close"></use>
</svg></button>
        <img
          src=""
          alt="photo"
          loading="lazy"
      <div class="info">
        <p class="info-item">
          <b>INFO</b>${info}
        </p>
        <p class="info-item">
          <b>WHEN</b>${dates.localDate}<br>
          ${dates.localTime}(${_embedded.venues.timeZone})
        </p>
        <p class="info-item">
          <b>WHERE </b>${city},${country.name}<br>
          ${_embedded.venues.name}
        </p>
        <p class="info-item">
          <b>WHO </b>${name}
        </p>
        ${response.prices
          .map(
            price => `<p class="info-item">
          <b>PRICES </b>${name}
          <button><a href= "${price.url}">BUY TICKETS</a></button>
        </p>`
          )
          .join('')}
      </div>
      <button class="info__button"><a href=" https://www.google.com/${name}">MORE FROM THIS AUTHOR</a></button>
    </div> `,
    ''
  );
}

// const modalButton = document.querySelector('info__button');
// modalButton.addEventListener('click', googleSearch);

// function googleSearch(response) {
//   window.open(`https://www.google.com/search?q=${response.name}`);
// }
