 

const parent = React.createElement("div",
  {id:"parent"},
  React.createElement("div",{id:"Child"},[
    React.createElement("h1",{id:"child 1"},"I m h1 tag"),
    React.createElement("h1",{id:"child 2"},"I m h2 tag"),],
    React.createElement("div",{id:"Child 2"},[
      React.createElement("h1",{id:"child 3"},"I m h1 tag"),
      React.createElement("h1",{id:"child 4"},"I m h2 tag"),])
  )); 
   console.log(parent);

// const heading = React.createElement("h1",{},"Hello world from React!")
  
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);
   