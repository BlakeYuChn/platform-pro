import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  router: string;
}

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss'],
})
export class HowToUseComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'filter-form',
      updated: new Date('1/1/16'),
      router: 'example-filter-form',
    },
    { name: 'Recipes', updated: new Date('1/17/16'), router: '' },
    { name: 'Work', updated: new Date('1/28/16'), router: '' },
  ];

  notes: Section[] = [
    { name: 'Vacation Itinerary', updated: new Date('2/20/16'), router: '' },
    { name: 'Kitchen Remodel', updated: new Date('1/18/16'), router: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
