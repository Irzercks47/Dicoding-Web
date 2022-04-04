//kita hanya perlu melakukan setter untuk mengambil data 
class ArticleItem extends HTMLElement {
    set article(article) {
        //data tersebut dimasukkan dalam _article
        this._article = article;
        //setelah data msuk maka kita akan menjalankan method render
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="featured-image" src="${this._article.featuredImage}">
            <div class="article-info">
                <h2><a href="${this._article.id}">${this._article.title}</a></h2>
                <p>${this._article.description}</p>
            </div>
        `;
    }
}

customElements.define("article-item", ArticleItem);