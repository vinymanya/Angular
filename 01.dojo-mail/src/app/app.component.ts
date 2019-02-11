import { Component } from "@angular/core";

interface Email {
  email: string;
  important: boolean;
  subject: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Dojo Mail";

  emails: Array<Email> = [
    {
      email: "bill@gates.com",
      important: true,
      subject: "New Windows",
      content: "Windows XI will lanch in 2100"
    },
    {
      email: " ada@lovellace.com",
      important: true,
      subject: "Programming",
      content: "Echantress of Numbers."
    },
    {
      email: "john@carmac.com",
      important: false,
      subject: "Updated Algo",
      content: "New Algorithm for shodow volumes."
    },
    {
      email: "gabe@gates.com",
      important: false,
      subject: "HL3",
      content: "Just Kidding..."
    },
    {
      email: "Viny@manya.com",
      important: true,
      subject: "Coding skills",
      content: "New Hobby"
    }
  ];
}
