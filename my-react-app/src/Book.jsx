import "./Book.css";

export default function Book({ bookName }) {
  const { name, price } = bookName;
  return (
    <h3 className="book">
      Book Name: {name}, book price: {price}
    </h3>
  );
}
