function createModal(response) {
  return response.reduce(
    (acc, { info, city, country, name, images, dates, url }) =>
      acc +
      ` <div class="event-card" hidden>
 <picture
        class="gallery__artist--img"
      >
        <source
          srcset="
          ${images[1].url},          
          "
          media="(min-width:1280px)"
        />
        <source
          srcset="
          ${images[1].url},            
          "
          media="(min-width:768px)"
        />
        <img
          src="./images/teacher/elena-moreva-mob.jpg"
          alt="photo"
          loading="lazy"
        />
      </picture>
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
      <button class="info__button"><a href=" https://www.google.com/${name}">MORE FROM THIS AUTHOR</a></button>
    </div> `,
    ''
  );
}

const modalButton = document.querySelector('info__button');
modalButton.addEventListener('click', googleSearch);

function googleSearch(response) {
  window.open(`https://www.google.com/search?q=${response.name}`);
}
