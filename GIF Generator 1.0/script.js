const input = document.querySelector('#gif_input');
const search = document.querySelector('.btn');
const gifContainer = document.querySelector('.gif_container');


search.addEventListener('click',()=>{
    if(input.value==""){
        alert("You Need to Write Something");
    }else{
        gifContainer.innerHTML = "";
        var request = new XMLHttpRequest();
        var random_url='http://api.giphy.com/v1/gifs/search?api_key=AJ0Qts8LcHyC1p2XXzDxhynfw5oOl5Pk&q=';

        random_url = random_url + input.value;


        request.open('GET',random_url);

        request.send();

        request.onload = function(){
            var response = request.response;
            var parsed_data = JSON.parse(response);
            for(let i=0;i<50;i++){
                var imag = parsed_data.data[i].images.original.url;
                gifContainer.innerHTML += "<img src='" 
                + imag + "' class='image' />";
            }
            
        }
    }
})
