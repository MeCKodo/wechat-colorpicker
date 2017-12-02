import './style.css';
import SimpleColorPicker from './picker/index';

var colorPicker = new SimpleColorPicker({
    el: '#box',
    color: '#123456',
    background: '#656565'
});

colorPicker.onChange(function(hexStringColor) {
    document.body.style.backgroundColor = hexStringColor;
    // document.querySelector('h1 a').style.color = colorPicker.color.isDark() ? '#FFFFFF' : '#000000';
});
