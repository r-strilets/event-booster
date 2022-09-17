const query = {
  desktop: 'TABLET_LANDSCAPE_LARGE_16_9',
  tablet: 'TABLET_LANDSCAPE_16_9',
  mobile: 'TABLET_LANDSCAPE_3_2',
  desktopRetina: 'RETINA_LANDSCAPE_16_9',
  tabletRetina: 'RETINA_PORTRAIT_16_9',
  mobileRetina: 'RETINA_PORTRAIT_3_2',
  eventDetail: 'EVENT_DETAIL_PAGE_16_9',
  recomendation: 'RECOMENDATION_16_9',
  artist: 'ARTIST_PAGE_3_2',
  custom: 'CUSTOM',
};
function searchSuitableImg(event, params) {
  let searchImg;
  event
    .map(ev => ev.url)
    .map(e => {
      if (e.includes(params)) {
        searchImg = e;
        return searchImg;
      }
    });
  return searchImg;
}
export function createMarkup(events) {
  let id = 0;
  return events
    .map(
      event => `<li class="gallery__item" id='${event.id}'> 
      <picture
        class="gallery__img"
      >
        <source
          srcset="
          ${searchSuitableImg(event.images, query.desktop)} 1x,
          ${searchSuitableImg(event.images, query.desktopRetina)} 2x
          "
          media="(min-width:1280px)"
        />
        <source
          srcset="
          ${searchSuitableImg(event.images, query.tablet)} 1x,
          ${searchSuitableImg(event.images, query.tabletRetina)} 2x          
          "
          media="(min-width:768px)"
        />
        <source
          srcset=" 
          ${searchSuitableImg(event.images, query.mobile)} 1x,
          ${searchSuitableImg(event.images, query.mobileRetina)} 2x          
          "
          media="(max-width:767px)"
        />
        <img
          src="${searchSuitableImg(event.images, query.recomendation)},
          }"
          alt="photo"
          loading="lazy"
        />
      </picture>  
  <h2 class="gallery__caption">${event.name}</h2>
  <p class="gallery__date">
    <time datetime="${event.dates.start.localDate}">
      ${event.dates.start.localDate}
    </time>
  </p>
  <a href='https://www.google.com/search?q=${
    event?._embedded?.venues[0].name
  }&oq=${
        event?._embedded?.venues[0].name
      }k&aqs=chrome..69i57j0i512l2j0i22i30l7.661j0j7&sourceid=chrome&ie=UTF-8'class="gallery__location"
  class='gallery__location'
  target="_blank"
  rel="noopener noreferrer nofollow"
  title="find location in google">
 <svg class="gallery__icon" width="10px" height="10px">
      <use href="/sprite.f14d31f7.svg#icon-geolocation"></use>
    </svg>
    ${event?._embedded?.venues[0].name}</a>
</li>
`
    )
    .join('');
}
