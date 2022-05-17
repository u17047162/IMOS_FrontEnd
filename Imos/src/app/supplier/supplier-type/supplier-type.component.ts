import { suppliertype } from './../../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

export interface SupplierType {
  suppliertypeId: number,
  Material: string,
  suppliers: []
}

@Component({
  selector: 'app-supplier-type',
  templateUrl: './supplier-type.component.html',
  styleUrls: ['./supplier-type.component.css']
})
export class SupplierTypeComponent implements OnInit {

  // API Test
  data: suppliertype[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];

  dataSource!: MatTableDataSource<SupplierType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  posts: any;

  constructor(private route: Router, private service: ServiceService) {

    this.service.getSupplierType().subscribe(x => {
      this.data = x;
      console.log(this.data);
      this.posts = x;

      this.dataSource = new MatTableDataSource(this.posts)

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  UpdateSupplierType() {
    this.route.navigateByUrl('/UpdateSupplierType')
  }

  addSupplierType() {
    this.route.navigateByUrl('/AddSupplierType')
  }

  ngOnInit(): void {
  }

}
