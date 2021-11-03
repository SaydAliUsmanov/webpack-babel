import './styles.css';
import img from '../assets/logo.png';

const wrap = document.getElementById('wrapper');
const image = document.createElement('img');
const text = document.createElement('div');

image.src = img;
image.style.width = '300px';
image.style.height = '300px';
text.textContent = 'intocode пока что не доступен';
wrap.append(image, text);
