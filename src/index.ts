import './style.css';
import SimpleColorPicker from './picker/index';

const colorPicker = new SimpleColorPicker({
    el: '#box',
    color: '#fff',
    background: '#fff'
});

colorPicker.onChange(function(hexStringColor) {
    document.body.style.backgroundColor = hexStringColor;
    // document.querySelector('h1 a').style.color = colorPicker.color.isDark() ? '#FFFFFF' : '#000000';
});
