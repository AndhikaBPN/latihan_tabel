new Vue({});
var app = new Vue({
    el : "#app",
    methods: {
        simpan_buku:function(){
            var b={'judul':this.judul, 'genre':this.genre, 'namap':this.namap};
            this.dataBuku.push(b);
        }
    },
    data: {
            'dataBuku' : [
                            {'judul' : 'Fairy Tail',  'genre' : 'Action', 'namap' : 'Hiro Mashima'},
                            {'judul' : 'Naruto',  'genre' : 'Action', 'namap' : 'Masashi Kishimoto'},
                            {'judul' : 'Ao Haru Ride', 'genre' : 'Romance', 'namap' : 'Io Sakisaka'},
                         ],
            'judul' : '',
            'genre' : '',
            'namap' : '',
    }
})