import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  piAmount: number = 0;
  amountInDollars: number | null = null;
  showForm: boolean = false;
  
  onFormSubmit(): void {
    this.amountInDollars = this.piAmount * 22.5;}
  submitForm() {
      this.showForm = false;
    }

}
