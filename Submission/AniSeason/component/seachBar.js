class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get year() {
        return this.querySelector("#searchYear").value;
    }

    get season() {
        return this.querySelector("#seasonSearch").value;
    }

    render(){
        this.innerHTML = `
            <style>
                .search-container {
                    margin: 40px 30%;
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    top: 10px;
                    background-color: white;
                }

                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid rgb(50, 140, 202);
                    font-weight: bold;
                }

                .search-container > input:focus {
                    outline: 0;
                    border-bottom: 2px solid rgb(50, 140, 202);
                }

                .search-container > input:focus::placeholder {
                    font-weight: bold;
                }

                .search-container >  input::placeholder {
                    color: rgb(50, 140, 202);
                    font-weight: normal;
                }

                .search-container > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: rgb(50, 140, 202);
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }

                .search-container > select {
                    margin-left: 5px;
                    border: 0;
                }

                @media screen and (max-width: 600px){
                    .search-container > select {
                        height: 60px;
                        margin-left: 5px;
                        border: 0;
                    }
                    .search-container {
                        flex-direction: column;
                        position: static;
                    }

                    .search-container > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .search-container > button {
                        width: 100%;
                    }
                }
            </style>
            <div id="search-container" class="search-container">
                <input placeholder="masukkan tahun" id="searchYear" type="search">
                <select name="season" id="seasonSearch">
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                </select>
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }

}

customElements.define('search-bar', SearchBar)