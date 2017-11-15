//if we want this page to render a App component into root component
//of the views/index.ejs page, we create the react compnent and do
//ReactDom.render here on this page.
//this page will be invoked after the views/index.ejs has been looaded into
//browser 
 

//this page if placed in /public folder can be directlyh linked from
//views/index.ejs. If we use react, then webpack would make this the
//source (entry) file from which to transpile(create) the public/bundle.js
//file, which the views/index.ejs file will link to instead of the now
//obsolete public/index.js file. THE PUBLIC/INDEX.JS FILE WILL BE MOVED 
//TO THE SRC/INDEX.JS LOCATION, SO ONLY THE PUBLIC/BUNDLE.JS FILE 
//WILL REMAIN IN THE PUBLIC FOLDER SO IT CAN BE  LINKED WITH THE 
//VIEWS/INDEX.EJS , ALONG WITH OTHER STATIC FILES E.G PNG, CSS ...

//here, we just do a simple text replacement of the 'root' div on the 
//views/index.ejs page. We could render a react component instead, if
//that's what we wanted. if we do that, we need to import the 
//react modules, and compose a react component, e.g <App/>
let root = document.getElementById('root')

root.innerHTML =
 `this is NEW10 text set by src/index.js, replacing old text in
  index.ejs. This is src/index.js file, but now is public/bundle.js file
  and public/bundle.js file is now linked to views/index.ejs
   instead of the normal public/index.js which now has been moved to 
  src/index.js because it is no longer linked to views/index.ejs so no
  need for it to be in the /public folder. we can leave it in the /public
  folder if we wanted to, but it is not linked to, it is only used as 
  a source  to compile the public/bundle.js file`