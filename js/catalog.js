const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const current_location = window.location

let page = params.page
if (page == null) page = 1

page_selection = document.querySelector('.page_selection')


///
/////
///////
max_page = 6  // Нужно убрать после того, как будет сделана отрисовка товаров и будет понятно, сколько всего страниц
//////
/////
///

function makePageSelectionElem(required_page, elem_id, elem_text) {
    var page_selection_link = document.createElement('a')
    page_selection_link.setAttribute('href', current_location.origin + current_location.pathname + `?page=${required_page}`)
    page_selection_link.id = elem_id.toString()

    var page_selection_p_tag = document.createElement('p')
    page_selection_p_tag.classList.add('page_selection_elem')
    if (required_page == page && elem_id != 'start') {
        page_selection_p_tag.classList.add('selected_page')
    }
    page_selection_p_tag.textContent = elem_text

    page_selection_link.appendChild(page_selection_p_tag)

    page_selection.appendChild(page_selection_link)
}

function makePageSelectionStartElem() {
    makePageSelectionElem(1, 'start', 'В начало')
}

function makePageSelectionNextElem(current_page) {
    next_page = parseInt(current_page) + 1
    makePageSelectionElem(next_page, 'next', 'Дальше')
}

function makePageSelectionBackElem(current_page) {
    previous_page = parseInt(current_page) - 1
    makePageSelectionElem(previous_page, 'back', 'Назад')
}

function makePageSelectionElems(current_page, max_page) {
    current_page = parseInt(current_page)
    start_elem = current_page - 2
    end_elem = current_page + 2
    current_element = start_elem

    for (current_element; current_element <= end_elem; current_element++) {

        if (current_element < 1) continue
        else if (current_element > max_page) break

        else {
            makePageSelectionElem(current_element, current_element, current_element)          
        }
    }
}

function drawPageSelectionElems(max_page) {  // max_page - номер последней страницы
    makePageSelectionStartElem()

    if (page > 1) {
        makePageSelectionBackElem(page)
    }

    makePageSelectionElems(page, max_page)

    if (max_page != page) {
        makePageSelectionNextElem(page)
    }
}




drawPageSelectionElems(max_page)



