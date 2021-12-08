const postBox = document.getElementById('post-box');
const backBtn = document.getElementById('back-btn');
const updateBtn = document.getElementById('update-btn');
const delBtn = document.getElementById('del-btn');
const url = window.location.href +"data/"
const spinnerBox = document.getElementById("spinner-box");

backBtn.addEventListener('click', () => {
    history.back()
});

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        const data = response.data;
        if (data.logged_in != data.author){
            console.log('different');
        } else {
            updateBtn.classList.remove('not-visible');
            delBtn.classList.remove('not-visible');
        }
        let titleEl = document.createElement('h3');
        titleEl.setAttribute('class', 'mt-3 ');
        let bodyEl = document.createElement('p');
        bodyEl.setAttribute('class', 'mt-1');
        titleEl.textContent = data.title;
        bodyEl.textContent = data.body;
        postBox.appendChild(titleEl);
        postBox.appendChild(bodyEl);
        spinnerBox.classList.add('not-visible');
    },
    error: function(error){
        console.log(error);
    },
})