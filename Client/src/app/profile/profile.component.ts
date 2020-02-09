import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};

  ngOnInit() {
    // this.rest.getProducts();
    this.rest.getProducts().subscribe((data) => {
      console.log(data);
      // this.products = data;
    });
    //  console.log(this.rest.getProducts('i'));
  }



  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
