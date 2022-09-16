export function createMarkup(events) {
  return events
    .map(
      event => `<div class="gallery__item" data-id="${event.id}">  
  <picture
        class="gallery__img"
      >
        <source
          srcset="
          ${event.images[1].url},          
          "
          media="(min-width:1280px)"
        />
        <source
          srcset="
          ${event.images[1].url},            
          "
          media="(min-width:768px)"
        />
        <source
          srcset=" 
          ${event.images[1].url},           
          "
          media="(max-width:767px)"
        />
        <img
          src="./images/teacher/elena-moreva-mob.jpg"
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
      <use href=""></use>
    </svg>
    ${event._embedded.venues[0].name}
  </p>
</div>
`
    )
    .join('');
}
{
  /* <img src="${event.images[0].url}" alt="event.name" class="gallery__img" />; */
}
