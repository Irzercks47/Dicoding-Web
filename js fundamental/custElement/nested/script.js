//akan import articles-list dan json article 
import "./article-list.js";
import articles from "./articles.js";

//kemudian dia akan membuat element article-list
const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;

//kemudian di append
document.body.appendChild(articleListElement);