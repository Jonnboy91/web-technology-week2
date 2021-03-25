// adding with DOM-Methods

'use strict';

const form = document.querySelector('#search-form');
const list = document.getElementById('list');
let placeholder = 'http://placekitten.com/210/295';
let placeholderBig = 'http://placekitten.com/1000/600';

form.addEventListener('submit', searchTvMaze);

async function searchTvMaze(searchTarget) {
  list.innerHTML = '';
  searchTarget.preventDefault();
  try {
    const searchWord = document.querySelector('input[name=search-field]').value;
    const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchWord}`);
    const shows = await result.json();


    // Adding shows with forEach

    shows.forEach(shows => {

      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      const img = document.createElement('img');
      const section = document.createElement('section')
      const span = document.createElement('span')
      const a = document.createElement('a')
      const span2 = document.createElement('span')
      const br = document.createElement('br')
      const bigImg = document.createElement('img')

      article.style = "border-bottom: 4px solid black; padding-top: 20px"

      h2.innerHTML = shows.show.name;
      section.innerHTML = shows.show.summary
      a.innerHTML = "Link to website"
      span2.innerHTML = "Genre: " + shows.show.genres.join(', ')

      a.href = shows.show.url || shows.show.officialSite

      img.alt = shows.show.name;
      img.src = shows.show.image ? shows.show.image.medium : placeholder;
      bigImg.src = shows.show.image ? shows.show.image.original : placeholderBig;

      span.appendChild(a);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(section);
      article.appendChild(br);
      article.appendChild(span)
      article.appendChild(br);
      article.appendChild(span2)

      // add the big image to the end of list
      img.addEventListener('click', ()=>{
        article.appendChild(bigImg)
      })

      // removes the big image from the end of list
      bigImg.addEventListener('click', ()=>{
        article.removeChild(bigImg)
      })

      list.appendChild(article);

    });

  } catch (error) {
    console.error(error.message);
  }
}