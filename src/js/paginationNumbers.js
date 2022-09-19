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

// export function createPaginationMarcup(totalPages, currentPage) {
//   if (totalPages > 50) {
//     maxPage = 50;
//   } else {
//     maxPage = totalPages;
//   }

//   const midPagination = 5;
//   const borderPagination = 6;
//   if (totalPages <= 6 && currentPage === 0) {
//     for (i = 0; i < totalPages; i += 1) {
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${currentPage}" type="button"
//        >${currentPage + 1}</button></li>`;
//       currentPage += 1;
//     }

//   } else if (totalPages <= 6 && currentPage !== 0) {
//     for (i = 0; i < totalPages; i += 1) {
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${i}" type="button"
//        >${i + 1}</button></li>`;
//     }

//   } else if (totalPages > 6 && currentPage === 0) {
//     elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>`;
//     for (i = 1; i < 6; i += 1) {
//       currentPage += 1;
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${currentPage}" type="button">${
//         currentPage + 1
//       }</button></li>`;
//     }

//     elemLi += `<li class="pagination__item"><button class='pagination__btn pagination__dots' type="button" disabled>...</button></li>
//     <li class="pagination__item"><button class='pagination__btn' value="${
//       maxPage - 1
//     }" type="button">${maxPage}</button></li>`;
//   }

// else if (totalPages > 6 && currentPage <= 3) {
//     for (i = 0; i < 6; i += 1) {
//       currentPage += 1;
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${i}" type="button">${
//         i + 1
//       }</button></li>`;
//     }
//     elemLi += `<li class="pagination__item"><button class='pagination__btn pagination__dots' type="button" disabled>...</button></li>
//     <li class="pagination__item"><button class='pagination__btn' value="${
//       maxPage - 1
//     }" type="button">${maxPage}</button></li>`;
//   }

// else if (totalPages > 6 && currentPage > 3 && currentPage <= 44) {
//     elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>
//     <li class="pagination__item"><button class='pagination__btn pagination__dots' type="button" disabled>...</button></li>`;
//     for (i = 1; i < 6; i += 1) {
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${
//         currentPage - 2
//       }" type="button">${currentPage - 1}</button></li>`;
//       currentPage += 1;
//     }
//     elemLi += `<li class="pagination__item"><button class='pagination__btn pagination__dots' type="button" disabled>...</button></li>
//     <li class="pagination__item"><button class='pagination__btn' value="${
//       maxPage - 1
//     }" type="button">${maxPage}</button></li>`;
//   }

// else if (totalPages > 6 && currentPage > 44) {
//     elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>
//     <li class="pagination__item"><button class='pagination__btn pagination__dots' type="button " disabled>...</button></li>`;
//     for (i = 0; i < 6; i += 1) {
//       elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${
//         i + 44
//       }" type="button">${i + 45}</button></li>`;
//     }
//   }
//
// }
