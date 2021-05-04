import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WaitersService } from 'src/app/services/waiters.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    public ws: WaitersService,
    private r: Router
    ) { }

  myForm!: FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit() {
    console.log(this.myForm.value)
    this.ws.register(this.myForm.value).subscribe(
      res => {
        console.log(res)
        this.r.navigateByUrl('/login')

      },
      err => {
        console.log(err)
      }
    )
  }

}
