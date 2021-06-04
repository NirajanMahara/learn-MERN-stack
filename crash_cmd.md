…or create a new repository on the command line
___
`echo "# LEARN-MERN-STACK" >> README.md`

`npm init -y `

`git init` with config

`git add README.md`

`git commit -m "first commit"`

`git branch -M main`

`git remote add origin https://github.com/NirajanWEB/LEARN-MERN-STACK.git`

`git push -u origin main`
___

…or push an existing repository from the command line

`git remote add origin https://github.com/NirajanWEB/LEARN-MERN-STACK.git`

`git branch -M main`

`git push -u origin main`
___

`npm init`

[FullStack setup (Node.js, React.js and MongoDB)](https://dev.to/pacheco/my-fullstack-setup-node-js-react-js-and-mongodb-2a4k)

[Getting Started with the MERN Stack](https://morioh.com/p/9f11aba73daf)

In this project we use Express.js, a very popular framework for Node.js applications.

`npm install express --save`

___

body-parser is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

`npm install body-parser --save`

___

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

`npm install mongoose --save`

___

Concurrently allows us to run multiple npm commands at the same time.

Install
The tool is written in Node.js, but you can use it to run any commands.

`[sudo] npm install -g concurrently`

or if you are using it from npm scripts:

`npm install -D concurrently --save`

___

nodemon is a package that runs the node.js application and listen to any file change, updating the entire app.

`npm i -D nodemon`

---
`app.listen(5000, () => {
  console.log(`Server running at 5000`);
});`

Running on localhost:` http://localhost:5000/`







___
`[sudo] npm install --save express body-parser mongoose concurrently`

`[sudo] npm i express body-parser mongoose concurrently`


___
[The Query & Answer System for the Ambitious Developer ||
Develop faster, master your code, understand more, grow in your career.](https://www.codegrepper.com/?gclid=Cj0KCQjw--GFBhDeARIsACH_kdZ6InEzgM3jKT7oyMBLmW29JgkCcx-4pUWhfCE3XtEn5-V2GVRsoWUaAoUHEALw_wcB)

https://stackoverflow.com/questions/48864985/vscode-single-to-double-quote-automatic-replace