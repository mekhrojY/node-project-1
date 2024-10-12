import express, { query } from "express"
const server = express();
const port = 3000;
server.get("/:folder",(req, res) => {
    const folder = req.params.folder;
    const {name, pass} = req.query;
    console.log(`Request param: ${folder}`);
    
    console.log(`The requested queries: name: ${name}, pass: ${pass}`);
    const data = {
        reqParam: folder, 
        queryParam: {
            name: name,
            pass: pass
        }


    }
    res.json(data);
    // res.send(`The  requested queries: name: ${name}, pass: ${pass}`);

})
server.listen(port, () => {
    console.log("server is running at port ", port);
});