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
    //request payload
    //pada hapi kita sudah tidak perlu menrus data yang dikirim karena data yang awalnya stream sudah di proses oleh hapi 
    //sehingga data yang kita pakai langsung dalam bentuk object
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    },
    //response toolkit
    //parameter h pada handler di hapi merupakan hapi dimana dia dapat menampung banyak method yang digunakan untuk menannggapi request
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // return `Homepage`;
            //detailed notion
            // const response = h.response('success');
            // response.type('text/plain');
            // response.header('X-Custom', 'some-value');
            // return response;
            //chained
            return h.response('success')
                .type('text/plain')
                .header('X-Custom', 'some-value');
        },
    },
];

module.exports = routes;