import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../gem-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;

  constructor() { }

  ngOnInit() {
  }

}
