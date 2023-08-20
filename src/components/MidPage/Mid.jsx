import { useSelect } from '../../hooks/useSelect.js'
import { useEffect, useState } from 'react';

const Mid = () => {
  const { books } = useSelect();
  const [filteredBooksCount, setFilteredBooksCount] = useState(0)

  useEffect(() => {
    setFilteredBooksCount(books.length)
  }, [books])

  return (
    <div>
      <h3 className='text-4xl text-center gap-1'>
        <span className='text-amber-300'>{filteredBooksCount} Libros disponibles</span> 
      </h3>
    </div>
  );
}

export default Mid;
