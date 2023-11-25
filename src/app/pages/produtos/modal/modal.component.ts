import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form = this.fb.group({
    nome: ['', Validators.required],
    tipo_produto: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  sendForm(){
    console.log('-------------------',this.form.value);
  }

}
