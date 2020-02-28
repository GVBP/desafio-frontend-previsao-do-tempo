import { Component, OnInit } from '@angular/core';
import { SampleItemsService } from './sample-items.service';
import { PoTableColumn } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SampleItemsService ]
})
export class AppComponent implements OnInit {

  columns: Array<PoTableColumn>;
  items: Array<any>;

  constructor( private service: SampleItemsService ) { }

  ngOnInit() {
    this.columns = this.service.getColumns();
    this.items = this.service.getItems();
    console.log(this.service.getAll());
  }

}
