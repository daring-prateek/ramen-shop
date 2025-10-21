document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-box input');
  const menuSection = document.querySelector('.menu-section');
  const otherSections = document.querySelectorAll('body > section, footer'); // Only sections & footer
  const menuCards = document.querySelectorAll('.menu-container .card');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    // Show menu section and navbar always
    if (filter.length > 0) {
      otherSections.forEach(section => section.style.display = 'none');
      menuSection.style.display = 'block';
    } else {
      otherSections.forEach(section => section.style.display = 'block');
      menuSection.style.display = 'block';
    }

    // Filter menu cards
    menuCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(filter) || description.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
