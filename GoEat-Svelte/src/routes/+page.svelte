<script >
    import {Button, Image} from '@sveltestrap/sveltestrap';
</script>

<body class="page-color">

<div class="empty-space"></div>

<div class="image-container">
    <Image class="img" fluid alt="This is a fluid Image" src="./src/Images/Pizza.png" />
    <h1 class="h1">GoEat </h1>
    <input class="input" type="text" placeholder="Adres, b.v. Amstelplein 10..">
    <button class="search-button"> Zoek</button>
</div>
</body>

<style>
    .page-color {
        background-color: orangered;
    }

    .empty-space {
        height: 50px; 
    }

    .image-container {
        background-color: white;
        padding: 10px;
        border-radius: 50px;
        position: relative;
    }

    :global(.img) {
        border-radius: 100px;
    }

    .h1 {
        position: absolute;
        top: 30px;
        right: 600px;
        color: black;
        font-size: 50px;
    }
    
    .input {
        position: absolute;
        top: 100px;
        right: 500px;
        font-size: 20px;
        border-radius: 10px;
    }
    .search-button {
        position: absolute;
        top: 98px;
        right: 420px;
        font-size: 20px;
        border-radius: 10px;
    }
</style>

