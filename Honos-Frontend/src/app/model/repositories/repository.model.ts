import { MessageService } from '../../shared/messages/message.service';
import { Message } from '../../shared/messages/message.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RestDataSource} from "../dataSources/rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export abstract class Model<T> {

  private dataSet: T[] = new Array<any>();
  private object:T;
  private locator = (p: any, id: number) => p.id == id;
  
  constructor(private dataSource: RestDataSource, private messages: MessageService,private url: string) {
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any[]> {
    if (this.getDataSet().length == 0) {
      this.messages.reportMessage(new Message("Loading data..."));     
      return this.dataSource.setUrl(this.url).getData();
    }    
  }
  
  abstract newObject():T;
  
  getUrl():string{
    return this.url;
  }
  
  setData(dataSet: T[])
  {
    this.dataSet = dataSet;
  }
  
  loadDataSet(): void {
    this.dataSource.setUrl(this.url).getData().subscribe(event => {
      if (event.type === HttpEventType.Response) {
        //console.log("response received... getData()", event.body);             
        this.dataSet = event.body.items;
      }
    });
  }
  
  getObjectById():T
  {
    return this.object;
  }
  
  getById(id:number):Observable<T> {
    let res:T;
    
    return this.dataSource.setUrl(this.url).getDataById(id);
    
//    this.dataSource.setUrl(this.url).getDataById(id).subscribe(event => {
//      if (event.type === HttpEventType.Response) {
//        console.log("response received... getBYID()", event.body);             
//        return event.body;
//      }
//    });
   // return res;
  }

  getDataSet(): T[] {
    return this.dataSet;
  }

  get(id: number): T {
    return this.dataSet.find(p => this.locator(p, id));
  }
  
  getFromServer(id: number): T {
    return this.dataSet.find(p => this.locator(p, id));
  }

  save(data: any) {
    if (data.id == 0 || data.id == null) {
      this.dataSource.setUrl(this.url).saveData(data).subscribe(event => {
        if (event.type === HttpEventType.Response) {
//          console.log("response received... save()", event.body);
          this.messages.reportMessage(new Message("Transacción Exitosa...", "alert-success"));
          this.dataSet.push(event.body);
        }
      });
    } else {
      this.dataSource.setUrl(this.url).updateData(data).subscribe(event => {
        if (event.type === HttpEventType.Response) {
//          console.log("response received... update()", event.body);
          this.messages.reportMessage(new Message("Transacción Exitosa...", "alert-success"));
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
      this.messages.reportMessage(new Message("Transacción Exitosa...", "alert-success"));
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