//dia akan import article item dan article
import "./article-item.js";
import article from "./article.js";

//setelah selesai import maka akan kita tangkap element yang ememiliki class container
const containerElement = document.querySelector(".container");

//kemudian kita buat element baru yaitu article-item
const articleItemElement = document.createElement("article-item");
//article item ini mempunyai isi article
articleItemElement.article = article;

//kemudian appendchold sehingga article-item muncul
containerElement.appendChild(articleItemElement);