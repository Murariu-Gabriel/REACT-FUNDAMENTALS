const Book = (props) => {
  const {title, img, author} = props
  return (
    <article className="book">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      {console.log(title)}
    </article>
  )
}
export default Book

// const title = "Atomic Habits"
// const image = "../image/image-1.jpg"
// const author = "James Clear"
