const colorPicker =document.querySelector('#color-picker');
const fontSelect =document.querySelector('#font-select');
const themeToggle =document.querySelector('#theme-toggle');
const articleColorPicker =document.querySelector('#article-color-picker');
const body =document.querySelector('body');
const newsArticles =document.querySelectorAll('.news');

const loadPreferences = () =>{
    document.documentElement.style.setProperty('--primary-color',localStorage.getItem('primaryColor'));
    colorPicker.value = localStorage.getItem('primaryColor');
    
    newsArticles.forEach(article => {article.style.backgroundColor = localStorage.getItem('articleColor')});
    articleColorPicker.value = localStorage.getItem('articleColor');

    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont) {
        document.documentElement.style.setProperty('--font-family',savedFont);
        fontSelect.value = savedFont;
    };  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.textContent = 'light_mode';
    };
};

colorPicker.addEventListener('input' , (e) =>{
    const color = e.target.value;
    document.documentElement.style.setProperty('--primary-color',color);
    localStorage.setItem('primaryColor',color);
});

articleColorPicker.addEventListener('input' , (e) =>{
    const color =e.target.value;
    newsArticles.forEach(article => {article.style.backgroundColor = color});
    localStorage.setItem('articleColor',color);
});

fontSelect.addEventListener('change' , (e) =>{
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('fontFamily', font);
});

themeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.textContent = isDark
        ? 'light_mode'
        : 'dark_mode';
    
    localStorage.setItem('theme',isDark ? 'dark' : 'light');
});

loadPreferences()