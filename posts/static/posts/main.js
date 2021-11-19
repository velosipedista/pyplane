const helloWorldBox = document.getElementById('hello-world');
const postsBox = document.getElementById('posts-box');
const spinnerBox = document.getElementById('spinner-box');
const loadBtn = document.getElementById('load-btn');
const endBox = document.getElementById('end-box');


$.ajax({
    type: 'GET',
    url: '/hw/',
    success: function(response) {
        helloWorldBox.innerHTML = response.text  

    },
    error: function(error) {
        console.log(error);
    },
})

let visible = 3;

const getData = () => {
    $.ajax({
        type: 'GET',
        url: `/data/${visible}`,
        success: function(response) {
            console.log(response);
            const data = response.data;
            setTimeout(()=>{
                spinnerBox.classList.add('not-visible')
                console.log(data);
                data.forEach(el => {
                    postsBox.innerHTML += `
                    <div class="card mb-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${el.title}</h5>
                            <p class="card-text">${el.body}</p>
                        </div>
                        <div class="card-footer">
                            <div class="card-footer">
                                <div class="col-2">
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                                <div class="col-2">
                                    <br><a href="#" class="btn btn-primary">${el.liked ? `Unlike (${el.count})` : `Like (${el.count})`}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                });
            }, 500);
           console.log('main.js:',response.size);
           if (response.size == 0) {
               endBox.textContent = 'No posts added yet...'
           } else if(response.size <= visible) {
               loadBtn.classList.add('not-visible');
               endBox.textContent = 'No more posts to load...'
           }
    
        },
        error: function(response) {
            console.log(error);
    
        },
    })
}


loadBtn.addEventListener('click', ()=>{
    spinnerBox.classList.remove('not-visible')
    visible += 3
    getData()
})

getData();