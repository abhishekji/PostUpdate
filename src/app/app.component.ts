import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {


  title = 'Ngrx-Data';
  objAction = of({
    name: "hello",
    id: '1'
  });

  constructor(private cdr: ChangeDetectorRef){

  }
  checkChange() {
    this.title ="hello";
    this.objAction  = of({
      name: "hello",
      id: '2'
    });
    console.log(this.objAction);
  //  this.cdr.detectChanges();
  }
//   list:Array<Object> = [
//   {'value': 'cat', 'showText': false}, 
//   {'value': 'dog', 'showText': false}, 
//   {'value' :'horse', 'showText': false}
// ];
//   addValue(elem) {
//     if(!this.list.includes(elem.value)) {
//       this.list.push({'value':elem.value, 'showText': false});
//     } else {
//       alert('Item already added');
//     }
     
//   }
//   switchOptions(listElem){
//     listElem.showText = !listElem.showText;
//     if(listElem.showText) {

//     }
//   }
//   submitValue(index) {
//     const elem = ((<HTMLInputElement>document.getElementById('listElemText')) || {}).value;
//     if (elem) {
//     this.list[index] = {'value': elem, 'showText': false};
//     } else {
//       alert('no change done');
//     }
//   }
//   deleteValue(index) {
//     this.list.splice(index, 1);
//   }
}
