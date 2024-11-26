// Get the sidenav, open button, and close button
const sidenav = document.getElementById('mySidenav');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Function to open the sidenav
openBtn.addEventListener('click', function() {
  sidenav.classList.add('open');
});

// Function to close the sidenav
closeBtn.addEventListener('click', function() {
  sidenav.classList.remove('open');
});
