<script>
    import TodoItem from "$lib/todo-item.svelte";
    const title = "Todo"
</script>

<h1>{title}</h1>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<form action="" method="">
    <input type="text" aria-label="Add todo list" placeholder="+ Add todo list">
</form>
<TodoItem/>
