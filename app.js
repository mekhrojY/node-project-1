// import express, { query } from "express"
// const server = express();
// const port = 8080;
// server.get("/:folder",(req, res) => {
//     const folder = req.params.folder;
//     const {name, pass} = req.query;
//     console.log(`Request param: ${folder}`);

//     console.log(`The requested queries: name: ${name}, pass: ${pass}`);
//     const data = {
//         reqParam: folder,
//         queryParam: {
//             name: name,
//             pass: pass
//         }

//     }
//     res.json(data);
//     // res.send(`The  requested queries: name: ${name}, pass: ${pass}`);

// })
// server.listen(port, () => {
//     console.log("server is running at port ", port);
// });

import express from "express";
import { v4 } from "uuid";
const server = express();
server.use(express.json());

const todoList = [];

server.get("/todo", (req, res) => {
  todoList.forEach((item) => console.log(item));
  res.status(200).json({ todo: todoList });
});

server.post("/todo/add", (req, res) => {
  const { title, desc } = req.body;
  const item = { id: v4(), title, desc };
  todoList.push(item);

  res.status(201).json({ success: true, item });
});

server.put("/todo/edit", (req, res) => {
  // request body ichidan title, desc va idni o'qib olamiz. 
  const { title, desc, id } = req.body;
// todoList arrayidan find metodi orqali berilgan idi bn bir xil bo'lgan obyektni topamiz.
// topilgan obyekti dataga beramiz.
  const data = todoList.find((val) => {
    console.log(val, id);
    console.log(val.id === id);

    if (val.id === id) {
      return val;
    }
  });
  // bu javob qaytarish joyi!
  res.status(200).json({ success: true, todo: todoList });
});

server.listen(8080, () => {
  console.log("server run port 8080");
});
