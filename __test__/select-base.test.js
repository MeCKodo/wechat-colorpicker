import $ from 'jquery';
import { newInstance } from './utils';

const prfix = '__wechat__picker__color__';

beforeEach(() => {
  localStorage.clear();
});

describe('select #fffed5', () => {
  newInstance();
  test('localStorage setItem #fffed5', () => {
    $('.wechat-base-wrapper span').eq(3).click();
    expect(localStorage.getItem(prfix)).not.toBeNull();
    expect(localStorage.getItem(prfix)).toBe('#fffed5');
  });
});

describe('select mulit color', () => {
  test('click #ffffff #ffd7d5 #ffdaa9', () => {
    newInstance();
    $('.wechat-base-wrapper span').eq(0).click();
    $('.wechat-base-wrapper span').eq(1).click();
    $('.wechat-base-wrapper span').eq(2).click();
    expect(localStorage.getItem(prfix)).toBe('#ffdaa9,#ffd7d5,#ffffff');
  });
  test('click #ffffff #ffd7d5 #ffdaa9 #ffffff', () => {
    newInstance();
    $('.wechat-base-wrapper span').eq(0).click();
    $('.wechat-base-wrapper span').eq(1).click();
    $('.wechat-base-wrapper span').eq(2).click();
    $('.wechat-base-wrapper span').eq(0).click();
    expect(localStorage.getItem(prfix)).toBe('#ffffff,#ffdaa9,#ffd7d5');
  });
});
