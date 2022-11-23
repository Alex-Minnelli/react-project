export function filterFilmsByDirector(list, searchDirector){
    if (searchDirector === '') return list;
    return list.filter(film => film.director === searchDirector);
}

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ''))]
}