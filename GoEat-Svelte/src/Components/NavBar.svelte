<script>
    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<style>
    nav {
        background-color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
    }

    .burger-menu {
        display: none;
    }

    .menu {
        display: none;
        position: absolute;
        top: 50px; 
        right: 20px;
        background-color: #f9f9f9;
        padding: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .menu a {
        display: block;
        padding: 10px 0;
        text-decoration: none;
        color: #333;
    }
    
    .Logo-Size{
        width: 80px;
    }
    
</style>

<nav>
    <img class="Logo-Size" src="./src/Logo's/GoEat-Logo.png" alt="GoEat Logo">
    <input type="checkbox" id="burger-menu" class="burger-menu" bind:checked={isMenuOpen}>
    <button on:click={toggleMenu} aria-label="Toggle menu">&#9776;</button>
    <div class="menu" style={isMenuOpen ? "display: block;" : "display: none;"}>
        <a href="#">Login</a>
        <a href="#">Taal</a>
        <a href="#">Instellingen</a>
    </div>
</nav>
