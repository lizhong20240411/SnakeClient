
export class Random {
  /**
   * 返回一个 [min,max) 的随机整数
   * @param min 最小整数
   * @param max 最大整数
   */
  static RangeInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * 返回一个 [min,max) 的随机浮点数
   * @param min 最小值
   * @param max 最大值
   */
  static RangeFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  /**
   * 返回一个 [0,1) 的随机数
   */
  static Range() {
    return Math.random();
  }
}