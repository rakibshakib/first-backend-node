const express = require('express')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('First Node js and express, Im excited to learn node')
})

const users = [
  {"id": 0, "name": "Rakibul Islam", "email": "rakibshakib74@gmail.com", "address": "Dhaka, Mirpur 10", "phone": "013456789"},
  {"id": 1, "name": "Soriful Islam", "email": "sorifahmed@gmail.com", "address": "Khulna, Mirpur 10", "phone": "013456789"},
  {"id": 2, "name": "Kader Khan", "email": "kadermolla@gmail.com", "address": "Dhaka, Mirpur 10", "phone": "013456789"},
  {"id": 3, "name": "Limon Sheikh", "email": "limon123456@gmail.com", "address": "Rajshahi, Mirpur 10", "phone": "013456789"},
  {"id": 4, "name": "ASaduzzaman", "email": "asadmolla@gmail.com", "address": "Dhaka, Mirpur 10", "phone": "013456789"},
  {"id": 5, "name": "Jibon Molla", "email": "jibonkhan@gmail.com", "address": "Faridpur, Mirpur 10", "phone": "013456789"},
  {"id": 6, "name": "Masud Khan", "email": "masudrana@gmail.com", "address": "Jessore, Mirpur 10", "phone": "013456789"},
  {"id": 7, "name": "Boro vai", "email": "baravao@gmail.com", "address": "CTG, Mirpur 10", "phone": "013456789"},
  {"id": 8, "name": "Abid Hosen", "email": "abidhosen@gmail.com", "address": "Barishal, Mirpur 10", "phone": "013456789"},
  {"id": 9, "name": "Moina Khatun", "email": "moinakhatun@gmail.com", "address": "Sylhet, Mirpur 10", "phone": "013456789"},
  {"id": 10, "name": "Tia Khatun", "email": "tiakhatun@gmail.com", "address": "Dhaka, Mirpur 10", "phone": "013456789"},
  {"id": 11, "name": "Lol Molla", "email": "lolmolla@gmail.com", "address": "Gajipur, Mirpur 10", "phone": "987654321"},
  
]

app.get('/users', (req, res) => {
  const search = req.query.search
  // console.log(req.query);
  // use query parameter
  if(search){
    const searchName = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(searchName);
  }
  else{
    res.send(users)
  }
})

// dynamic api
app.get('/person/name', (req, res) => {
  res.send("this name is rakib shakib shakib, another id is here, do you get it? ")
})
app.post('/users', (req, res)=> {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser))
  res.json(newUser)

})
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  res.send(user);
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})