function openContent(evt, tabName) {
  var i, tabcontent, tablinks;

  // Get all the tabcontent elements and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.opacity = "0";
  }

  // Get all the tablinks elements and remove the 'is-active' class
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }

  // Display the clicked tabcontent and add the 'is-active' class to the clicked element
  var content = document.getElementById(tabName);
  content.style.display = "block";
  evt.currentTarget.className += " is-active";

  // Animate opacity
  var start;
  var duration = 400; // duration in ms
  var animate = function(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    content.style.opacity = Math.min(progress / duration, 1);
    if (progress < duration) {
      window.requestAnimationFrame(animate);
    }
  };
  window.requestAnimationFrame(animate);
}



function toggleHamburgerMenu(e) {
  var hamburgerNav = document.getElementById('hamburger-nav');
  var hamburgerMenu = document.querySelector('.hamburger-menu');

  // Закрывать меню, если клик происходит вне области меню или на ссылке внутри меню
  if (
    (e.target !== hamburgerNav && !hamburgerNav.contains(e.target)) &&
    (e.target !== hamburgerMenu && !hamburgerMenu.contains(e.target))
  ) {
    hamburgerNav.style.display = 'none';
  } else {
    if (hamburgerNav.style.display === 'none' || hamburgerNav.style.display === '') {
      hamburgerNav.style.display = 'flex';
    } else {
      hamburgerNav.style.display = 'none';
    }
  }
}
