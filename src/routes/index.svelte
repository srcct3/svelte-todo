<script>
	import TodoItem from '$lib/todo-item.svelte';
	const title = 'Todo';
</script>

<h1>{title}</h1>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="todo">
	<form action="" method="" class="new">
		<input type="text" aria-label="Add todo list" placeholder="+ Add todo list" />
	</form>
	<TodoItem />
</div>

<style>
	.todo {
		width: 100%;
		max-width: 42rem;
		margin: 4rem auto 0 auto;
	}

	.new {
		margin-bottom: 0.5rem;
	}

	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}

	.todo :global(input) {
		border: 1px solid transparent;
	}
	.todo :global(input:focus-visible) {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #c9eef3 !important;
		outline: none;
	}
</style>
