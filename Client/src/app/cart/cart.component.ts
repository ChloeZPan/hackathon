import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  people = false;
  name = 'default';
  pass = '123';
  barcode = '7789040795';
  currentItem = false;
  amount = 1;
  calulateDone = false;
  isAllergy = false;
  list = [
    {
    'image': 'IMAGE',
    'name': 'NAME',
    'ingre': 'CONSUMER',
    'amount': 'AMOUNT',
    'friend': 'SPLIT W/ FRIEND'
  }
];
  itemLike = false;
  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};

  validate() {
    console.log(this.name, this.pass);
    this.rest.getPeople(this.name).subscribe((data) =>{
      console.log('get People Data', data);
      if (this.pass === data.password){
        this.people = data;
      }
    })
  }

  search() {
    console.log(this.barcode);
    this.rest.getProducts(this.barcode).subscribe((data) => {
      console.log(data);
      if (this.people['health']['allergy'].length > 0 && data.ingredients[0].toLowerCase().includes(this.people['health']['allergy'].toLowerCase())){
        console.log('FOUNDDDDDDDD allergy!!!!!!!!!');
        this.isAllergy = true; 
      }
      this.currentItem = data;
      // console.log(this.currentItem['tradeIdentifiers'].images[0])
    });
  }

  reset(){
    this.currentItem = false;
  }

  add(){
    this.list.push({
      image: this.currentItem['tradeIdentifiers'][0].images[0],
      name: this.currentItem['name'],
      ingre: this.currentItem['descriptions']['consumer'],
      amount: this.amount.toString(),
      friend: "false"
    });
    this.reset();
    console.log(this.amount, this.list);
  }

  calulateSplit(){
    this.calulateDone = true;

  }

  returnSplit() {
    this.calulateDone = false;
  }

  ngOnInit() {

  }



  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
