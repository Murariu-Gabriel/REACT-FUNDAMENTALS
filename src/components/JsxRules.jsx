const JsxRules = () => {
  return (
    <section>
        <h2>JSX rules</h2>
        <p>
          JSX must must must return a single element and naturally it is a parent element which contains a component part of our project
          <br /><br />
          We should use in most cases Article and Section in our components so it will be semantically correct, we don't want to use div everywhere because div stands for division and it is used to divide content in a page
        </p>

        <h4>Grouping elements without adding nodes</h4>

        <p>So instead of Article or Section we can use a {"return <React.fragment> JSX</React.fragment>"} tag which closes like a normal tag, meaning it s no self closed. This React tag also has a shorthand which I personally would use instead {"return <>JSX</>"} </p>

        <h4>CamelCase property naming convention</h4>
    </section>
  )
}
export default JsxRules