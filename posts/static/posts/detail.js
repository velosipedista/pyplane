const postBox = document.getElementById('post-box');
const backBtn = document.getElementById('back-btn');
const updateBtn = document.getElementById('update-btn');
const delBtn = document.getElementById('del-btn');

const url = window.location.href + "data/"
const updateUrl = window.location.href + "update/"
const deleteUrl = window.location.href + "delete/"

const updateForm = document.getElementById('update-form');
const deleteForm = document.getElementById('delete-form');

const spinnerBox = document.getElementById("spinner-box");

const titleInput = document.getElementById('id_title');
const bodyInput = document.getElementById('id_body');

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
        titleEl.setAttribute('id', 'title');

        let bodyEl = document.createElement('p');
        bodyEl.setAttribute('class', 'mt-1');
        bodyEl.setAttribute('id', 'body');

        titleEl.textContent = data.title;
        bodyEl.textContent = data.body;
        postBox.appendChild(titleEl);
        postBox.appendChild(bodyEl);
        titleInput.value = data.title;
        bodyInput.value = data.body;
        spinnerBox.classList.add('not-visible');
    },
    error: function(error){
        console.log(error);
    },
})

updateForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title');
    const body = document.getElementById('body');
})