import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-filter-form',
  templateUrl: './example-filter-form.component.html',
  styleUrls: ['./example-filter-form.component.scss'],
})
export class ExampleFilterFormComponent implements OnInit {
  formConfig: {}[] = [
    { type: 'input', title: 'example-input', value: 'exampleInput' },
    {
      type: 'select',
      title: 'example-select',
      value: 'exampleSelect',
      options: [
        { label: 'apple', value: 'apple_apple' },
        { label: 'bear', value: 'bear_bear' },
        { label: 'car', value: 'car_car' },
      ],
    },
    {
      type: 'select',
      title: 'example-select-multi',
      value: 'exampleSelectMulti',
      multi: true,
      options: [
        { label: 'apple', value: 'apple_apple' },
        { label: 'bear', value: 'bear_bear' },
        { label: 'car', value: 'car_car' },
      ],
    },
    {
      type: 'autocomplete',
      title: 'example-autocomplete',
      value: 'exampleAutocomplete',
      options: [
        { label: 'apple', value: 'apple_apple' },
        { label: 'bear', value: 'bear_bear' },
        { label: 'car', value: 'car_car' },
      ],
    },
    {
      type: 'date',
      title: 'example-date',
      value: 'exampleDateYear',
      style: 'year',
    },
    {
      type: 'date',
      title: 'example-date',
      value: 'exampleDateMonth',
      style: 'month',
    },
    { type: 'date', title: 'example-date', value: 'exampleDate' },
  ];

  constructor() {}

  ngOnInit(): void {}

  getFormData(formData: {}) {
    console.log(formData);
  }
}
