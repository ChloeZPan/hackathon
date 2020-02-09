import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy {

  macronutrients = {
    data: [
      {
      type: 'scatterpolar',
      r: [39, 28, 8, 7, 28, 39],
      theta: ['A','B','C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Shopping list'
      },
      {
      type: 'scatterpolar',
      r: [1.5, 10, 39, 31, 15, 1.5],
      theta: ['A','B','C', 'D', 'E', 'A'],
      fill: 'toself',
      name: 'Reciept'
      }
    ],
  
    
    layout: {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 50]
        }
      }
    }
  }

    minerals = {
      data: [
        {
        type: 'scatterpolar',
        r: [39, 28, 8, 7, 28, 39],
        theta: ['A','B','C', 'D', 'E', 'A'],
        fill: 'toself',
        name: 'Shopping list'
        },
        {
        type: 'scatterpolar',
        r: [1.5, 10, 39, 31, 15, 1.5],
        theta: ['A','B','C', 'D', 'E', 'A'],
        fill: 'toself',
        name: 'Reciept'
        }
      ],
    
      
      layout: {
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 50]
          }
        }
      }
    }

      vitamins = {
        data: [
          {
          type: 'scatterpolar',
          r: [39, 28, 8, 7, 28, 39],
          theta: ['A','B','C', 'D', 'E', 'A'],
          fill: 'toself',
          name: 'Shopping list'
          },
          {
          type: 'scatterpolar',
          r: [1.5, 10, 39, 31, 15, 1.5],
          theta: ['A','B','C', 'D', 'E', 'A'],
          fill: 'toself',
          name: 'Reciept'
          }
        ],
      
        
        layout: {
          polar: {
            radialaxis: {
              visible: true,
              range: [0, 50]
            }
          }
        }
      }

  ngOnInit() {

  }



  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
