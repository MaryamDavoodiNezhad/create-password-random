import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includLetterts: boolean = false;
  includSymbols: boolean = false;
  includNumbers: boolean = false;
  length : number=0 ;

  onChangeLetter() {
    this.includLetterts = !this.includLetterts;
  }

  onChangeSymbols() {
    this.includSymbols = !this.includSymbols;
  }

  onChangeNumbers() {
    this.includNumbers = !this.includNumbers;
  }

  onChangeLength(number : Event){
    const v = parseInt((<HTMLInputElement>number.target).value)
    if(!isNaN(v)){
      this.length = v

    }
  }

  onClickButton() {
    this.password = 'Your password';
    // console.log ('numbers:' + this.includNumbers);
    // console.log ('letters:' + this.includLetterts);
    // console.log ('symbols:' + this.includSymbols);
    // قسمت صحیح یک عدد رندوم را می دهد
    // alert (Math.floor(Math.random() * 10));

    const symbols = '!@#$%^&*()_+?';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let validChar = '';

    if(this.includLetterts){
      validChar+=letters
    }

    if(this.includNumbers){
      validChar += numbers ;
    }

    if(this.includSymbols){
      validChar += symbols ;
    }

    let generatePassword = '';
    for(let index=0 ; index < this.length; index++){
      let character = Math.floor(Math.random() * validChar.length)
      generatePassword += validChar[character]
    }
    this.password = generatePassword;
  }

  getPasswords() {
    return this.password;
  }
}
