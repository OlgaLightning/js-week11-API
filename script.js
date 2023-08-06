document.addEventListener('DOMContentLoaded', function (event) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

            function getPosts(data) {
                const container = document.querySelector('.container');

                container.innerHTML = '';
                data.forEach(element => {
                    const header = document.createElement('h3');
                    const p = document.createElement('p');

                    header.innerText = 'Заголовок: ' + element.title
                    p.innerText = 'Статья: ' + element.body

                    container.appendChild(header)
                    container.appendChild(p)
                });
            }

            getPosts(data);
        })
        .catch(error => console.log(error))
})