<script>
	// JavaScript peut être ajouté ici pour le comportement du composant
	// let name = 'Mon Composant';

	let links = [
		{ href: '/', text: 'Home' },
		{ href: '/projects', text: 'Projets' }
	];
</script>

<header>
	<!-- <div>
		Hello {name}!
	</div> -->
	<img src="/logo.png" alt="Logo R du site" />
	<nav>
		{#each links as link}
			<a href={link.href}>{link.text}</a>
		{/each}
	</nav>
</header>

<style>
	/* Styles spécifiques au composant peuvent être ajoutés ici */
	header {
		display: flex;
		align-items: center;
		padding: 10px 0px;
		background-color: #f0f0f0;
	}

	nav {
		padding: 20px;
	}

	nav > a {
		margin-right: 10px;
		color: black;
		text-decoration: none;
	}

	nav > a:hover {
		color: red;
		transition: color 0.5s;
	}
	img {
		width: 60px;
		padding: 10px 20px;
		border-right: 2px dotted gray;
	}

	img:hover {
		cursor: pointer;
	}
</style>
