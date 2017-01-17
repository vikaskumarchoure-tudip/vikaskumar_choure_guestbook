import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { RegisterData } from 'app/Register-Form/registerdata';

@Component({
selector:'register-form',
templateUrl:'app/Register-Form/register.component.html'
})

export class RegisterComponent implements OnInit{
    submitted = false;
    registerForm : FormGroup;
    title = "Register";

    register_model = new RegisterData('','','');

    constructor(private formBuilder:FormBuilder){}

    ngOnInit(){
        this.registerForm = this.formBuilder.group({
    
            reg_username: ['',Validators.required],
            reg_password: ['',Validators.required],
            reg_conf_password: ['',Validators.required]
    
    });
    }

    onRegister(){
        this.submitted = true;
    }
}