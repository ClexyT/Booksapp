const Mid = ({ filteredBooks }) => {
  const numFilteredBooks = filteredBooks.length;

  return (
    <div>
      <h3 className='text-4xl text-center gap-1'>
        <span className='text-amber-300'>{numFilteredBooks}</span> Libros disponibles
      </h3>
    </div>
  );
};

export default Mid;
