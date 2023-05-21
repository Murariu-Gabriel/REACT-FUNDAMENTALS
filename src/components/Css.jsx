const Css = () => {
  return (
    <section>
      <h2 style={{ color: "green" }}>Styling in React</h2>
      <p>
        Besides the normal external style sheets that we import naturally we
        also have inline styles. I react these work in the same way with a
        catch, these need an extra curly parenthesis {`style={{color: "red"}}`} and also the value of the css attribute needs to be in commas 
        <br /><br />
        What is very interesting about this type of styling is that the value of the style is actually an object meaning color is the key and red is the value
      </p>

      <h4>Other mentions</h4>
      <p>Something worth mentioning is that some external libraries use inline styles that means you have to keep that in mind if Something does't work externally </p>
    </section>
  )
}
export default Css