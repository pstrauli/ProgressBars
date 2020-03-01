
document.addEventListener('DOMContentLoaded', () => {

  const app = document.querySelector('#app');


  
  progress1.mount(app);
  progress2.mount(app);
  progress3.mount(app);

  const colorMixBtn = document.querySelector('#colorMix');
  colorMixBtn.addEventListener('click', () => {
    const colorPalette = document.querySelector('#colorPalette');
    colorPalette.style.backgroundColor = `rgb(${progress1.value * 15}, ${progress2.value * 15}, ${progress3.value * 15})`
});

});