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

      <form action="">
        <h2>Typical form</h2>
        <input type="text" name="example" onChange={handleFormInput} />
        <button type="submit" onClick={handleFormSubmision}>
          submit
        </button>
      </form>

      <p>
        Up here we have the form has an event of onSubmit which prevents the
        form from submiting
        <br />
        Another solution would be to add that the handleForm function to the
        submit button, doing exactly the same thing preventing the form from
        submiting
      </p>

      <h2>MIND GRENADE</h2>

      <p>
        We can use arrow functions inside the tag event listener atribute <br />
        EXAMPLE: onClick={"{()=>console.log('this is console.log')}"}
        <br />
        <button onClick={() => alert("you clicked the button")}>
          Click me
        </button>
        <br />
        <br />
        You can even access the event like you would normally outside event
        <input type="text" onChange={(e) => alert(e.target.value)} />
        
      </p>


      <h2>SECOND MIND GRENADE</h2>

      <p>If we add a button and an event listener in a component that displays the title of a book for example, that event is set up for that component exclusively meaning that each component we call will have different outputs based on the component prop information</p>
    </section>
  )
}
export default EventExample