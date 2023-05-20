const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}
export default Book


const Image = () => {
  return <img src="../image/image-1.jpg" alt="book" />
}

const Title = () => {
  return <h3>Atomic habits</h3>
}

const Author = () => {
  return <h3>James Clear</h3>
}