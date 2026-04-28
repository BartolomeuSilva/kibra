document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializa Ícones Lucide
    lucide.createIcons();

    // 2. Navbar Sticky (Borda Dourada no Scroll)
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal com Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Animação de Contadores (Numbers)
    const counters = document.querySelectorAll('.counter');
    const speed = 1500; // Tempo total da animação em milissegundos

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const currentCount = Math.min(Math.floor((progress / speed) * target), target);
            
            counter.innerText = currentCount;
            
            if (progress < speed) {
                requestAnimationFrame(step);
            } else {
                counter.innerText = target;
            }
        };

        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // 5. Acordeão - FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fecha todos os outros antes de abrir o atual (opcional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Alterna o estado do item clicado
            item.classList.toggle('active');
        });
    });
});
