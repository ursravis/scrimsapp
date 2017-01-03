import { Directive, ElementRef, HostListener, Input , OnInit } from '@angular/core';

@Directive({
  selector: '[myBarChart]'
})
export class BarChartDirective {
  private el: HTMLSpanElement;
  
  @Input('myBarChart') barChartValues: number[] = [];
  
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  
  ngOnInit() {
  // this.el.sparkline(this.barChartValues, {
  //   type: 'bar', barColor: 'green', width: 300, height: '50',
  //   barWidth: 8, barSpacing: 3, colorMap: ["green", "yellow", "red"], 
  //   chartRangeMin: 0
  // });
 }
}
