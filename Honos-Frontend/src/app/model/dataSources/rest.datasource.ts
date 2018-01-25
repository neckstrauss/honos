import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RequestMethod} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";


@Injectable()
export class RestDataSource {
  private url: string;

  constructor(private http: HttpClient/*,
    @Inject(REST_URL) private url: string*/) {}
  
  setUrl(url: string): RestDataSource
  {
    this.url = url;
    return this;
  }
  
  getData(): Observable<any> {
    return this.sendRequest("GET", this.url);
  }
  
  getDataById(id:number): Observable<any> {
    return this.sendRequest("GET", this.url+'/'+id);
  }
  
  getDataWithParameter(data: any): Observable<any> {
    return this.sendRequest("POST", this.url, data);
  }

  saveData(data: any): Observable<any> {
    return this.sendRequest("POST", this.url, data);
  }

  updateData(data: any): Observable<any> {
    return this.sendRequest("PUT", `${this.url}/${data.id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.sendRequest("DELETE", `${this.url}/${id}`);
  }

  private sendRequest(verb: string,
    url: string, body?: any): Observable<any> {
    const request = new HttpRequest(
      verb, url, body,
      {reportProgress: true}
    );
    return this.http.request(request).catch((error: Response) => Observable.throw(
      `Network Error: ${error.statusText} (${error.status})`));
  }
}












