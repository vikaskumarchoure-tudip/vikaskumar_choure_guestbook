import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'app/Login-Form/logindata';

@Component({
    selector: 'login-form',
    templateUrl: 'app/Login-Form/login.component.html'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    login_model = new LoginData('', '');

    submitted = false;
    logindata = '';
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        this.submitted = true;
        this.logindata = JSON.stringify(this.login_model);
    }

}