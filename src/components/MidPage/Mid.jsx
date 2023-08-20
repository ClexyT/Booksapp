import { useSelect } from '../../hooks/useSelect.js'

const Mid = () => {
  const { books } = useSelect()

  return (
    <div>
      <h3 className='text-4xl text-center gap-1'>
        <span className='text-amber-300'>{books.length}</span> Libros disponibles
      </h3>
    </div>
  )
}

export default Mid
