export class Alert {
  message: string;
  title: string;
  type: string;
  show: boolean;

  constructor(message: string, title: string, type: string, show: boolean) {
    this.message = message;
    this.title = title;
    this.type = type;
    this.show = show;
  }
}
