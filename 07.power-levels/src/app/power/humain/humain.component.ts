import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-humain',
  templateUrl: './humain.component.html',
  styleUrls: ['./humain.component.css']
})
export class HumainComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

}
