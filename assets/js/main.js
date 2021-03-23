// SCOMMENTARE SE SI USA JQUERY
// $(document).ready(function(){
//
// });

// SCOMMENTARE SE SI USA VUE
var app = new Vue({
  el: '#root',
  data: {
    title: 'Choose the movie',
    year: '',
    plot: '',
    img: ''
  },

  methods: {
    onChange: function(event) {
      console.log(event.target.value);
      if (event.target.value == 'shang') {
        this.title = 'shang-chi and the Legend of the Ten Rings',
        this.year = '2021',
        this.plot = 'Shang-Chi is a master of numerous unarmed and weaponry-based wushu styles, including the use of the gun, nunchaku, and jian.',
        this.img = './assets/img/shang.jpg'
      } else if (event.target.value == 'widow') {
        this.title = 'black widow',
        this.year = '2021',
        this.plot = 'At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.',
        this.img = './assets/img/bw.jpeg'
      } else if (event.target.value == 'spider') {
        this.title = 'spider-man: no way home',
        this.year = '2021',
        this.plot = 'Spider-Man: No Way Home is an upcoming American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing.',
        this.img = './assets/img/spider.jfif'
      } else if (event.target.value == 'antman') {
        this.title = 'Ant-Man and the Wasp: Quantumania',
        this.year = '2022',
        this.plot = 'Ant-Man and the Wasp: Quantumania is an upcoming American superhero film based on the Marvel Comics characters Scott Lang / Ant-Man and Hope van Dyne / Wasp',
        this.img = './assets/img/antman.jpg'
      } else if (event.target.value == 'thor') {
        this.title = 'Thor: Love and Thunder',
        this.year = '2022',
        this.plot = 'Thor: Love and Thunder is an upcoming American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is intended to be the direct sequel to Thor: Ragnarok and the 29th film in the Marvel Cinematic Universe.',
        this.img = './assets/img/thor.jpg'
      } else if (event.target.value == 'strange') {
        this.title = 'Doctor Strange in the Multiverse of Madness',
        this.year = '2022',
        this.plot = 'Doctor Strange in the Multiverse of Madness is an upcoming American superhero film based on the Marvel Comics character Doctor Strange.',
        this.img = './assets/img/strange.png'
      } else if (event.target.value == 'panther') {
        this.title = 'black panther II',
        this.year = '2022',
        this.plot = 'The next installment in the "Black Panther" franchise.',
        this.img = './assets/img/panther.jpg'
      }
    }
  }

})
