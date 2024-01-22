import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
  loginForm: FormGroup;

  @Input() submitColor: string = 'unset';
  @Output() formSubmitted: EventEmitter<{ email: string; password: string }> =
    new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  loginUser(): void {
    this.formSubmitted.emit(this.loginForm.value);
  }
}
