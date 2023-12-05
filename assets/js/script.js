const names = [
    'Afterburner', 'AmirKerr', 'bartek', 'Blue Man', 'ChrisViau', 'cody boy', 'croakie',
    'dezm0n', 'DigitalDragon', 'Eikyuu', 'Feonix', 'fractl', 'isaacq', 'jayscott', 'kav2k',
    'MatthewHaggett', 'Meggirbot', 'Reiko', 'Sanne (Ms. Unicorn)', 'schofe', 'Shade', 'Sirkut',
    'Spookydan', 'SquireZed', 'starshadowx2', 'Tallath', 'Xaphedo', 'ajmars', 'ameades', 'Apricus',
    'bonnie bear', 'clarinet', 'classpectanon', 'dafyomilimerick', 'Dee', 'dudu', 'eku',
    'Eojin’s Reviews', 'fab1an', 'fl4min_xX', 'firefly', 'gigglethumps', 'Goofball', 'Historian',
    'Hoxxonia', 'Ippity', 'jrdsctt', 'Kath', 'Kevazy', 'Kinky Kong', 'Krakput', 'Kyun', 'Larc',
    'Marigold', 'Molang', 'noodlecake', 'PtitCitron', 'Replicant', 'Roc', 'ShaneMcG', 'Soar',
    'STON3ZY', 'SunshineyDay', 'TaylorV', 'theo3', 'Trent', 'Weaving Light', 'Zu'
];


const namesListElement = document.getElementById('namesList');

names.forEach((name, index) => {
    const colClass = index % 2 === 0 ? 'even-col' : 'odd-col';

    const colElement = document.createElement('div');
    colElement.classList.add('col', colClass);
    // const truncatedName = name.length > 4 ? name.substring(0, 4) + '...' : name;

    const pElement = document.createElement('p');
    pElement.classList.add('text-slate-400','text-sm','text-truncate', index % 2 === 0 ? 'text-slate-300' : 'text-slate-400');
    pElement.title = name;
    pElement.textContent = name;


    colElement.appendChild(pElement);
    namesListElement.appendChild(colElement);
});

var navbar = document.querySelector('nav');
var offset = document.querySelector('.landingImg-card').offsetHeight;

function handleScroll() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}

window.addEventListener('scroll', handleScroll);
