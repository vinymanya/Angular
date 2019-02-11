import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { GithubService } from "./github.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userExists: boolean = null;
  score: number = 0;
  username: string = null;

  constructor(private githubService: GithubService) {}

  calculateScore(form: NgForm, isValid: boolean) {
    if (isValid) {
      this.username = form.value.username;

      this.githubService.retrieveGitHubUser(this.username).subscribe(
        //what to do when there is a user
        user => {
          this.userExists = true;
          // Calculate the score for this user
          this.score = user.public_repos + user.followers;
          // Reset or clear the form
          form.reset();
        },
        //what to do when there is no user
        (response: Response) => (this.userExists = false)
      );
    }
    return false;
  }
}
