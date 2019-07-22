'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts  article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');

}

// Module 5 cz.2
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';


  function clearMessages() {
    document.querySelector('.titles').innerHTML = '';
  }

function generateTitleLinks() {
  clearMessages()
  /* [undone mistake??] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  /* [in progress]for each article */

  const articles = document.querySelectorAll('.post');

  let html = '';
  for (let article of articles) {

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    console.log(articleTitle);

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

// Module 6 

function generateTags(){
  /* find all articles */
 const articles = document.querySelectorAll('.post');
 console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles){ 
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute  */
    const articleTags = article.getAttribute('data-tags');
    
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag); 
      /* generate HTML of the link */
      const linkHTMLTag = '<li><a href="#tag-' + tag + '">' + tag +'</a></li>';
      console.log(linkHTMLTag);
      /* add generated code to html variable */
      html = html + linkHTMLTag;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
  tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
 
  /* find all tag links with class active */
  const activeTags = tag.querySelectorAll('a.active[href^="#tag-"]');
  console.log(activeTags);
  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    
    /* remove class active */
    

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */
  
  /* END LOOP: for each link */
}

addClickListenersToTags();