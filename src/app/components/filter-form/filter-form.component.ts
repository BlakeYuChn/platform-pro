import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { isMoment } from 'moment';

const PRO_FORMATS = {
  parse: { dateInput: 'YYYY/MM/DD' },
  display: { dateInput: 'YYYY/MM/DD', monthYearLabel: 'YYYY年MM月' },
};

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-cn' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: PRO_FORMATS },
  ],
})
export class FilterFormComponent implements OnInit {
  @Input() formConfig: {
    value: string;
    type: string;
    options: { label: string }[];
  }[];
  @Output() getFormData: EventEmitter<{}> = new EventEmitter<{}>();
  fg = new FormGroup({});
  fOptions: {} = {};

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.formConfig.length; i++) {
      let _control = new FormControl();
      this.fg.addControl(this.formConfig[i].value, _control);
      if (this.formConfig[i].type === 'autocomplete') {
        this.fOptions[this.formConfig[i].value] = _control.valueChanges.pipe(
          startWith(''),
          map((label) =>
            label
              ? this._filter(label, this.formConfig[i].options)
              : this.formConfig[i].options.slice()
          )
        );
      }
    }
  }

  inquiryForm() {
    let _formData = {};
    for (const key in this.fg.value) {
      _formData[key] = isMoment(this.fg.value[key])
        ? this.fg.value[key].format('YYYY-MM-DD')
        : this.fg.value[key];
    }
    this.getFormData.emit(_formData);
  }

  resetForm() {
    this.fg.reset();
  }

  /**
   * 筛选的公用方法
   * @param value 输入值
   * @param options 选项
   */
  private _filter(value: string, options: { label: string }[]): {}[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(filterValue)
    );
  }
}
