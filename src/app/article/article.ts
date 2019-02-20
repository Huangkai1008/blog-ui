export class Article {
  /**
   * 文章
   * @param id  ID
   * @param title 标题
   * @param content 内容
   * @param create_time 创建时间
   * @param update_time 更新时间
   * @param category  类型
   * @param tags 标签
   */
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public create_time: string,
    public update_time: string,
    public category: string,
    public tags: number[]
  ) {

  }
}
