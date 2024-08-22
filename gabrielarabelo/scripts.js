document.querySelectorAll('nav ul li a '). forEach (anchor => {
    anchor.addEventListener('click', function(e)  {
        e.preventDefault();

        document.querySelector(this.getAttribute( 'hr ef')). scrollIntoViem ({
            behavior: 'smooth'
        });
    });
});

const observer = new
IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

    entry.target.classList.add('show') ;
        } else {
    entry.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Função para destacar a seção ativa no menu de navegação
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});