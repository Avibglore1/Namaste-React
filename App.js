const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1",{},"This is h1 tag");
// root.render(heading)
const h1 = React.createElement('h1',{},"This is h1 tag");
const h2 = React.createElement('h2',{},"This is h2 tag");
const child1 = React.createElement('div',{id:'child1'},[h1,h2]);
const child2 = React.createElement('div',{id:'child2'},[h1,h2]);

// the below statement will add two children as immediate children of root
const app = React.createElement(React.Fragment, {}, [child1, child2]);
 root.render(app);