import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Filters ({ selectedGenre, books, selectGenre, clearGenreSelection }) {
  const [data, setData] = useState(0)

  // manejar cambios en el rango de paginas
  const handlePageChange = (e) => {
    setData(e.target.value)
  }
  // let numberOfBooks = filteredBooks.length;
  console.log('Filtro en Filters:', selectedGenre)
  console.log('Libros filtrados en Filters:', books)

  return (
    <section className='flex items-center justify-center font-2xl font-bold right-0.5 text-white space-x-24 mt-2 form'>
      {/* <p>{numberOfBooks}</p> */}
      <div className='flex gap-1'>
        <label className='text-1xl'>Numero de páginas: </label>
        <input
          type='range'
          min='0'
          max='1200'
          step='10'
          value={data}
          onChange={handlePageChange}
        />
        <span>{data}</span>
      </div>

      <div className='label-input'>
        <label className='justify-items-end'>Filtrar por genero:</label>
        <select
          className='text-black cursor-pointer'
          value={selectedGenre || ''}
          onChange={(e) => selectGenre(e.target.value)}
        >
          <option value=''>Todos</option>
          <option value='Fantasía'>Fantasia</option>
          <option value='Ciencia ficción'>Ciencia Ficcion</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
          <option value='Novela'>Novela</option>
        </select>
        <button className='hover:underline' onClick={() => clearGenreSelection()}>Limpiar</button>
      </div>
    </section>
  )
}
