const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/** ------ Tab UI ------ */
// const tabs = $$('.tab-item');
// const panes = $$('.tab-pane');

// const tabActive = $('.tab-item.active');
// const line = $('.tabs .line');

// line.style.left = tabActive.offsetLeft + 'px';
// line.style.width = tabActive.offsetWidth + 'px';

// tabs.forEach((tab, index) => {
//     const pane = panes[index];
//     console.log({ tab });
//     tab.onclick = function () {
//         $('.tab-item.active').classList.remove('active');
//         $('.tab-pane.active').classList.remove('active');

//         line.style.left = this.offsetLeft + 'px';
//         line.style.width = this.offsetWidth + 'px';

//         this.classList.add('active');
//         pane.classList.add('active');
//     };
// });
/** ------ Tab UI ------ */

/** ------ Music Player ------ */
const PLAYER_STORAGE_KEY = 'VM_PLAYER';

const player = $('.player');
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Chơi Như Tụi Mỹ',
            singer: 'Andree Right Hand',
            path: './music/ChoiNhuTuiMy-AndreeRightHand-8465614.mp3',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/26/d/1/7/8/1672030370466_500.jpg',
        },
        {
            name: 'Ganh-Ti',
            singer: 'Tage',
            path: './music/GanhTi-Tage-6942215.mp3',
            image: 'https://avatar-ex-swe.nixcdn.com/song/2021/02/15/3/4/6/3/1613370316907_500.jpg',
        },
        // {
        //     name: 'Naachne Ka Shaunq',
        //     singer: 'Raftaar x Brobha V',
        //     path: 'https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3',
        //     image: 'https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg',
        // },
        // {
        //     name: 'Mantoiyat',
        //     singer: 'Raftaar x Nawazuddin Siddiqui',
        //     path: 'https://mp3.vlcmusic.com/download.php?track_id=14448&format=320',
        //     image: 'https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg',
        // },
        // {
        //     name: 'Aage Chal',
        //     singer: 'Raftaar',
        //     path: 'https://mp3.vlcmusic.com/download.php?track_id=25791&format=320',
        //     image: 'https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg',
        // },
        // {
        //     name: 'Damn',
        //     singer: 'Raftaar x kr$na',
        //     path: 'https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3',
        //     image: 'https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg',
        // },
        // {
        //     name: 'Feeling You',
        //     singer: 'Raftaar x Harjas',
        //     path: 'https://mp3.vlcmusic.com/download.php?track_id=27145&format=320',
        //     image: 'https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp',
        // },
    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${
                index === this.currentIndex ? 'active' : ''
            }" data-index="${index}">
                <div
                    class="thumb"
                    style="
                        background-image: url('${song.image}');
                    "
                ></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `;
        });
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvent: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        //Handling animation cd
        const cdThumbAnimate = cdThumb.animate(
            [{ transform: 'rotate(360deg)' }],
            { duration: 10000, iterations: Infinity }
        );

        cdThumbAnimate.pause();

        // ZomOut/ZomIn CD
        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const newWidth = cdWidth - scrollTop;
            cd.style.width = newWidth > 0 ? newWidth + 'px' : 0;
            cd.style.opacity = newWidth / cdWidth;
        };

        // handling click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // When song is played
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        };

        // When song is stopped
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        };

        // When song is changed
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        // Handling seek
        progress.onchange = function (e) {
            const seekTime = (audio.duration * e.target.value) / 100;
            audio.currentTime = seekTime;
        };

        //When next song
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        //When prev song
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Handling random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
        };

        // Handling repeat a song
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        };

        //Handling next song when audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Listen action click on playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode || e.target.closest('.option')) {
                // handle when click on song
                if (songNode) {
                    _this.currentIndex = parseInt(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                }

                // handle when click on song option
                if (e.target.closest('.option')) {
                }
            }
        };
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }, 300);
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function () {
        this.loadConfig();

        this.defineProperties();

        this.handleEvent();

        this.loadCurrentSong();

        this.render();

        // Status default of random and repeat
        randomBtn.classList.toggle('active', this.isRandom);
        repeatBtn.classList.toggle('active', this.isRepeat);
    },
};

app.start();
/** ------ Music Player ------ */
