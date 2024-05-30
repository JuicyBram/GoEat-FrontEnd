<script>
    import { Navbar } from '@sveltestrap/sveltestrap';
    
    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<style>
    :global(nav) {
        background-color: orangered;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
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


<Navbar class="nav">
    <img class="Logo-Size" src="./src/Logo's/GoEat-Logo.png" alt="GoEat Logo">
    <button on:click={toggleMenu} aria-label="Toggle menu">&#9776;</button>
    <div class="menu" style={isMenuOpen ? "display: block;" : "display: none;"}>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Login</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Taal</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Instellingen</a>
    </div>
</Navbar>
