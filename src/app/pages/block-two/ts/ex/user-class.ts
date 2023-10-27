class User {
    private nickName: string = 'dev';
    static secret = 1234;
  
    constructor(
      public name: string,
      public age: number
    ) {}
  
    getPass(): string {
      return `${this.name}${User.secret}`;
    }
}