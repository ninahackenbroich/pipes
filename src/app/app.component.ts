import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = '';
  date: string = '';
  value: number = 0;
  miles: number = 0;

  onNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newName = inputElement.value;
    this.name = newName;
  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newDate = inputElement.value;
    this.date = newDate;
  }

  onValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    this.value = parseFloat(newValue);
  }

  onMilesChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newMiles = inputElement.value;
    this.miles = parseFloat(newMiles);
  }

}
