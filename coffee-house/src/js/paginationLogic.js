
export function paginationSLideRight(){
    let activePagination = document.querySelector('.pagination__stick_active');
    const paginationContainer = document.querySelector('.pagination');

    if (activePagination.nextElementSibling === null){
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
        return;
    }
    activePagination.classList.toggle('pagination__stick_active');
    activePagination.nextElementSibling.classList.toggle('pagination__stick_active');
  }
  
  export function paginationSLideLeft (){
    let activePagination = document.querySelector('.pagination__stick_active');
    const paginationContainer = document.querySelector('.pagination');

    if (activePagination.previousElementSibling === null){
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
        return;
    }
    activePagination.classList.toggle('pagination__stick_active');
    activePagination.previousElementSibling.classList.toggle('pagination__stick_active');
  }