// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react Indisde it")
// {} is for adding attributes for the elements
//"h1",{id:"heading",xyz:"abc"},"Hello world from react Indisde it"
//these all are the props

//when you will do console.log(heading)
//it will show object 
//now render will take the object and put h1 tag inside tree
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//this is how you create nested elements

const heading = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"I'm an h1 tag")))

//creating more than one child
//then make array of children

// const heading = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"I'm an h1 tag"),
// React.createElement("h2",{},"I'm an h2 tag")]))

// const heading = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I'm an h1 tag"),
// React.createElement("h2",{},"I'm an h2 tag")]),
// React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"I'm an h1 tag"),
// React.createElement("h2",{},"I'm an h2 tag")])
// ])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();

//jsx is what it will make all this easy