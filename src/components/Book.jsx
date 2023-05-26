const Book = (props) => {
  const {author, title, img, id, children } = props
  // console.log(props.book)
  // console.log(props)
  return (
    <article key={id} className="book">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      {console.log(title)}
      {/* {children} */}
    </article>
  )
}
export default Book

// const title = "Atomic Habits"
// const image = "../image/image-1.jpg"
// const author = "James Clear"
