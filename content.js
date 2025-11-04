
function invertColors() {
    
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(el => {
        const bgColor = window.getComputedStyle(el).backgroundColor;
        const color = window.getComputedStyle(el).color;
        
       
        if (color === 'rgb(255, 255, 255)' || color === 'white') {
            el.style.color = 'black';
        } else if (color === 'rgb(0, 0, 0)' || color === 'black') {
            el.style.color = 'white';
        }

        // Invert background color
        if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'white') {
            el.style.backgroundColor = 'black';
        } else if (bgColor === 'rgb(0, 0, 0)' || bgColor === 'black') {
            el.style.backgroundColor = 'white';
        }
    });
}
invertColors();
