let page = '';

const getLocation = url => {
    let i = url.length - 1;
    while (url[i] !== '/') {
        page += url[i--];
    }
    return page.split('').reverse().join('');
}

export default getLocation;