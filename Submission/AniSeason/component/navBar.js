class NavBar extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
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
                    background-color: #F76E11;
                    color: white;
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
                    background-color: #FF9F45;
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
        const toggleButton = this.shadowDOM.querySelector('.toggle-button')
        const navLinks = this.shadowDOM.querySelector('.nav-links')

        toggleButton.addEventListener('click', () =>{
            navLinks.classList.toggle('active')
        })
    }

}

customElements.define('nav-bar', NavBar)