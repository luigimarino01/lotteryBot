
const fs = require('node:fs');
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


const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}



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
		
	}, 5000);
	
	 
});






client.login(token);

