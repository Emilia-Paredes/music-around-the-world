let closeModal = document.querySelector(".modal-close");
let modal = document.querySelector(".modal");

closeModal.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.remove("modal");
});

let map = L.map('map').setView([25.7277831,0.0080852],2)

//agregar el 'tapiz/tilelayer'

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',{
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom:2,
    maxZoom: 7,
    ext: 'jpg'
}).addTo(map);


var capitals = [
        {city: "Mexico", coords: [23.63, -102.55], icon: "1",
        artist: "Belinda\n <li>Utopía</li><li>Carpe Diem</li>"},

        {city: "Francia", coords: [46.22, 2.21], icon: "2",
        artist: "Yann Tiersen\n <li>La valse d'Amelie</li><li>Comptine d'un autre été</li>"},

        {city: "Japón", coords: [35.41,139.41], icon: "3",
        artist: "Scandal\n <li>Harukaze</li><li>Awanaitsumorino, Genkidene</li><li>Departure</li>"},

        {city:"Brasil", coords: [-15.79, -47.88], 
        artist: "Michel Teló\n <li>Fugidinha</li><li>Ai Se Eu Te Pego</li>"},

        {city: "India", coords: [20.59, 78.96], icon: "4", 
        artist: "Loveyatry\n <li>Chogada</li><li>Rangtaari</li><li>Dholida</li>"},

        {city:"Alemania", coords: [50.73, 7.09], 
        artist: "Ludwig van Beethoven\n <li>Para Elisa</li><li>Oda a la Alegría</li>"},

        {city:"Argentina", coords: [-35.93, -57.95], 
        artist: "Edmundo Rivero\n <li>Cafetín de Buenos Aires</li>"},

        {city:"Bolivia", coords: [-16.29, -63.58], 
        artist: "Los Kjarkas\n <li>Munasquechay</li><li>Imillitay</li>"},

        {city:"Colombia", coords: [4.57, -74.29], 
        artist: "Shakira\n <li>Hips Don't Lie</li><li>Try Everything</li>"},

        {city:"Venezuela", coords: [6.42, -66.58], 
        artist: "Carlos Baute\n <li>Colgado en tus Manos</li><li>Quién te quiere como yo</li>"},

        {city:"Puerto Rico", coords: [18.22, -66.59], 
        artist: "Marc Anthony\n <li>Vivir Mi Vida</li><li>Pa'lla Voy</li>"},

        {city:"Cuba", coords: [21.52, -77.78], 
        artist: "Celia Cruz\n <li>La Vida es un Carnaval</li><li>Ríe, Llora</li>"},

        {city:"USA", coords: [37.09, -95.71], 
        artist: "Katy Perry\n <li>The One That Got Away</li><li>E.T.</li>"},

        {city:"España", coords: [40.46, -3.74], 
        artist: "Enrique Iglesia\n <li>Bailando</li><li>El Perdedor</li>"},

        {city:"Italia", coords: [41.87, 12.56], 
        artist: "Andrea Bocelli\n  <li>Conte Partiro</li><li>Por ti volare</li>"},

        {city:"Rumania", coords: [45.94, 24.96], 
        artist: "Voltaj\n <li>De la Capat</li><li>Si Ce</li>"},

        {city:"Reino Unido", coords: [55.37, -3.43], 
        artist: "Coldplay\n <li>Paradise</li><li>The Scientist</li>"},

        {city:"Irlanda", coords: [53.41, -8.24], 
        artist: "U2\n <li>Vertigo</li><li>With Or Without You</li>"},

        {city:"Holanda", coords: [52.13, 5.29], 
        artist: "HeadHunterz\n <li>Dragonborn</li><li>Scrap Attack</li>"},

        {city:"Rusia", coords: [61.52, 105.31], 
        artist: "Motorama\n <li>To The South</li><li>Alps</li>"},

        {city:"Sudafrica", coords: [-30.55, 22.93], 
        artist: "Die Antwoord\n <li>Enter the Ninja</li><li>I Fink U Freeky</li>"},

        {city:"Korea del Sur", coords: [35.90, 127.76], 
        artist: "Big Bang\n <li>HaruHaru</li><li>Fantastic Baby</li>"},

        {city:"Uruguay", coords: [-32.52, -55.76], 
        artist: "Rubén Rada\n <li>Muriendo de Plena</li><li>Cha-cha, Muchacha</li>"}
];

let myMarker = []
        
// Crear una funcion que designe los logos a cada pais
// Crear una ventana modal

for (let i = 0; i < capitals.length; i++){
    myMarker[i] = L.marker(capitals[i].coords).addTo(map);
    myMarker[i].on('click', onClick);
    myMarker[i].bindPopup(capitals[i].artist);
}

function addMaker(){

}
        
function onClick(e){
            let coords = e.latlng;
            map.flyTo(coords,5);
}