const colorPicker =document.querySelector('#color-picker')
const fontSelect =document.querySelector('#font-select')
const themeToggle =document.querySelector('#theme-toggle')
const articleColorPicker =document.querySelector('#article-color-picker')
const body =document.querySelector('body')
const newsArticles =document.querySelectorAll('.news')

const loadPreferences = () =>{

};

colorPicker.addEventListener('input' , (e) =>{
    const color = e.target.value;
    document.documentElement.style.setProperty('--primary-color',color)
    localStorage.setItem('primaryColor',color);
});

articleColorPicker.addEventListener('input' , (e) =>{
    const color =e.target.value;
    newsArticles.forEach(article => {article.style.backgroundColor = color});
    localStorage.setItem('articleColor',color);
});

fontSelect.addEventListener('change' , (e) =>{

});

themeToggle.addEventListener('click', () =>{

});