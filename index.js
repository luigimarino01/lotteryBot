
const {
	Client,
	Collection,
	Intents
} = require('discord.js');
const {
	token,
} = require('./config.json');

const client = new Client({
	intents: [32767]
});
let date_ob = new Date();




let numerigenerati = []
client.on('ready', async () =>{
let canale = client.channels.cache.find(channel => channel.name.toLowerCase() === "estrazioni")

	setInterval(() => {
		let date = date_ob.getDate();
        let month = (date_ob.getMonth() + 1);
        let year = date_ob.getFullYear();

		canale.send(`ESTRAZIONE DEL GIORNO ${date}/${month}/${year}`)
		
		for(let i = 0; i < 3 ; i++) {
			let randomNumber = Math.floor(Math.random() * (78 - 1 + 1)) + 1
			
			while (numerigenerati.includes(randomNumber)) {
				randomNumber = Math.floor( Math.random() (78 - 1 + 1)) + 1
			}
	
			numerigenerati.push(randomNumber); 
		}
		canale.send(`${numerigenerati[0]} - ${numerigenerati[1]} - ${numerigenerati[2]}`)
		numerigenerati = [];
	
		for(let i = 0; i < 3 ; i++) {
			let randomNumber = Math.floor(Math.random() * (78 - 1 + 1)) + 1
			
			while (numerigenerati.includes(randomNumber)) {
				randomNumber = Math.floor( Math.random() * (78 - 1 + 1)) + 1
			}
	
			numerigenerati.push(randomNumber); 
	
		}
		canale.send(`${numerigenerati[0]} - ${numerigenerati[1]} - ${numerigenerati[2]}`)
		numerigenerati = [];
	
		for(let i = 0; i < 3 ; i++) {
			let randomNumber = Math.floor(Math.random() * (78 - 1 + 1)) + 1
			
			while (numerigenerati.includes(randomNumber)) {
				randomNumber = Math.floor( Math.random() * (78 - 1 + 1)) + 1
			}
	
			numerigenerati.push(randomNumber); 
		}
		canale.send(`${numerigenerati[0]} - ${numerigenerati[1]} - ${numerigenerati[2]}`)
		numerigenerati = [];

		for(let i = 0; i < 3 ; i++) {
			let randomNumber = Math.floor(Math.random() * (78 - 1 + 1)) + 1
			
			while (numerigenerati.includes(randomNumber)) {
				randomNumber = Math.floor( Math.random() * (78 - 1 + 1)) + 1
			}
	
			numerigenerati.push(randomNumber); 
		}
		canale.send(`${numerigenerati[0]} - ${numerigenerati[1]} - ${numerigenerati[2]}`)
		numerigenerati = [];


		for(let i = 0; i < 3 ; i++) {
			let randomNumber = Math.floor(Math.random() * (78 - 1 + 1)) + 1
			
			while (numerigenerati.includes(randomNumber)) {
				randomNumber = Math.floor( Math.random() * (78 - 1 + 1)) + 1
			}
	
			numerigenerati.push(randomNumber); 
		}
		canale.send(`${numerigenerati[0]} - ${numerigenerati[1]} - ${numerigenerati[2]}`)
		numerigenerati = [];

		
	}, 86400000);
	
	 
});






client.login(token);

