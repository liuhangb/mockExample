import Mock from 'mockjs'


// Mock.mock("/api/hello", "get", {
//     "code": 0,
//     "data": {
//         "fullName": "@CNAME",
//         "userId": 1000000231055,
//         "username": "liuHang"
//     },
//     "msg": "success"
// })


const data = Mock.mock({
    'items|30': [{
        id: '@id',
        title: '@sentence(10, 20)',
        'status|1': ['published', 'draft', 'deleted'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
    }]
})
export default [
    {
        url: '/api/hello',
        type: 'get',
        response: config => {
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }
]
