const accordion = document.querySelector('[data-js="accordion"');

accordion.addEventListener('click', e =>{
    const accordionHeaderId = e.target.dataset.accordionHeader
    const accodionItemtoBeOpen = 
        document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`);
    accodionItemtoBeOpen.classList.toggle('faqAswerHilden')
    })