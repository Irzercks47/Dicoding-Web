const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    //path parameter
    //bila mempunayi entity yang banyak kita bisa menggunakan path parameter
    //bila tidak ditambah dengan "?" bila kita akses users maka akan eror untuk menghindari ini maka menggunakan
    //path optional yaitu dengan menggunakan "?"
    //kita tidak bisa menggunakannya seperti ini /{one?}/{two} karena optional path hanya bisa pada akhir param
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'Stranger' } = request.params;
            return `Hello, ${username}!`;
        },
    },
    //query params 
    //metode lain dalam pengambilan data pada hapi adalah query params yang mengambil data localhost:5000?name=harry&location=bali
    //pada contoh diatas terdapat 2 param untuk mengambilnya kita bisa menggunakan query params
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'Stranger' } = request.params;
            const { lang } = request.query

            if(lang == 'id'){
                return `hai, selamat pogi ${name}`
            }

            return `Hello, ${name}!`;
        },
    },
];

module.exports = routes;