import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "github-actions-example";
  public testEnv = environment.testEnv;

  public ngOnInit(): void {
    console.log("test");

    alert(this.testEnv);
  }
}
