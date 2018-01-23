import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RestDataSource} from "../dataSources/rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export abstract class Model<T> {

  private dataSet: T[] = new Array<any>();
  private locator = (p: any, id: number) => p.id == id;
  
  constructor(private dataSource: RestDataSource, private url: string) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any[]> {
    if (this.getDataSet().length == 0) {
     // this.messages.reportMessage(new Message("Loading data..."));
     //implementar sistema de mensajes
      console.log("entro resolve model")
      return this.dataSource.setUrl(this.url).getData();
    }
    
  }
  
  abstract newObject():T;
  
  loadDataSet(): void {
    this.dataSource.setUrl(this.url).getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        console.log("response received... getData()", event.body);
        this.dataSet = event.body.items;
      }
    });
  }

  getDataSet(): T[] {
    return this.dataSet;
  }

  get(id: number): T {
    return this.dataSet.find(p => this.locator(p, id));
  }

  save(data: any) {
    if (data.id == 0 || data.id == null) {
      this.dataSource.setUrl(this.url).saveData(data).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          console.log("response received... save()", event.body);
          this.dataSet.push(event.body);
        }
      });
    } else {
      this.dataSource.setUrl(this.url).updateData(data).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          console.log("response received... update()", event.body);
          let index = this.dataSet.findIndex(item => this.locator(item, event.body.id));
          this.dataSet.splice(index, 1, event.body);
        }
      });
    }
  }

  delete(id: number) {
    this.dataSource.setUrl(this.url).deleteData(id).subscribe(() => {
      let index = this.dataSet.findIndex(p => this.locator(p, id));
      if (index > -1) {
        this.dataSet.splice(index, 1);
      }
    });
  }

  getNextId(id: number): number {
    let index = this.dataSet.findIndex(p => this.locator(p, id));
    if (index > -1) {      
      let aux: any = this.dataSet[this.dataSet.length > index + 2 ? index + 1 : 0];
      return aux.id;
    } else {
      return id || 0;
    }
  }
  
  getPreviousId(id: number): number {
    let index = this.dataSet.findIndex(p => this.locator(p, id));
    if (index > -1) {
      let aux: any = this.dataSet[index > 0 ? index - 1 : this.dataSet.length - 1];
      return aux.id;
    } else {
      return id || 0;
    }
  }
  


}