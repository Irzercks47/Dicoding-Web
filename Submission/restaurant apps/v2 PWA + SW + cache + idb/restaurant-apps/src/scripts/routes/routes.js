import ListResto from '../views/pages/listresto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
    '/': ListResto, // default page
    '/list-restaurant': ListResto,
    '/detail/:id': Detail,
    '/favorite': Like,
};

export default routes;