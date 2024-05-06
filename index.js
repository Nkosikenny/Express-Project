//load the Express package as a module
const express=require("express");

//Access the exported service
const app=express();

//Return a string for requests to the root URL("/")
app.get("/", (request,response)=>{
    response.send("Hello from Express!");
});

//Define an article list
const articles=[
    {id:1, title:"First article", content:"Hello World!"},
    {
      id: 2,
      title:"Lorem ipsum",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor.",
 },

 {
    id:3,
    title:"Lorem ipsum in french",
    content:"J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
 }
];

//Return the article list in JSON format
app.get("/api/articles",(request,response)=>{
    response.json(articles);
});

//Start listening to incoming requests
//If process.env.PORT is not defined, port number 3000 is used
app.listen(3000, ()=>{
    console.log(`Your app is listening on port 3000`);
});

//Enabling Cross-origin requests-CORS on server
 app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requasted-With, Content-Type, Accept"
    );

    next();
 });