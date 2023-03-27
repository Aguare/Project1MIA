import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { timeout } from "rxjs";
import { Alert } from "src/app/Entitys/Alert";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  @Input() alert: Alert = new Alert("", "", "danger", false);
  @Input() typeNum: number = 1;
  constructor() {}
}
