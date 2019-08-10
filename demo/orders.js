const MagentoAPI = require('../index');

const client = new MagentoAPI({
    'url': 'http://www.test.com/index.php/rest',
    'consumerKey': '<OAuth 1.0a consumer key>',
    'consumerSecret': '<OAuth 1.0a consumer secret>',
    'accessToken': '<OAuth 1.0a access token>',
    'accessTokenSecret': '<OAuth 1.0a access token secret>'
})

const getOrders = async () => {
    try {
        let response = await client.query('GET', 'orders');
        console.log(response.data)
    } catch (e) {
        console.log(e);
    }
}

getOrders();