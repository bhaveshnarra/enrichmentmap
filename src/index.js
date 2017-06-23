import _ from 'lodash';
import './css/style.css';
import Icon from '../public/img/pc_icon.png';

  function component() {
    var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }

document.body.appendChild(component());
