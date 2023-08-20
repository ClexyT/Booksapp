import { useState } from 'react';
import { useSelect } from '../../hooks/useSelect.js'; 

export function Filters() {
  const { selectedGenre,  books, selectGenre, clearGenreSelection } = useSelect();

  const [data, setData] = useState(0);

  // manejar cambios en el rango de paginas
  const handlePageChange = (e) => {
    setData(e.target.value);
  };

  return (
    <section className='flex items-center justify-center font-2xl font-bold right-0.5 text-white space-x-96 form'>
      <div className='flex gap-2'>
        <label className='text-2xl'>Number of pages:</label>
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
        <label className='justify-items-end'>Filter by genre</label>
        <select
          className='text-black'
          value={selectedGenre || ''}
          onChange={(e) => selectGenre(e.target.value)}
        >
          <option value=''>All</option>
          <option value='Fantasía'>Fantasy</option>
          <option value='Ciencia ficción'>Fiction</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
          <option value='Novela'>Novela</option>
        </select>
        <button onClick={() => clearGenreSelection()}>Clear Genre</button>
      </div>
    </section>
  );
}
