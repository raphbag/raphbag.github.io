<main>
	<h1>Bienvenue sur mon site</h1>
	<div id="presentation_box">
		<p>Je suis Raphaël, un jeune étudiant en cybersécurité</p>
		<img
			src="https://cdn-icons-png.flaticon.com/512/11651/11651032.png"
			alt="Menaces De Cybersécurité"
		/>
	</div>
	<h2>Mes compétences</h2>
	<div id="competence_box">
		<div id="box_competence_solo">
			<p>HTML</p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
				alt="Logo HTML 5"
			/>
		</div>
		<div id="box_competence_solo">
			<p>CSS</p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
				alt="Logo CSS 3"
			/>
		</div>
		<div id="box_competence_solo">
			<p>PYTHON</p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
				alt="Logo Python"
			/>
		</div>
	</div>
	<p><i>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</i></p>
</main>

<style>
	main {
		text-align: center;
	}

	#presentation_box {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#presentation_box > p {
		padding: 0px 20px;
	}

	#presentation_box > img {
		border-left: 2px ridge gray;
		width: 50px;
		padding: 0px 20px;
	}

	#competence_box {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 190px;
	}

	#box_competence_solo {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 160px;
		height: 190px;
		padding: 0px 20px;
	}

	#box_competence_solo > p {
		font-family: 'Anton', system-ui;
		font-size: 20px;
		margin: 0px;
		/* margin-bottom: 10px; */
	}

	#box_competence_solo > img {
		width: 150px;
		padding: 5px 5px;
		transition: filter 0.3s ease-in-out;
	}

	#box_competence_solo > img:hover {
		filter: grayscale(100%);
	}

	#box_competence_solo > img:hover {
		filter: grayscale(100%);
	}
</style>
