const input = document.querySelector('#text');
const search = document.querySelector('.btn_sm');
const button = document.querySelector('.btns');
const icon = document.querySelector('.fas');
const search_inp = document.querySelector('.search');
const copyText = document.querySelectorAll(".far");




const logic = () => {
    if (input.value == "") {
        alert("You Need to Write Something");
    } else {
        var my_overlay = document.createElement('section');
        my_overlay.id = "overlay";

        document.body.appendChild(my_overlay);

        // my_overlay.style.position = 'absolute';
        // my_overlay.style.top = 0;
        // my_overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        // my_overlay.style.cursor = 'pointer';

        my_overlay.style.width = window.innerWidth + 'px';
        my_overlay.style.height = window.innerHeight + 'px';
        my_overlay.style.top = window.pageYOffset + 'px';
        my_overlay.style.top = window.pageXOffset + 'px';

        var gifContainer = document.createElement('div');
        gifContainer.classList.add('gif_container');

        my_overlay.appendChild(gifContainer);


        var request = new XMLHttpRequest();
        var random_url = 'http://api.giphy.com/v1/gifs/search?api_key=AJ0Qts8LcHyC1p2XXzDxhynfw5oOl5Pk&q=';

        random_url = random_url + input.value;


        request.open('GET', random_url);

        request.send();

        request.onload = function () {
            var response = request.response;
            var parsed_data = JSON.parse(response);
            for (let i = 0; i < 50; i++) {
                var imag = parsed_data.data[i].images.original.url;
                gifContainer.innerHTML += "<img src='"
                    + imag + "' class='image' />";



                $(function () {
                    $('[data-toggle="popover"]').popover()
                })


                var button_pop = document.createElement('button');
                button_pop.classList.add('btn');
                button_pop.classList.add('btn-secondary');
                button_pop.classList.add('btn-info');
                button_pop.classList.add('far');
                button_pop.setAttribute('type', 'button');
                button_pop.setAttribute('data-toggle', 'popover');
                button_pop.setAttribute('data-container', 'body');
                button_pop.setAttribute('data-placement', 'left');
                button_pop.innerHTML = "Url";
                button_pop.style.zIndex = "10";
                button_pop.style.color = "black";
                gifContainer.appendChild(button_pop);
            }

            var icons = document.querySelectorAll('.far');
            var cnt_icons = 0;
            var child_count = 1;
            while(true){
                var content = gifContainer.childNodes[child_count - 1].src;
                icons[cnt_icons].setAttribute('data-content', content);
                cnt_icons++;
                child_count+=2;
                if(cnt_icons==50){
                    break;
                }
            }
        }
    }

    my_overlay.addEventListener('click', function (e) {
        if (e.target.tagName == 'SECTION' || e.target.tagName == "DIV") {
            gifContainer.style.display = "none";
            my_overlay.style.display = "none";
            search.style.display = "flex";
            button.style.display = "flex";
            icon.style.display = "inline";
            location.reload();
        }
    })
}

search.addEventListener('click', () => {
    logic();
})

icon.addEventListener('click', () => {
    logic();
})






