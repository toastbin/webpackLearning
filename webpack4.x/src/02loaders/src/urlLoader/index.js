import img1 from '../../static/imgs/pic.jpg'
import img2 from '../../static/imgs/small.png'



console.log(img1, img2);
const img = new Image()
img.src = img2
document.querySelector('body').append(img)