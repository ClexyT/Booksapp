const Mid = ({ filteredBooks }) => {
  const numFilteredBooks = filteredBooks.length;

  return (
    <div>
      <h3 className='text-4xl text-center gap-1 m-3'>
        <span className='textoSpan'>{numFilteredBooks}</span> Libros disponibles
      </h3>
    </div>
  );
};

export default Mid;
