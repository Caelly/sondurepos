/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	continue_next: false,
	callbacks: {
		/*song_change: function(){
			alert('here');
		}*/
	},
	"songs": [
		{
			"name": "Le pantalon de Jules",
			"artist": "Alexis",
			"url": "sounds/jules_pantalon_sport.wav",
			"cover_art_url": "cover/jerme_bouche_ouverte.PNG"
		},
		{
			"name": "Miki cette grosse salope",
			"artist": "Sardoche",
			"url": "sounds/miki_grosse_salope.mp3",
			"cover_art_url": "cover/miki_macdo.PNG"
		},
		{
			"name": "La ligne blanche",
			"artist": "Alexis ft Jerme",
			"url": "sounds/la_ligne_blanche.wav",
			"cover_art_url": "" // A CHANGER
		},
		{
			"name": "Oh la roue libre !",
			"artist": "Théo",
			"url": "sounds/oh_la_roue_libre.wav",
			"cover_art_url": "" // A CHANGER
		},
		{
			"name": "Les 2 boules",
			"artist": "Théo",
			"url": "sounds/les_deux_boules_d_un_mec.wav",
			"cover_art_url": "" // A CHANGER
		},
		{
			"name": "1 point pour Jeremy",
			"artist": "Théo",
			"url": "sounds/1_point_pour_jeremy.wav",
			"cover_art_url": ""
		},
		{
			"name": "10km de bite",
			"artist": "Alexis",
			"url": "sounds/10km_de_bite.wav",
			"cover_art_url": ""
		},
		{
			"name": "160 balles",
			"artist": "Alexis",
			"url": "sounds/160_balles.wav",
			"cover_art_url": "cover/miki_moula.jpg"
		},
		{
			"name": "160 sans avoir de beuh",
			"artist": "Jerme",
			"url": "sounds/160_balles_sans_avoir_de_beuh.wav",
			"cover_art_url": ""
		},
		{
			"name": "Adrien baille",
			"artist": "Adrien",
			"url": "sounds/adrien_baille.wav",
			"cover_art_url": ""
		},
		{
			"name": "Adrien conduis bien merde !",
			"artist": "Alexis",
			"url": "sounds/adrien_conduis_bien_merde.wav",
			"cover_art_url": ""
		},
		{
			"name": "Dégueulasse le COVID",
			"artist": "Théo",
			"url": "sounds/ah_degueulasse_le_covid.wav",
			"cover_art_url": ""
		},
		{
			"name": "Ah oui je souviens",
			"artist": "Alexis",
			"url": "sounds/ah_oui_je_souviens.wav",
			"cover_art_url": ""
		},
		{
			"name": "Ah oui je souviens 2",
			"artist": "Alexis sans ses couilles",
			"url": "sounds/ah_oui_je_souviens_2.wav",
			"cover_art_url": ""
		},
		{
			"name": "AHRAAAAAAA",
			"artist": "Alexis",
			"url": "sounds/ahra.wav",
			"cover_art_url": ""
		},
		{
			"name": "Arrêtez de parler de cul",
			"artist": "Théo",
			"url": "sounds/arretez_de_parler_de_cul.wav",
			"cover_art_url": ""
		},
		{
			"name": "Bande de connards",
			"artist": "Alexis",
			"url": "sounds/bande_de_connards.wav",
			"cover_art_url": ""
		},
		{
			"name": "Bâton dans les roux",
			"artist": "Théo",
			"url": "sounds/batons_dans_les_roux.wav",
			"cover_art_url": ""
		},
		{
			"name": "Ca me faisait un peu bander",
			"artist": "Alexis",
			"url": "sounds/ca_me_faisait_un_peu_bander.wav",
			"cover_art_url": ""
		},
		{
			"name": "Catégorie minuscule",
			"artist": "Cellya",
			"url": "sounds/categorie_minuscule.wav",
			"cover_art_url": ""
		},
		{
			"name": "Chibre de Jules",
			"artist": "Théo",
			"url": "sounds/chibre_de_jules.wav",
			"cover_art_url": ""
		},
		{
			"name": "Doigt dans le pétou",
			"artist": "Alexis",
			"url": "sounds/doigt_dans_le_petou.wav",
			"cover_art_url": ""
		},
		{
			"name": "Funky Town",
			"artist": "Alexis",
			"url": "sounds/funky_town.wav",
			"cover_art_url": ""
		},
		{
			"name": "Gorge profonde",
			"artist": "Théo ft Jerme",
			"url": "sounds/gagagaga.wav",
			"cover_art_url": ""
		},
		{
			"name": "J'ai failli repeindre le mur",
			"artist": "Théo",
			"url": "sounds/j_ai_faillit_repeindre_le_mur.wav",
			"cover_art_url": ""
		},
		{
			"name": "Ouais c'est un bon produit",
			"artist": "Surieusky",
			"url": "sounds/ouais_c_est_un_bon_produit.wav",
			"cover_art_url": ""
		},
		{
			"name": "OUIN OUIN",
			"artist": "Alexis",
			"url": "sounds/ouin_ouin.wav",
			"cover_art_url": ""
		},
		{
			"name": "Pas PD",
			"artist": "Jerme",
			"url": "sounds/pas_pd.wav",
			"cover_art_url": ""
		},
		{
			"name": "Pornhub",
			"artist": "Jerme",
			"url": "sounds/pornhub_intro_beatbox.wav",
			"cover_art_url": ""
		},
		{
			"name": "Pornhub 2",
			"artist": "Jerme",
			"url": "sounds/pornhub_intro_beatbox_2.wav",
			"cover_art_url": ""
		},
		{
			"name": "Sam et la bite de Jerme",
			"artist": "Jerme",
			"url": "sounds/quand_elle_a_vu_ma_bite.wav",
			"cover_art_url": ""
		},
		{
			"name": "SNAPFUCK",
			"artist": "Théo",
			"url": "sounds/snapfuck.wav",
			"cover_art_url": ""
		},
		{
			"name": "Toiles d'araignées",
			"artist": "Alexis",
			"url": "sounds/soulever_des_toiles_d_araignees.wav",
			"cover_art_url": ""
		},
		{
			"name": "Terrible",
			"artist": "Théo",
			"url": "sounds/terrible.wav",
			"cover_art_url": ""
		},
		{
			"name": "Théo baille",
			"artist": "Théo",
			"url": "sounds/theo_baille.wav",
			"cover_art_url": ""
		},
		{
			"name": "Théophile",
			"artist": "Alexis ft Théo",
			"url": "sounds/theophile.wav",
			"cover_art_url": ""
		},
		{
			"name": "Very Bad Trip",
			"artist": "Alexis ft Théo",
			"url": "sounds/tout_ce_qui_est_dit_dans_la_voiture_reste_dans_la_voiture.wav",
			"cover_art_url": ""
		},
		{
			"name": "Trop de points",
			"artist": "Théo",
			"url": "sounds/trop_de_points.wav",
			"cover_art_url": ""
		},
		{
			"name": "Tu connais Snapfuck ?",
			"artist": "Théo",
			"url": "sounds/tu_connais_snapfuck.wav",
			"cover_art_url": ""
		},
		{
			"name": "2005 oubaouba",
			"artist": "Alexis",
			"url": "sounds/une_petite_2005.wav",
			"cover_art_url": ""
		},
		{
			"name": "Va la baiser !",
			"artist": "Jerme",
			"url": "sounds/va_la_baiser.wav",
			"cover_art_url": ""
		},
		{
			"name": "Voiture qui tape la route",
			"artist": "La voiture",
			"url": "sounds/voiture_tape_route.wav",
			"cover_art_url": ""
		},

		
	]
});