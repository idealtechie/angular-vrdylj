import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

myData=[
  {
    name : "adarsh",
    age : 20,
    email : "abc@gmail.com"
  }
];

  userForm;
constructor(){

  this.userForm = new FormGroup({
    'name' : new FormControl(),
    'age' : new FormControl(),
    'email' : new FormControl()
  })
}
formSubmit(){
  console.log(this.userForm.value);
  this.myData.push(this.userForm.value);
}
}

