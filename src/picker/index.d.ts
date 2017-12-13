export interface ColorPickerOptions {
  color?: string | number;
  background?: string | number;
  el?: HTMLElement;
  width?: number;
  height?: number;
  onChange?(color):void;
}

export interface ColorPicker {
  new (parent, options?: ColorPickerOptions): ColorPicker;

  appendTo(domElement: HTMLElement | String): void;

  remove(): void;

  setColor(color: string | number): void;

  setSize(width: number, height: number): void;

  setBackgroundColor(color: string | number): void;

  setNoBackground(): void;

  onChange(callback: Function): void;

  getColor(): string | number;

  getHexString(): string;

  getHexNumber(): number;

  getRGB(): { r: number, g: number, b: number };

  getHSV(): { h: number, s: number, v: number };

  isDark(): boolean;

  isLight(): boolean;
}

export var ColorPicker: ColorPicker;

export default ColorPicker;
