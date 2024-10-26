import Book from "./Book";

export default function Books({ bookList, list }) {
  console.log(bookList);
  console.log(list);
  return (
    <>
      <h2>Book List</h2>
      {bookList.map((book, i) => (
        <Book key={i} bookName={book} />
      ))}
    </>
  );
}
