(() => {
  const theme = new URLSearchParams(window.location.search).get('theme');
  document.documentElement.dataset.theme = ['paper', 'copper', 'lilac'].includes(theme) ? theme : 'paper';
  if (theme === 'lilac') document.querySelector('meta[name="theme-color"]').content = '#f6f4f5';
})();
