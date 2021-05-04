import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { WaitersService } from 'src/app/services/waiters.service';
import { Buffer } from 'buffer'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public ws: WaitersService,
    private r: Router
    ) { }

  myForm!: FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  handleSubmit() {
    console.log(this.myForm.value)
    this.ws.login(this.myForm.value).subscribe(
      (res: { err?:any, token?:any }) => {
        console.log(res)
        if (!res.err) {
          localStorage.toekn = res.token
          console.log(Buffer.from(res.token.split(".")[1]).toString())
          this.ws.loggedWaiter = jwtDecode(res.token)
          this.r.navigateByUrl('/main')
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
