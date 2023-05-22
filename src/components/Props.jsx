const Props = () => {
  
  return (
    <section>
        <h2>Props</h2>
        <p> Props is an empty object in which we pass values through components so we can access them dynamically.
            <br /><br /> So essentially props are passed down in the component like this {"<Component image={image} />"} <br /><br />
         - image={"{image}"} This is a key/value par passed down in the props object <br /><br />
         If the props exists it will be return if not it return undefined
        
        
        </p>   
    </section>
  )
}
export default Props