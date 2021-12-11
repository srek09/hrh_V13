const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('szabalyzat')
		.setDescription(' asdadakhfdlkghegjhajgalfkjh'),

	async execute(interaction, client) {
		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId('green-button')
				.setLabel('Elfogadom')
				.setStyle('SUCCESS'),

			new MessageButton()
				.setCustomId('red-button')
				.setLabel('Nem fogadom el')
				.setStyle('DANGER')
		)
		interaction.reply({
			content: szabalyzat1,
			components: [row],
		})
		interaction.channel.send({
			content: szabalyzat2,
		})
		interaction.channel.send({
			content: szabalyzat3,
		})
		interaction.channel.send({
			content: szabalyzat4,
		})
		interaction.channel.send({
			content: szabalyzat5,
		})

		interaction.channel.send({
			content: szabalyzat6,
		})
	},
}

const szabalyzat1 = `
 ***\`Alap fogalmak:\`***\`\`\`diff
- OOC: (out of character) A valós világ.
+ IC: (In character) A karaktered világa.
- PG: (power gaming)  Hősködés.
+ AK: (admin kill) Szolgálatban lévő admin megölése.
- DM: (DeathMatch) Ok nélküli ölés. (legalább 5 perces RP előzmény számít oknak)
+ DB: (Drive By) Ölés járművel.
- MG: (MetaGaming) OOC információt használsz fel IC.
+ RK: (Revenge Kill) Halál utáni bosszúállás.
- Force RP: (Kényszerített RP) Nem kényszerítheted rá másra a saját rp-det.
+ SK: (Spawn Kill) közvetlen spawnolás utáni ölés.
- NonRP: Nem valós viselkedés.
\`\`\`
`
const szabalyzat2 = `
***\`Alap Szabályzat:\`***\`\`\`diff
- Tilos a bugok kihasználása! Ennek észrevétele esetén jelezni kell ezt a vezetőségnek!
- Tilos az OOC kereskedelem!
- Tilos Admin ügy alatt hazudni!!
- Tilos az OOC minősítés minden formája!
- Tilos RP-t OOC indokkal megszakítani!
- Tilos OOC hirdetni (bármit)
\`\`\`\`\`\`css
.NRK:
   Offroad autók: mehetnek bárhol 
   SUV: Hegyeken nem mehetnek. 
   egyéb: Csak úton (föld út is útnak számít) mehetnek, föld úton maximum 50-nel.
   \`\`\`\`\`\`diff
- Lehetséges a PG értelmes kereteken belül! Féltsd az életed de ha ki tudsz szabadulni tégy úgy.
- Indokolatlan DB Tilos (pl.: Ha 10 ember áll az autó pályán és te direkt elütöd őket)
- Indokolt DB lehetséges (pl.: Valaki az autód előtt fegyvert fog rád elütheted de ne menjen túlzásba)
- Hang alapján fel lehet ismerni embereket értelmes körülmények között. Ha nem akarod hogy felismerjenek használj torzítót!
- A karakteredhez megfelelő káromkodás szidás engedélyezett
- Tilos RP közben admint hívni! Várd meg még vége lesz az rp-nek majd vonulj félre és hívj admint.
- Tilos a felesleges admin hívás! Pl.: lelőttek mert laggoltam adj már healt pls.
- Terror cselekményt csak frakció vagy karakter hosszas történetével lehetséges.
- Bérgyilkos RP engedélyezett de add meg a módját!
- Tilos beépített túszt használni! pl.: Oda mész hozzá és lefizeted hogy a túszod lehessen.
- Csak maszk használatával lehet hangtorzítót használni
- A hangtorzító nem lehet recsegős vagy nagyon nem reális. Rakj össze egy értelmes de más volumenű hangstílust.
- Állami munka végzéskor tilos saját járművet használni.
- Tilos hírdetésből átverni másokat.
- Másik frakció ruháit csak csak indokolt esetben és Admin engedélyével lehet.
- Bármilyen ooc kommunikáció RP közben Tiltott (pl.: dc)
\`\`\`
`
const szabalyzat3 = `
***\`CK Szabályzat:\`***\`\`\`bash
"CK-t bármely játékos adhat megfelelő indokkal és egy külön RP-szállal illetve legalább 10 nap ic ismeretséggel."
"Nincs fél CK! Vagy meghaltál vagy nem."
"CK esetén a karaktered egész vagyonát és minden emlékezetét elveszíti és teljesen új karaktert kell kezdened. (prémium marad)"
"Frakció CK esetén a frakció halott ként kezeli az illetőt emléke megmarad a frakcióban. A CK-zott személy elfelejt mindent a frakciórol. Csak halál számít frakció CK-nak!"
"Vagyont nem veszítesz."
"A CK alatt nem szükséges admin jelenléte, de a halál után maximum 5 perc múlva admint kell hívni"
"CK-hoz minimum 30p RP szükséges!" 
\`\`\`
`
const szabalyzat4 = `

***\`Legális szabályzat:\`***\`\`\`yaml
- Lehetséges szolgálat közben végezni illegális tevékenységet. Ennek IC következményét viseld el PL.: kirugás és feljelentés PD-n
- Mentőst és PD-st loot-olni TILOS!
- A rendőr lehet korrupt de ennek következményét vállalnia kell (Teljes CK)
- A PD ugyan úgy tud CK-zni! Ha sokszor elkapnak ne lepődj meg ha kapsz egy CK-t (életfogytiglant vagy halálbüntetést)
- Fokozott ellenörzést csak a PD leader és al-leader adhat ki indokkal!
- A PD figyelembe veheti az illegális hirdetéseket! (ők is ugyan olyan emberek)
- Ha a rendőr nem jár el jogszerűen (túl sok csekket ad) ne hívj admint! Intézd el ic!
- PD-nek csak a lezárást és a nyitást kell govolni. Mást nem kötelező.
- Mentősnek mindent ellátást le kell RP-znie!
- Egy rendőr autóbol 2 szögesdrót helyezhető le
- A közmunkával nem lehet szórakozni! Ne adj funbol 1000 közmunkát valakinek!
- A PD létszáma korlátlan (leaderek döntenek hogy mennyi ember kell)
\`\`\`
`
const szabalyzat5 = `
***\`Illegál szabályzat:\`***\`\`\`fix
- Ne rabolj banki egyenleget csak kézpénzt!
- Ne hergeld a PD-t (pl.: oda mész és beszolsz hogy köcsög pd)
- Rendőr autót lopni csak indokolt esetben lehet. Menekülés miatt.
- Mentő autót lopni Tilos!
- Túszok megöléséhez nyomós ok kell. (nem félti az életét vagy el akar szökni) viszont ic következményét vállald pl.: nem lesz túsztárgyalás.
- Tilos a szerver újraindítás előtt 40 percel rabolni!
- Tilos az újraindítás után 15 percel rabolni!
- Szolgálatban lévő mentőst tilos rabolni!
- Rendőrt rabolni korlátlanul lehet.
- Frakció létszáma max 20 fő lehet (szerver létszám növekedése esetén átírható)
- Egy frakció csak üzleti kapcsolatokat létesíthet egy másik frakcióval. Szüvetkezés pl.: elmegyünk együtt bankot rabolni az tilos.
- Banda háború két hétig tart! 
- Ekkor nem szükséges az ellenséges frakció tag megöléséhez indok viszont biztosra kell tudnod hogy ő annak a frakciónak a tagja!
- A bandaháborút egyértelműen ki kell hirdetni hogy mind a két fél tudjon róla.
- A két hét lejárta után minden eddigi konfliktust elfelejt a két frakció.
- A banda háború megkezdése előtt a két frakciónak le kell tisztáznia, hogy mi lesz a fizetsége a vesztesnek. (admin bele egyezése szükséges)
- Ha az egyik frakció feladja (nincs fegyver vagy csődbe megy) akkor is vége van a banda háborúnak és minden konfliktus felejtődik viszont a vesztes frakciónak az előre letisztázott dolgokat teljesítenie kell.

- Rablásokhoz nem szükséges túsz és a PD érkezését nem kell megvárnod viszont ennek következményét vállalnod kell!
- Amíg a PD ki nem írja hogy fogadja a hívásokat addig rablás nem indítható!
\`\`\``
const szabalyzat6 = `
***\`Rablás szabályzat:\`***\`\`\`fix
ATM rablás:
- csak mele weapon vihető rá max 1 menekülő autó mehet és a gyors pénz szerzés és menekülés a lényeg. Külső segítség nem lehetséges.
A PD max 2 autóval vehet részt az akcióban (üldözés során) de a helyszínre érkezhet több egység is.

Bolt rablás:
- Nagy kaliber nem vihető mind a kettő oldal részéről.
- Max 3 menekülő autó lehet
- Minden menekülőt max 2 üldöző üldözhet!
- A helyszínre jöhet több egység is

Bank rablás:
- Bármely fegyver vihető rá 
- Max 5 menekülő autó
- Minden menekülőt max 3 üldöző üldözhet!
- A PD lövöldözés esetén értesítheti a RED-et

Nemzeti rablás:
- Bármely fegyver vihető rá
- max 8 menekülő autó
- Minden menekülőt max 3 üldöző üldözhet!
- A PD lövöldözés esetén értesítheti a RED-et
\`\`\`
`
