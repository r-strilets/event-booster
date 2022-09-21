const paginationIteam = document.querySelector('.pagination');
const midlNumber = 5;
const maxNumber = 6;
const sideLimiter = 4;
export function createPaginationMarcup(totalPages, currentPage) {
  let elemLi = '';
  let i;
  let maxPage;
  if (totalPages > 50) {
    maxPage = 50;
  } else {
    maxPage = totalPages;
  }
  const firstLi =
    '<li class="pagination__item"><button class="pagination__btn" value="0" type="button">1</button></li>';
  const startString =
    '<li class="pagination__item"><button class="pagination__btn"';
  const midString = 'type="button">';
  const endString = '</button></li>';
  const gap =
    '<li class="pagination__item"><button class="pagination__btn pagination__dots" type="button" disabled>...</button></li>';
  if (totalPages <= maxNumber) {
    for (i = 0; i < totalPages; i += 1) {
      elemLi += `${startString} value="${i}" ${midString}${i + 1}${endString}`;
    }
  } else if (totalPages > maxNumber) {
    if (currentPage >= 0 && currentPage < sideLimiter) {
      for (i = 0; i < midlNumber; i += 1) {
        elemLi += `${startString} value="${i}" ${midString}${
          i + 1
        }${endString}`;
      }
      elemLi += gap;
      elemLi += `${startString} value="${
        maxPage - 1
      }" ${midString}${maxPage}${endString}`;
    } else if (
      currentPage >= sideLimiter &&
      currentPage < maxPage - sideLimiter
    ) {
      elemLi += firstLi;
      elemLi += gap;
      for (i = 0; i < midlNumber; i += 1) {
        elemLi += `${startString} value="${currentPage - 2}" ${midString}${
          currentPage - 1
        }${endString}`;
        currentPage += 1;
      }
      elemLi += gap;
      elemLi += `${startString} value="${
        maxPage - 1
      }" ${midString}${maxPage}${endString}`;
    } else if (currentPage >= maxPage - sideLimiter) {
      elemLi += firstLi;
      elemLi += gap;
      for (i = 0; i < midlNumber; i += 1) {
        elemLi += `${startString} value="${
          maxPage - sideLimiter + i - 1
        }" ${midString}${maxPage - sideLimiter + i}${endString}`;
      }
    }
  }
  paginationIteam.innerHTML = elemLi;
}
