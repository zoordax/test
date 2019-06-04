const Discord = require('discord.js')
const bot = new Discord.Client()


bot.login(process.env.TOKEN)


bot.on('ready', function () {
	bot.user.setActivity('!monstres', { type: 'play' })
})


bot.on('message', function (message) {
	if (message.content === '!monstres') {
		let Embed = new Discord.RichEmbed()
			.setDescription("voici la liste des monstres la seul chose a faire pour avoir sa composition est de taper -> !le_nom_du_monstre")
			.setColor("#211edc")
			.addField(">>>Tous les monstres<<<", "\n ailedegivre \nailesnoires\nbetedesneiges\nchaman\ndrider\nepinator\ngargantua\ngriffon\nfaucheuse\nmorphalange\ntroyen\nlarve\nnoceros\nreineabeille\nsabrecroc\ntitan\nwyrm")
			
			.setFooter("dites moi si vous aimez le bot en cliquant sur le pouce en haut ou en bas :-)")
		message.channel.sendEmbed(Embed).then(console.log).catch(console.error)
	}
	
	if (message.content === '!salut') {
		message.channel.send({
			files : [{
				attachement: " orbot/.gitignore/ok.jpg  ",
				name: "ok.jpg"
			}]
		})
	}
	
	
	if (message.content === '!ailedegivre') {
		message.channel.send(">>>AILE DE GRIVE<<<\nOiseau Noir\nElementaliste\nIncinératrice\nOmbre\nchasseur de démon")
	}
	
	if (message.content === '!ailesnoires') {
		message.channel.send(">>>AILE NOIRE<<<\nOiseu noir\nchasseur de demon\nombre\nRoublard\narchere funeste")
	}
	
	if (message.content === '!betedesneiges') {
		message.channel.send(">>>BETES DES NEIGES<<<\noiseau noir\nchasseur de demon\nOmbre\neclair pourpre\narchere funeste")
	}
	
	if (message.content === '!chaman') {
		message.channel.send(">>>CHAMAN<<<\noiseau noir\nroublard\narchere funeste\ntraqueuse\nombre")
	}
	
	if (message.content === '!drider') {
		message.channel.send(">>>DRIDER<<<\noiseau noir\nincineratrice\nelementaliste\nchasseur de demon\nombre")
	}
	
	if (message.content === '!epinator') {
		message.channel.send(">>>EPINATOR<<<\nchasseur de demon\noiseau noir\nombre\neclair pourpre\narchere funeste")
	}
	
	if (message.content === '!gargantua') {
		message.channel.send(">>>GARGANTUA<<<\nincineratrice\nelementaliste\ngobelin\nreine des neiges\nsage tourmenté")
	}
	
	if (message.content === '!griffon') {
		message.channel.send(">>>GRIFFON<<<\nincinératrice\nelementaliste\noiseau noir\nchasseur de demon\nombre ")
	}
	
	if (message.content === '!faucheuse') {
		message.channel.send(">>>faucheuse<<<\noiseau noir\nchasseur de monstre\nombre\ntraqueuse\narchere funeste")
	}
	
	if (message.content === '!morphalange') {
		message.channel.send(">>>MORPHALANGE<<<\nombre\ntraqueuse\neclair pourpre\nchasseur de demon\nroublard")
	}
	
	if (message.content === '!troyen') {
		message.channel.send(">>>TROYEN<<<\nincineratrice\nelementaliste\ngobelin\nreine des neiges\nprima")
	}
	
	if (message.content === '!larve') {
		message.channel.send(">>>MEGA LARVE<<< \nincineratrice \nelementaliste \ngobelin \nreine des neige\nsage tourmenté")
	}
	
	if (message.content === '!noceros') {
		message.channel.send(">>>Noceros<<<\nincineratrice\ngobelin\nreine des neiges\nelementaliste\nsage tourmenté")
	}
	
	if (message.content === '!reineabeille') {
		message.channel.send(">>>REINE DES ABEILLES<<<\noiseau noir\nchasseur de demon\nombre\neclair poupre\narchere funeste")
	}
	
	if (message.content === '!sabrecroc') {
		message.channel.send(">>>SABRECROC<<<\nincineratrice\ngobelin\nelementaliste\nreine des neiges\nsage tourmenté")
	}
	
	if (message.content === '!titan') {
		message.channel.send(">>>TITAN<<< \nincineratrice \ngobelin \nsage tourmenté \nprima \necuyer marin")
	}


	if (message.content === '!wyrm') {
		message.channel.send(">>>WYRM<<< \nincinératrice \nelementaliste \ngobelin \nreine des neiges \nsage tourmenté")
	}

	if (message.content === '!golem') {
		message.channel.send(">>>GOLEM<<< \nincinératrice \nElementalist \nprima \nreine des neiges \ngobelin")
	}


})
