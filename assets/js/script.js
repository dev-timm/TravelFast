import cities from './data.js';

const sidebar = document.querySelector('.sidebar');
const sidebarList = document.querySelector('.sidebar-list');
const sidebarOpen = document.querySelector('.sidebar-open');
const sidebarClose = document.querySelector('.sidebar-close');

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

const sidebarData = cities
  .map((city) => {
    return `
        <li>
          <a href="#" class="sidebar-item">
            <p>${city.name}</p>
            <img src="./assets/images/chevron-right.svg" alt="chevron" />
          </a>
        </li>
        `;
  })
  .join('');

sidebarList.innerHTML = sidebarData;
