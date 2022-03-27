const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
// esta variável abaixo, simula como se fosse um banco de dados de produtos de cd
const employees = [
  {
    id: "1",
    name: "The Album",
    value: 800,
    author: "Blackpink" 
  },
  {
    id: "2",
    name: "Blue Neighbourhood",
    value: 70,
    author: "Troye Sivan"
  },
  {
    id: "3",
    name: "Badlands",
    value: 200,
    author: "Halsey"
  },
  {
    id: "4",
    name: "Romance",
    value: 80,
    author: "Camila Cabello"
  }
];

app.get("/", function (req, res) {
  res.render("home", { cds });
});

app.get("/cd/:id", function (req, res) {
  const cd = cds[req.params.id -1];
  //formatar para a moeda Brasil
  employee.salary = new Intl.NumberFormat('pt-BR', 
       { style: 'currency', currency: 'BRL' }).format( cd.value);
  res.render("cd", { cds});
});

app.listen(3000);
