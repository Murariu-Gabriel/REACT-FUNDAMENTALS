import Book from "./Book"
import "../index.css"

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
export default BookList