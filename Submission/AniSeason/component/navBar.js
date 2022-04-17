class NavBar extends HTMLElement {

    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gelasio&family=Merriweather+Sans:ital,wght@1,300&family=Merriweather:wght@900&family=Open+Sans+Condensed:wght@300&family=Oswald:wght@300&family=Playfair+Display:ital@0;1&family=Poppins:wght@300;400&family=Roboto+Slab:wght@300;600&family=Rubik:wght@500&family=Titillium+Web:ital,wght@0,200;0,300;1,200&display=swap');
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Gelasio', serif;
                }

                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgb(59, 151, 252);
                    color: white;
                    padding: 0 2%;
                }

                .nav-tittle {
                    font-size: 1.8em;
                    margin: .5rem;
                }

                .nav-links ul {
                    margin: 0;
                    padding: 0;
                    display: flex;
                }

                .nav-links li {
                    list-style: none;
                }

                .nav-links li a {
                    text-decoration: none;
                    color: white;
                    padding: 1rem;
                    display: block;
                }

                .nav-links li:hover {
                    background-color: rgb(50, 140, 202);
                }

                .toggle-button {
                    position: absolute;
                    top: .75rem;
                    right: 1rem;
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                }

                .toggle-button .bar {
                    height: 3px;
                    width: 100%;
                    background-color: white;
                    border-radius: 10px;
                }
                @media (max-width: 600px) {
                    .toggle-button {
                        display: flex;
                    }

                    .nav-links {
                        display: none;
                        width: 100%;
                    }

                    .navbar {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .nav-links ul {
                        width: 100%;
                        flex-direction: column;
                    }

                    .nav-links li {
                        text-align: center;
                    }

                    .nav-links li a {
                        padding: .5rem 1rem;
                    }

                    .nav-links.active {
                        display: flex;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="nav-tittle">AniSeason</div>
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="nav-links">
                    <ul>
                        <li><a href="#">Random Character</a></li>
                        <li><a href="https://myanimelist.net/" target="_blank">MyAnimeList</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        `
        const toggleButton = this.querySelector('.toggle-button')
        const navLinks = this.querySelector('.nav-links')

        toggleButton.addEventListener('click', () =>{
            navLinks.classList.toggle('active')
        })
    }

}

customElements.define('nav-bar', NavBar)