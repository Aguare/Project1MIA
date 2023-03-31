import { Component } from "@angular/core";
import { StorageService } from "src/app/Services/Storage/storage.service";
import { RedirectService } from "src/app/Services/redirect.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent {
  constructor(
    private storage: StorageService,
    private redirect: RedirectService
  ) {}

  ngOnInit() {
    this.verifySession();
  }

  verifySession() {
    if (this.storage.get("User") == null) {
      this.redirect.redirectPage("/Login");
    }
  }

  close() {
    this.storage.clear();
    this.redirect.redirectPage("/Login");
  }
}
