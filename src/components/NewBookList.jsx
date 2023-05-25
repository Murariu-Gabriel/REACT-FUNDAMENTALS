import Book from "./Book"
import "../index.css"

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

const NewBookList = () => {
  return <section className="booklist">
    <h2>About react rendering</h2>
    <p>Again we can't render objects in react. <br /> <br />
    And if we want to render multiple elements we can render arrays which means we can use array iterators to create lists of elements to be rendered
    </p>
  </section>
}
export default NewBookList
