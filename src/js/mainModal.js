const itemCard = document.querySelector('.gallery');
// document.querySelector();

function createModal() {
  return arr.reduce(
    (acc, { info, city, country, name, images, dates, url }) =>
      acc +
      ` <div class="event-card" hidden>
    <img
      class="gallery__image"
      src="${images}"

      loading="lazy" width="300"/>

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
         <p class="info-item">
          <b>PRICES </b>${name}
          <button><a href= "${url}">BUY TICKETS</a></button>
        </p>
      </div>
      <button><a href=" https://www.google.com/${name}">MORE FROM THIS AUTHOR</a></button>
    </div> `,
    ''
  );
}
itemCard.addEventListener('click', createModal);