//akan import article item
import "./article-item.js"

//menggunakan setter untuk mengambil data 
class ArticleList extends HTMLElement {
    set articles(articles) {
        //mengambil data dari articles
        this._articles = articles;
        //kemudian render
        this.render();
    }


    render() {
        //iterasi article nya karena mempunyai lebih dari 1 object
        this._articles.forEach(article => {
            //kemudian bikin element article-item
            const articleItemElement = document.createElement("article-item");
            // memanggil fungsi setter article() pada article-item.
            articleItemElement.article = article;
            //kemudian di append
            this.appendChild(articleItemElement);
        })
    }
}

customElements.define("article-list", ArticleList);