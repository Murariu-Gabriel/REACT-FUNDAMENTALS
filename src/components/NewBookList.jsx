import Book from "./Book"
import "../index.css"

const books = [
  {
    author: "David Goggins",
    title: "Can t hurt me",
    img: "https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg",
    id: 1
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2
  }

]

const object = { something: "something", idk: "value", name: "name?" } // this won t render if you try to put in curly brackets

const array = ["value", "vegan food truck", "hamburger"]

const NewBookList = () => {
  return (
    <section className="booklist">
      <h2>About react rendering</h2>
      <p>
        Again we can't render objects in react. <br /> <br />
        And if we want to render multiple elements we can render arrays which
        means we can use array iterators to create lists of elements to be
        rendered
      </p>
      {/* {object}  This won t work */}
      {array.map((el) => {
        console.log(el)
        return <h5>{el}</h5>
      })}

      <h3>Proper list</h3>
      <p>Here we have a method where we map through an array of objects and for each object we return the book component in which we pass the object values by destructuring it above</p>
      <br />
      <p>- Or we can bass the entire object</p>

      {books.map(book => {
        const {author, title, img } = book

        return <Book book={book} />
      })}

    </section>
  )
}
export default NewBookList
