import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public listProdutos:any = [];
  public loading:boolean=false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProdutos()
  }


  getProdutos() {
    this.loading = true;
    this.http.get<any>(`${environment.local}produtos`)
    .pipe(finalize(() => this.loading = false))
    .subscribe((data) => {
      console.log(data);
      this.listProdutos = data;
    })
  }

}
