const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

// const progress=document.querySelector('progress');

const songs = [
    {
        name: "Brown Munde",
        title: "Brown Munde",
        artist: "A.P Dhillon",
    },

    {
        name: "Libass",
        title: "Libass",
        artist: "Kaka",
    },

    {
        name: "Jatt te Jawani",
        title: "Jatt te Jawani",
        artist: "Kaka",
    },
];

let is_playing = false;

const play_music = () => {
    is_playing = true;
    music.play();

    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
    
};



const pause_music = () => {
    is_playing = false;
    music.pause();

    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');

};

play.addEventListener('click', () => {
    is_playing ? pause_music() : play_music();
})

const load_song = (songs) => {
    title.innerHTML = songs.title;
    artist.innerHTML = songs.artist;

    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};



song_index = 0;
const next_song = () => {
    song_index = (song_index + 1) % songs.length;
    load_song(songs[song_index]);

    play_music();
}

const prev_song = () => {
    song_index = (song_index - 1 + songs.length) % songs.length;
    load_song(songs[song_index]);

    play_music();
}
next.addEventListener('click', next_song);
prev.addEventListener('click', prev_song);
