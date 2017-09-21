import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //pars form input!

const books = [];

app.get("/", (req, res) => {
    const model = {
        model: books
    };
    res.render("home/index", model);
    /*const pathToFile = __dirname + "/views/index.html";
    res.sendFile(pathToFile);*/
    //res.send("It works!");
});

/*app.get("/books", (req, res) => {
    res.send(books);
});*/

app.get("/books/add", (req, res) => {
    res.render("books/book-add");
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id; //type String

    for(const book of books) {
        if(book.id == id) { //use string and number
            const model = {
                model: book
            };
            return res.render("books/book", model);
            //return res.send(b);
        }
    }

    return res.status(404)
        .send({error: "Book not found"});
});

app.post("/books", (req, res) => {
    let body = req.body;
    let book = {
        id: books.length + 1,
        title: body.title
    };

    books.push(book);
    res.redirect("/");
});

app.listen(3000, 
    () => console.log("Magic happens at : 3000"));