import Book from "./Book"
import "../index.css"

// const arr = [{name:"something"},{age:false},]
const arr = [["ceva"], ["altceva"]]

const BookList = () => {
  return (
    <section className="book-list">
      {/* <Book title={"Atomic Habits"}/>
      <Book title={"alt titlu"}/>
      <Book title={"si inca un titlu"}/>
      <Book title={"last title"}/> */}
      {/* {[<Book title={"last title"} />, <Book title={"last title"} />]} */}
      {arr.map(el => el)}
    </section>
  )
}
export default BookList