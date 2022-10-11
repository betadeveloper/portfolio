const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { response } = require('express');

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {name: "Raigardas"})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
try {
    const hashedPasssword = await bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPasssword 
    })
    response.redirect('/login')
}catch {
    response.redirect('/register')
}
})


app.listen(3000);