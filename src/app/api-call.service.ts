import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
   
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  postData(title:string,body:string){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{title,body})
  }

  getDataById(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

  updateDataById(id:any,obj:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id,obj)

  }
  deleteDataById(id:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)

  }
}
