import Book from "./Book"
import "../index.css"


// 

 const firstBook = {
  author: "David Goggins",
  title: "Can t hurt me",
  img: "https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg",
}
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
}


const BookList = () => {
  return (
    <section className="book-list">
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      >
        <p>I am special children</p>
      </Book>
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
      />
    </section>
  )
}
export default BookList

