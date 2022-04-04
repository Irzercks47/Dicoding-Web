class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    //karena di dalam custom element terdapat button yang fungsinya untuk dipencet maka harus diberi stter
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    //untuk mendapatkan value yang diinput di search bar agar bisa digunakan oleh main.js
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render(){
        this.innerHTML =`
            <div id="search-container" class="search-container">
                <input placeholder="Search football club" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
        //kemudian menambahkan domnya yang kemudian nanti masuk ke this._clickEvent agar tombol berjalan
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar)