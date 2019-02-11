import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-ninja",
  styleUrls: ["ninja.component.css"],
  template: `
    <div class="fields">
      <h3>Farm</h3>
      <p>Earns 2-5 Gold</p>
      <button (click)="farmClick()">Farm!</button>
    </div>

    <div class="fields">
      <h3>Cave</h3>
      <p>Earns 5-10 Gold</p>
      <button (click)="caveClick()">Cave!</button>
    </div>

    <div class="fields">
      <h3>Casino</h3>
      <p>Earn up to or lose up to 100 Gold</p>
      <button (click)="casinoClick()">Casino!</button>
    </div>

    <div class="fields">
      <h3>House</h3>
      <p>Earns 7-15 Gold</p>
      <button (click)="houseClick()">House!</button>
    </div>
  `
})
export class NinjaComponent {
  @Output()
  farm: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  cave: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  casino: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  house: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  farmClick() {
    this.farm.emit("farm");
  }

  caveClick() {
    this.cave.emit("cave");
  }

  casinoClick() {
    this.casino.emit("casino");
  }

  houseClick() {
    this.house.emit("house");
  }
}
