import { $ } from './selector';

const btnSwitch = $('#switch');

const setTheme = () => {
    if (localStorage.getItem('theme') === null) {
        document.body.classList.add('light');
    } else {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            btnSwitch.classList.add('active');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            btnSwitch.classList.remove('active');
        }
    }
}

export const theme = () => {
    btnSwitch.addEventListener('click', () => {
        btnSwitch.classList.toggle('active');
        
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    
        setTheme();
    });

    setTheme();
}