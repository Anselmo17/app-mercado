import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Product } from 'src/app/model/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public listProdutos: Array<Product> = [];
  public loading: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }


  getProdutos() {
    this.loading = true;
    this.http.get<any>(`${environment.local}produtos`)
      .pipe(finalize(() => this.loading = false))
      .subscribe((data) => {
        this.listProdutos = data;
      })
  }

}
