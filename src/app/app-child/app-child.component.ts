import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppChildComponent {
    @Input() value: any;
    @Input() title: any;

    constructor(private cdr: ChangeDetectorRef){
    }
    
    // ngDoCheck() {
    //     this.cdr.detectChanges();
    // }
    // ngOnChanges(changes: SimpleChanges){
    //     console.log(changes);

    // }

}