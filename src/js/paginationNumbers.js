const paginationIteam = document.querySelector('.pagination');
let maxPage;
export function createPaginationMarcup(totalPages, currentPage) {
  let elemLi = '';
  if (totalPages > 50) {
    maxPage = 50;
  } else {
    maxPage = totalPages;
  }
  if (totalPages <= 6 && currentPage === 0) {
    for (let i = 0; i < totalPages; i += 1) {
      elemLi += `<li class="pagination__item"><button  class='pagination__btn' value="${currentPage}" type="button"
       >${currentPage + 1}</button></li>`;
      currentPage += 1;
    }
  } else if (totalPages <= 6 && currentPage !== 0) {
    for (let i = 0; i < totalPages; i += 1) {
      elemLi += `<li class="pagination__item"><button  class='pagination__btn' value="${i}" type="button"
       >${i + 1}</button></li>`;
    }
  } else if (totalPages > 6 && currentPage === 0) {
    elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>`;
    for (let i = 1; i < 6; i += 1) {
      currentPage += 1;
      elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${currentPage}" type="button">${
        currentPage + 1
      }</button></li>`;
    }
    elemLi += `<li class="pagination__item"><button class='pagination__btn' type="button">...</button></li>
    <li class="pagination__item"><button class='pagination__btn' value="${
      maxPage - 1
    }" type="button">${maxPage}</button></li>`;
  } else if (totalPages > 6 && currentPage <= 3) {
    for (let i = 0; i < 6; i += 1) {
      currentPage += 1;
      elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${i}" type="button">${
        i + 1
      }</button></li>`;
    }
    elemLi += `<li class="pagination__item"><button class='pagination__btn' type="button">...</button></li>
    <li class="pagination__item"><button class='pagination__btn' value="${
      maxPage - 1
    }" type="button">${maxPage}</button></li>`;
  } else if (totalPages > 6 && currentPage > 3 && currentPage <= 44) {
    elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>
    <li class="pagination__item"><button class='pagination__btn' type="button">...</button></li>`;
    for (let i = 1; i < 6; i += 1) {
      elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${
        currentPage - 2
      }" type="button">${currentPage - 1}</button></li>`;
      currentPage += 1;
    }
    elemLi += `<li class="pagination__item"><button class='pagination__btn' type="button">...</button></li>
    <li class="pagination__item"><button class='pagination__btn' value="${
      maxPage - 1
    }" type="button">${maxPage}</button></li>`;
  } else if (totalPages > 6 && currentPage > 44) {
    elemLi += `<li class="pagination__item"><button class='pagination__btn' value="0" type="button">1</button></li>
    <li class="pagination__item"><button class='pagination__btn' type="button">...</button></li>`;
    for (let i = 0; i < 6; i += 1) {
      elemLi += `<li class="pagination__item"><button class='pagination__btn' value="${
        i + 44
      }" type="button">${i + 45}</button></li>`;
    }
  }

  paginationIteam.innerHTML = elemLi;
}
