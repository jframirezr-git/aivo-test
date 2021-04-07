import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validCode2FA:boolean = false; // variable que muesta mensaje si es invalido el codigo 2FA ingresado
  validsessionForm:boolean = true; // valida si el usuario y pass es corecto para mostrar el campo del codigo 2AF
  
  sessionForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remind  : [false ]
  })
  
  codeForm: FormGroup = this.fb.group({
    codigo  : ['', Validators.required]
  })

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  login(  ){
    if (this.sessionForm.invalid){
      return;
    }
    //validar si es correcto el inicio de session
    if(true){
      
      this.validsessionForm = false;

    }else{

    }
  }
  // validar el codigo 2FA
  validA2F(){
    const code = this.codeForm.value.codigo;
    if(code === '123'){
      // this.authService.login()
      // .subscribe( resp => {
      //   console.log(resp);
      //   this.router.navigate(['./home/dashboard']);
      // })
      this.router.navigate(['./home/dashboard']);
      return this.validCode2FA = false;
    }else{
      return this.validCode2FA = true;
    }
  }
}