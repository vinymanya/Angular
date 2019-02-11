import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Registration Form";
  user = {
    //define all the fields
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    street: "",
    state: "",
    feeling: false
  };
  users = [];

  onSubmit(formValue, isValid) {
    if (isValid) {
      this.users.push(formValue);
    } else {
      console.log("Form is not valid!");
    }
  }
}
