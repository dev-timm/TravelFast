import cities from './data.js';

const sidebar = document.querySelector('.sidebar');
const sidebarOpen = document.querySelector('.sidebar-open');
const sidebarClose = document.querySelector('.sidebar-close');

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
