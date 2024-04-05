<script>
	// JavaScript peut être ajouté ici pour le comportement du composant
	let name = 'Mon Composant';

	let links = [
		{ href: '/', text: 'Home' },
		{ href: '/projects', text: 'Projets' }
	];
</script>

<header>
	<div>
		Hello {name}!
	</div>

	<nav>
		{#each links as link}
			<a href={link.href}>{link.text}</a>
		{/each}
	</nav>
</header>

<style>
	/* Styles spécifiques au composant peuvent être ajoutés ici */
	nav > a {
		margin-right: 10px;
	}
</style>
