// success function
function catSuccess(response) {
    var cat_section = document.getElementById('catGenerator');
    var new_cat_image = document.createElement('img');
    new_cat_image.src = response.config.url.substring(0,19) + response.data.url.substring(1);
    cat_section.appendChild(new_cat_image);
}

// failure function
function catFailure(error) {
    var cat_section = document.getElementById('catGenerator');
    var error_message = document.createElement('h1');
    error_message.innerText = "Please refresh and try again, something was wrong";
    cat_section.appendChild(error_message);
}

// cat generator function
function catGenerator() {
    axios.request({
        url: "https://cataas.com/cat?json=true",

    }).then(catSuccess).catch(catFailure);
}

// button to call catGenerator function
var cat_button = document.getElementById('catGeneratorButton');
cat_button.addEventListener('click', catGenerator);