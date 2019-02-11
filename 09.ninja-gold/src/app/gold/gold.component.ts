import { Component, Input } from "@angular/core";

@Component({
  selector: "app-gold",
  styleUrls: ["gold.component.css"],
  template: `
    <div>
      <p>{{ farm }}</p>
      <p>{{ cave }}</p>
      <p>{{ casino }}</p>
      <p>{{ house }}</p>
    </div>
  `
})
export class GoldComponent {
  @Input()
  farm: string;

  @Input()
  cave: string;

  @Input()
  casino: string;

  @Input()
  house: string;

  constructor() {}
}
