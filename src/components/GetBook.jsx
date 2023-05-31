import { books } from "./books"
import Book from "./Book"

const GetBook = () => {

const findBook = (id) => {
 const book = books.find(book => book.id === id)
 console.log(book)
}


  return (
    <section>
      <h2>Find Book function</h2>

      <p>So here we have a function that takes id asa a parameter and it finds my book based on the id and returns it. We prop drill it towards the book component. Now since every book component has a unique id which we is going to get passed in that function we are going to get a return with the book that is displayed in each different component individually. <br /> <br /> The GOTCHA here is the fact that we cannot call functions inside an event it will consider it like a normal js function calling and will call it on load and not on clic khow we want it to do so we wrap it in an callback function innside the event and that prevents it from calling on load. </p>
      {books.map(book => {
        return <Book {...book} key={book.id} findBook={findBook} />
      })}
    </section>
  )
}
export default GetBook
