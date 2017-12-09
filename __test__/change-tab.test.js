import $ from 'jquery';
import { newInstance } from './utils';

describe('change tab test', () => {
  newInstance();
  test('use base color', () => {
    $('.wechat-picker-box p i').eq(0).click();
    expect($('.wechat-colorpicker').hasClass('base-color')).toBe(true);
  });

  test('use picker', () => {
    $('.wechat-picker-box p i').eq(1).click();
    expect($('.wechat-colorpicker').hasClass('more-color')).toBe(true);
  });
});
