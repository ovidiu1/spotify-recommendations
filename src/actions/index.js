let nextGenresId = 0 
export const selectedGenres = text =>({
    type: 'SELECTED_GENRE',
    id: nextGenresId++,
    text
})