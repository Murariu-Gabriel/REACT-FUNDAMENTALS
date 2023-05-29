import Component from "./components/MyFirstComponent"
import ES7 from "./components/ES7"
import JsxRules from "./components/JsxRules"
import BookList from "./components/BookList"
import Css from "./components/Css"
import Props from "./components/Props"
import NewBookList from "./components/NewBookList"
import EventExample from "./components/EventExample"

import "./index.css"
import PropDrilling from "./components/PropDrilling"
const App = () => {
  return (
    <>
      <Component />
      <ES7 />
      <JsxRules/>
      <BookList/>
      <Css/>
      <Props/>
      <NewBookList/>
      <EventExample/>
      <PropDrilling/>
    </>
  )
}

export default App
