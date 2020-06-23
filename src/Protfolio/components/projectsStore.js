import tweetme from '../projects_images/tweetme.PNG'
import chatapp from '../projects_images/chatapp.JPG'
import hardware_store from '../projects_images/hardware_store.JPG'
import suprateem_portfolio from '../projects_images/suprateem_portfolio.JPG'
import new_year from '../projects_images/new_year.JPG'
import color_classification from '../projects_images/color_classification.JPG'

var projects_store = [
    {
        name: 'Tweeter Clone',
        image: tweetme,
        url: 'http://sumaxtweetme.pythonanywhere.com/',
        catagory: ['django', 'react.js']

    },
    {
        name: 'Realtime Chat App',
        image: chatapp,
        url: '',
        catagory: ['node.js', 'socket.io', 'react.js']
    },
    {
        name: 'Shop Website',
        image: hardware_store,
        url: '',
        catagory: ['html_css', 'vanila']
    },
    {
        name: 'Dev portfolio',
        image: suprateem_portfolio,
        url: 'http://suprateem.herokuapp.com/',
        catagory: ['vanila']
    },
    {
        name: 'Bengali New Year',
        image: new_year,
        url: 'https://dey-sumit.github.io/NewYear/',
        catagory: ['vanila']
    },
    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        url: '',
        catagory: ['node.js', 'machine_learning']
    }
]
export default projects_store
