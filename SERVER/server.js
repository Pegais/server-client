const express = require('express')
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cors = require('cors')
const bcrypt = require('bcrypt');
var session = require('express-session');
const nodemailer = require('nodemailer')
const alert = require('alert')


const db = mysql.createPool({    // we can also use createPool to make our application production grade.
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pegabase',
})


app.use(session({
    secret: 'secret',
    resave: true,
    saveUnintialized: true
}))

app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))// middleware executed

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'snehal.mishra@pepcoding.com',
//         pass: 'Snehal@2401'
//     }
// });



app.post('/Signup', async (req, res) => {

    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);//using byrypt to get hashed password stored in database
    // const age = req.body.age;
    db.getConnection(async (err, connection) => {


        if (err) throw (err)

        // whenever this is called we want to search in database.
        const sqlSearch = "SELECT*FROM userlogin WHERE email =?"
        const search_query = mysql.format(sqlSearch, [email]);
        // whenever this is called we want to insert something to database;
        const sqlInsert = "INSERT INTO userlogin(email,password) VALUES(?,?)"
        const insert_query = mysql.format(sqlInsert, [email, password])
        db.query(sqlInsert, [email, password], (req, res) => {
            console.log(res)//to see if query works right
        })


        // Now askking the connection for sql database search for the given email in login 
        await connection.query(search_query, async (err, result) => {

            if (err) throw (err)
            console.log("-------> Searching Results");
            console.log(result.length);

            if (result.length != 0) {
                connection.release()// if given result matches the details in datbase release connection  from database,
                console.log("-------> User already exists");

            }
            else {
                await connection.query(insert_query, (err, result) => {
                    connection.release();

                    if (err) throw (err)
                    console.log("--------> Created new User");
                    res.redirect('http://localhost:3000/home')


                })
            }

        })
    })
    // var mailOptions = {
    //     from: 'do.no.replu@outlook.com',
    //     to: email,
    //     subject: ' Welcome to PEGaBase',
    //     text: 'Sign in Attempted',
    //     // attachments: [
    //     //     {
    //     //         filename: 'Vaccination.xlsx',
    //     //         path: __dirname + '/Vaccination.xlsx'
    //     //     }
    //     // ]
    // };
    // transporter.sendMail(mailOptions, function (err, data) {
    //     if (err) {
    //         console.log('Unable to send mail', err);
    //     } else {
    //         console.log('Email send successfully');
    //     }
    // });

})

app.post('/Login', async (req, res) => {
    const email = req.body.email;
    // const password = awreq.body.password, 10)
    const password = req.body.password;


    db.getConnection(async (err, connection) => {
        if (err) throw (err);
        const sqlSearch = "SELECT*FROM userlogin WHERE email =?"
        const search_query = mysql.format(sqlSearch, [email]);  // searching for the userEmail and its password in database storage.

        await connection.query(search_query, async (err, result) => {
            connection.release();
            if (err) throw (err);

            if (result.length == 0) {
                console.log("--------> User Does Not Exists");
                alert('Please Signup ,you are not regisered with us!')

                // res.send('Please Signup ,you are not regisered with us!')
                res.redirect("http://localhost:3000/")

            } else {
                const hashedPassword = result[0].password // get hashed password from the result;

                if (await bcrypt.compare(password, hashedPassword)) {


                    console.log('-------> Login Successful');
                    res.redirect('http://localhost:3000/home')

                } else {
                    alert("-------> Password Incorrect")
                    res.redirect("http://localhost:3000/")
                }
            }

        })


    })

})


// QUESTION TAG BUTTON POST

app.post('/query',(req, res) => {

    const title = req.body.title;
    const body = req.body.body;
    const tag = req.body.tag;
    // const age = req.body.age;



    // if (err) throw (err)

    // whenever this is called we want to search in database.

    // whenever this is called we want to insert something to database;
    const sqlInsert = "INSERT INTO question(title,body,tag) VALUES(?,?,?)"

    db.query(sqlInsert, [title, body, tag], (err,result ) => {
        console.log(res)
        alert('Query inserted successfully')//to see if query works right
        res.redirect('http://localhost:3000/')
    })


  
})






app.get('/question', (req, res) => {
    const sqlSelect = "SELECT * FROM question ORDER BY id DESC";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})








app.get('/', (req, res) => {
    res.send("server running on this route")
})

app.listen(5000, () => {
    console.log('server running on 5000')
})