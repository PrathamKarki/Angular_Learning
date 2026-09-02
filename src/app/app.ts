import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('HRM');

  header: string = "App Component";

  a: number = 5.1;
  b: number = 7;

  secondTitle: string = "The user is active";
  secondTitl2 = signal("The user is active");

  isChecked: boolean = true;
  isChecked2 = signal<boolean>(true);

  dothis: string = this.isChecked ? "True" : "false"; // ischecked

  changeCheckbox(value: boolean): string {
    this.isChecked2.set(false);

    this.isChecked = !this.isChecked;
    this.isChecked = value;
    this.dothis = this.isChecked ? "True" : "false"
    return "";
  }
}
