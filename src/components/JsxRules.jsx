const JsxRules = () => {
  return (
    <section>
      <h2>JSX rules</h2>
      <p>
        JSX must must must return a single element and naturally it is a parent
        element which contains a component part of our project
        <br />
        <br />
        We should use in most cases Article and Section in our components so it
        will be semantically correct, we don't want to use div everywhere
        because div stands for division and it is used to divide content in a
        page
      </p>

      <h4>Grouping elements without adding nodes</h4>

      <p>
        So instead of Article or Section we can use a{" "}
        {"return <React.fragment> JSX</React.fragment>"} tag which closes like a
        normal tag, meaning it s no self closed. This React tag also has a
        shorthand which I personally would use instead {"return <>JSX</>"}{" "}
      </p>

      <h4>CamelCase property naming convention</h4>

      <p>
        In the html tags our attributes will have a camelCase naming convention.{" "}
        <br />
        <br />
        For example If we want to set an eventlistener onclick inside a tag we
        need to use the camelCase convention or it won t work and it would be
        onChange. This rule applies to everything that will be written inside
        tags.
      </p>

      <h4>Attributes have different names</h4>

      <p>
        For example the class attribute in React is written className and class
        is not the only one which has been changed, that s something to keep in
        mind.
      </p>

      <h4>Elements must be closed</h4>
      <p>
        In html you don't necessarily need to close self closing tags BUT in
        React we must must must close all the tags. <br />
        <br />
        An example would be {"<input />"} or {"<img />"}
      </p>

      <h4>Formatting</h4>
      <p>
        In your Component you have to return something, we established that very early. Now we need to format our return, if we are returning only one line of code we can just make a one liner {"return <div></div>"}. But in the moment we start to have multiple children inside an element we need to format return differently 
          {` return(
            <div>
              <img/>
              <p></p>
            </div>
         )`}
         Hope you get the idea, each tag should be on one line to make it look like html
      </p>
    </section>
  )
}
export default JsxRules
