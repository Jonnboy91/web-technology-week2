// adding with .innerHTML

'use strict';

const form = document.querySelector('#search-form');
const list = document.getElementById('list');
let placeholder = 'http://placekitten.com/210/295';

form.addEventListener('submit', searchTvMaze);

async function searchTvMaze(searchTarget) {
  list.innerHTML = '';
  searchTarget.preventDefault();
  try {
    const searchWord = document.querySelector('input[name=search-field]').value;
    const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchWord}`);
    const shows = await result.json();

    // Adding shows with forEach

    shows.forEach((shows, index) => {
      list.innerHTML +=
          `<article class="movie-information" style="border-bottom: 4px solid black; padding-top: 20px">
        <h2>${shows.show.name}</h2>
        <img data-id="${index}" src="${shows.show.image ? shows.show.image.medium : placeholder}" alt="${shows.show.name}">
        <section>${shows.show.summary}</section>
        <br>
        <span><a href="${shows.show.url || shows.show.officialSite}">Link to website</a>  </span>
        <br>
        <span>Genre: ${shows.show.genres.join(', ')}</span>
        </article>`
    });

    const images = document.querySelectorAll('img');

    images.forEach(image => {
      image.addEventListener('click', ()=>{
        const id = image.dataset.id;
        console.log(shows[id].show.image.original);
      })
    });

  } catch (error) {
    console.error(error.message);
  }

// Adding shows with .map (code is cleaner due to only having to for example put show.summary instead of shows.show.summary, but the problem is that after the article there comes a mysterious "," from somewhere and I can't find where it comes from)
/*
  list.innerHTML = shows.map(({show}) =>
      `<article class="movie-information" style="border-bottom: 4px solid black; padding-top: 20px">
        <h2>${show.name}</h2>
        <img src="${show.image ? show.image.medium : placeholder}" alt="${show.name}">
        <section>${show.summary}</section>
        <br>
        <span><a href="${show.url || show.officialSite}">Link to website</a>  </span>
        <br>
        <span>Genre: ${show.genres.join(', ')}</span>
        </article>`);

  } catch (error) {
    console.error(error.message);
  }
 */

}