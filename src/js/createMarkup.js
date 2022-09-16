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
function searchSuitableImg(events, params) {
  let searchImg;
  events
    .map(event => event.images)
    .map(event =>
      event
        .map(ev => ev.url)
        .map(e => {
          if (e.includes(params)) {
            searchImg = e;
            return searchImg;
          }
        })
    );
  return searchImg;
}
export function createMarkup(events) {
  return events
    .map(
      event => `<a href='#' class="gallery__item"> 
  <picture
        class="gallery__img"
      >
        <source
          srcset="
          ${searchSuitableImg(events, query.desktop)} 1x,
          ${searchSuitableImg(events, query.desktopRetina)} 2x
          "
          media="(min-width:1280px)"
        />
        <source
          srcset="
          ${searchSuitableImg(events, query.tablet)} 1x,
          ${searchSuitableImg(events, query.tabletRetina)} 2x          
          "
          media="(min-width:768px)"
        />
        <source
          srcset=" 
          ${searchSuitableImg(events, query.mobile)} 1x,
          ${searchSuitableImg(events, query.mobileRetina)} 2x          
          "
          media="(max-width:767px)"
        />
        <img
          src="${searchSuitableImg(events, query.recomendation)},
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
  <p class="gallery__location">
    <svg class="gallery__icon" width="7px" height="10px">
      <use href="./images/sprite.svg#icon-geolocation"></use>
    </svg>
    ${event._embedded.venues[0].name}
  </p>
</a>
`
    )
    .join('');
}
