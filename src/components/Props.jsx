const Props = () => {
  
  return (
    <section>
        <h2>Props</h2>
        <p> Props is an empty object in which we pass values through components so we can access them dynamically.
            <br /><br /> So essentially props are passed down in the component like this {"<Component image={image} />"} <br /><br />
         - image={"{image}"} This is a key/value par passed down in the props object <br /><br />
         If the props exists it will be return if not it return undefined
        <br /><br />
        - Here wo also have a small problem if we invoke the same component multiple times we have to give props to each one of them
        </p>   

        <h2>INTERESTING FACT ABOUT COMPONENTS</h2>
        <p>You can't return an object in react it won't run, like in this case: We have a component in which we return a section we open curly brackets to go in js land and we iterate through an array of objects and return objects: <br /> <br />
        {"const Component = () => { return (<section> {array.map(el => el)} </section>)}"}
        <br /> <br />
        If the array return objects react will refuse to work
        <br /> <br />
        If we return an array of elements they will be displayed like: <br /> <br />

        {"{['elemen1', 'element2]}"} this will work and will display in our component
        
        </p>
    </section>
  )
}
export default Props