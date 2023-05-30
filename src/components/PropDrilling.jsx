import { books } from "./NewBookList"
import Book from "./Book"

const PropDrilling = () => {
  const message = "shake and bake"
  
  const displayMessage = () => {
    console.log(message)
  }
  
  return (
    <section>
      <h2>Prop Drilling</h2>
      <p>Here we have an example of prop drilling. In this new component I have made a function that displays a message in the console when the button is clicked. This function is located in this component but called in the book component. Here I passed the function from this component to the book component and you do that exactly like you would pass any other prop, you just go to the called book component inside this component and pass as assign the function to a variable that we are going to access in the book component to call the function.</p>

        {books.map(book =>{
           return (
             <Book {...book} key={book.id} displayMessage={displayMessage} />
           )
        })}
    </section>
  )
}
export default PropDrilling