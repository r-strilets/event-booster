export function createModal(response) {
  return response.reduce(
    (acc, resp) =>
      acc +
      ` <div class="event-card">
  <img src="${resp.images[0].url}" width="132" higth="132" class="small_image"/>
            <img
              src="${resp.images[0].url}"
              alt="photo"
              width="427"
              higth="664"
              loading="lazy" class="big_image"/>
          <div class="info">
            <p class="info-item">
              <b>INFO</b>${resp.info || ' NO DATA'}
            </p>
            <p class="info-item">
              <b>WHEN</b>${resp.dates.start.localDate}<br>
              ${resp.dates.start.localTime || ''} ${
        resp.dates.timezone ? `(${resp.dates.timezone})` : ''
      }
            </p>
            <p class="info-item">
              <b>WHERE </b>${resp._embedded.venues[0].city.name},${
        resp._embedded.venues[0].country.name
      }<br>
              ${resp._embedded.venues[0].name}
            </p>
            <p class="info-item">
              <b>WHO </b>${resp.name}
            </p>
            ${
              resp?.priceRanges
                ?.map(
                  price => `<p class="info-item">
              <b>PRICES </b>${price.type} ${price.min}-${price.max} ${price.currency}
              <button>BUY TICKETS</button>
            </p>`
                )
                .join('') || '<b>PRICES</b>: No data'
            }
          </div>
          <button class="info__button">MORE FROM THIS AUTHOR</button>
        </div> `,
    ``
  );
}

// console.dir(resp),
