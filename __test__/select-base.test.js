import $ from 'jquery';
import { newInstance, uuid } from './utils';

const prfix = '__wechat__picker__color__';

beforeEach(() => {
  localStorage.clear();
});

describe('select #fffed5', () => {
  newInstance();
  const storagePrefix = `${prfix}${uuid}`;
  test('localStorage setItem #fffed5', () => {
    $('.wechat-base-wrapper span').eq(3).click();
    expect(localStorage.getItem(storagePrefix)).not.toBeNull();
    expect(localStorage.getItem(storagePrefix)).toBe('#fffed5');
  });
});

describe('select mulit color', () => {
  test('click #ffffff #ffd7d5 #ffdaa9', () => {
    newInstance();
    const storagePrefix = `${prfix}${uuid}`;
    $('.wechat-base-wrapper span').eq(0).click();
    $('.wechat-base-wrapper span').eq(1).click();
    $('.wechat-base-wrapper span').eq(2).click();
    expect(localStorage.getItem(storagePrefix)).toBe('#ffdaa9,#ffd7d5,#ffffff');
  });
  test('click #ffffff #ffd7d5 #ffdaa9 #ffffff', () => {
    newInstance();
    const storagePrefix = `${prfix}${uuid}`;
    $('.wechat-base-wrapper span').eq(0).click();
    $('.wechat-base-wrapper span').eq(1).click();
    $('.wechat-base-wrapper span').eq(2).click();
    $('.wechat-base-wrapper span').eq(0).click();
    expect(localStorage.getItem(storagePrefix)).toBe('#ffffff,#ffdaa9,#ffd7d5');
  });
});
