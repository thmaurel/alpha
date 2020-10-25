const tabs = () => {
  const tabAbout = document.querySelector('.tab-about');
  const tabPortfolio = document.querySelector('.tab-portfolio');
  const tabContact = document.querySelector('.tab-contact');

  tabAbout.addEventListener('click', (event) => {
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: 'smooth'
    });
  })

  tabPortfolio.addEventListener('click', (event) => {
    window.scrollTo({
      top: 2400,
      left: 0,
      behavior: 'smooth'
    });
  })

  tabContact.addEventListener('click', (event) => {
    window.scrollTo({
      top: 5500,
      left: 0,
      behavior: 'smooth'
    });
  })
}

export { tabs };
