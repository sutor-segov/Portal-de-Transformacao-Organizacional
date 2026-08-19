document.addEventListener("DOMContentLoaded", () => {
    
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
            }, index * 200);
        });
    }, 100);

    
    const diagramIframe = document.querySelector('.diagrams-embed iframe');
    if (diagramIframe) {
        diagramIframe.addEventListener('load', function() {
            console.log("Árvore de Macroprocessos carregada.");
        });
    }

    
    const searchInput = document.getElementById('busca-unidade');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.card-link'); 

            cards.forEach(link => {
                const text = link.innerText.toLowerCase();
                
                
                if (text.includes(filter)) {
                    link.style.display = ''; 
                } else {
                    link.style.display = 'none'; 
                }
            });
        });
    }
});