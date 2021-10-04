const express = require("express");
const path = require("path");
const app = express();
const port =  process.env.PORT ||3000;
var pokedex = [];

SetPokermons();


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", function (req, res){
    
    res.render("index", {pokermonList: pokedex});
});

app.get("/home", function (req, res){
    
    res.render("index", {pokermonList: pokedex});
});

app.get("/cadastro", function (req, res){
    res.render("cadastro");
});

app.get("/detalhes/:pokemonId", function (req, res){
    var id = req.params.pokemonId;
    
    var pokemonObj = pokedex.find(pokemon => pokemon.numero == id);
    
    res.render("detalhes", {pokemon: pokemonObj});
});

app.post("/new", function (req, res){
    const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
    var pokemon = new Object();
    pokemon.numero = numero;
    pokemon.imagem = imagem;
    pokemon.nome = nome;
    pokemon.tipo = tipo;
    pokemon.descricao = descricao;
    pokemon.altura = altura;
    pokemon.peso = peso;
    pokemon.categoria = categoria;
    pokemon.habilidade = habilidade;

    pokedex.push(pokemon);

    res.render("index", {pokermonList: pokedex});
});





app.listen(port, () => 
console.log(`Servidor rodando em http://localhost:${port}`)
);

function SetPokermons(){
    var bubasauro = new Object();
    bubasauro.numero = 001;
    bubasauro.imagem = "/img/pokemon/001-bulbasaur.png";
    bubasauro.nome = "Bulbasauro";
    bubasauro.tipo = "Planta";
    bubasauro.descricao = "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.";
    bubasauro.altura = "0,7 m";
    bubasauro.peso = "6,9 kg";
    bubasauro.categoria = "Semente";
    bubasauro.habilidade = "Super crescimento.";

    pokedex.push(bubasauro);

    var charmander = new Object();
    charmander.numero = 004;
    charmander.imagem = "/img/pokemon/004-charmander.png";
    charmander.nome = "Charmander";
    charmander.tipo = "Fogo";
    charmander.descricao = "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.";
    charmander.altura = "0,6 m";
    charmander.peso =  "8.5 kg";
    charmander.categoria = "Lagarto";
    charmander.habilidade = "Chama";

    pokedex.push(charmander);

    var squirtle = new Object();
    squirtle.numero = 007;
    squirtle.imagem = "/img/pokemon/007-squirtle.png";
    squirtle.nome = "Squirtle";
    squirtle.tipo = "Agua";
    squirtle.descricao = "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa";
    squirtle.altura = "0,5 m";
    squirtle.peso = "9,0 kg";
    squirtle.categoria = "Tartaruga pequena";
    squirtle.habilidade = "Torrent";

    pokedex.push(squirtle);
}

