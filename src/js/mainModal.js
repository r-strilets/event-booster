export function createModal(response) {
  return response.reduce((acc, resp) => {
    const arr = resp.images.map(image => image.width).sort((a, b) => b - a);

    const findImage = resp.images.filter(image => image.width === arr[0])[0]
      .url;

    return (
      acc +
      ` <div class="event-card ">
    <img src="${findImage}" width="132" higth="132" class="small_image"/>
    <div class="card-wrap">
              <img
                src="${findImage}"
                alt="photo"
                
                loading="lazy" class="big_image"/>
            <div class="info">
              <p class="info-item">
                <b>INFO</b><br>${resp.info || ' NO DATA'}
              </p>
              <p class="info-item">
                <b>WHEN</b><br>${resp.dates.start.localDate}<br>
                ${resp.dates.start.localTime || ''} ${
        resp.dates.timezone ? `(${resp.dates.timezone})` : ''
      }
              </p>
              <p class="info-item">
                <b>WHERE </b><br>${resp._embedded.venues[0].city.name},${
        resp._embedded.venues[0].country.name
      }<br>
                ${resp._embedded.venues[0].name}
              </p>
              <p class="info-item">
                <b>WHO </b><br>${resp.name}
              </p>
              ${
                resp?.priceRanges
                  ?.map(
                    price => `<p class="info-item">
                <b>PRICES </b><br> ${
                  price.type.charAt(0).toUpperCase() + price.type.slice(1)
                } ${price.min}-${price.max} ${price.currency}<br>
                <button class="buy__button">BUY TICKETS</button>
              </p>`
                  )
                  .join('') || '<b>PRICES</b>: No data'
              }
            </div>
            </div>
            <button class="info__button">MORE FROM THIS AUTHOR</button>

          </div> `
    );
  }, ``);
}

// console.dir(resp),
