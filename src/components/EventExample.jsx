const EventExample = () => {

    const handleClick = () => {
        alert("You clicked")
    }

    const handleFormInput = (e) => {
        console.log(`Input Name : ${e.target.name}`)
        console.log(`Input Value : ${e.target.value}`)
    }

    const handleFormSubmision = (e) => {
        e.preventDefault()
    }

  return (
    <section>
      <h2>Event Example</h2>

      <p>
        Event listeners work exactly like those is JS but here we do it in a
        different way instead of selecting a particular element and then adding
        an event listener we write a function in our component then add the
        event in the tag as an attribute AND inside the brackets of the
        attribute we call the function{" "}
      </p>

      <button onClick={handleClick}>Click me to alert</button>

      <form action="" onSubmit={handleFormSubmision}>
        <h2>Typical form</h2>
        <input type="text" name="example" onChange={handleFormInput} />
        <button type="submit">submit</button>
      </form>
    </section>
  )
}
export default EventExample