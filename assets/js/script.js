import cities from './data.js';

const sidebar = document.querySelector('.sidebar');
const sidebarList = document.querySelector('.sidebar-list');
const sidebarOpen = document.querySelector('.sidebar-open');
const sidebarClose = document.querySelector('.sidebar-close');
const cityDOM = document.querySelector('.city-info');

// open sidebar
sidebarOpen.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

// close sidebar
sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

// add city links to sidebar
const sidebarCity = cities
  .map((city) => {
    return `
        <li>
          <a href="#" class="sidebar-city" data-id="${city.name}">
            <p>${city.name}</p>
            <img src="./assets/images/chevron-right.svg" alt="chevron" />
          </a>
        </li>
        `;
  })
  .join('');

sidebarList.innerHTML = sidebarCity;

// display selected city in UI
const displayCity = (allCities) => {
  let singleCity = allCities.map((city) => {
    return `<h1 class="city-title">${city.name}</h1>
        <hr />
        <p class="city-desc">
          ${city.desc}
        </p>
        <div class="actions">
          <a href="${city.booking}" class="primary-cta">Wanna Go?</a>
          <a href="${city.info}" class="secondary-cta">
            Get more info
            <img
              class="link-arrow"
              src="./assets/images/arrow-right.svg"
              alt="arrow right"
          /></a>
        </div>`;
  });
  cityDOM.innerHTML = singleCity;
};

const sidebarCities = document.querySelectorAll('.sidebar-city');

sidebarCities.forEach((city) => {
  city.addEventListener('click', (e) => {
    const selectedCity = e.currentTarget.dataset.id;
    const cityContent = cities.filter((cityItem) => {
      if (cityItem.name === selectedCity) {
        return cityItem;
      }
    });
    displayCity(cityContent);
  });
});
