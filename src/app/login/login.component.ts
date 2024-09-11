import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userLogin = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    console.log(this.userLogin.value);
  }
}
