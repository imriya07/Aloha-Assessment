import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any[]=[];
  obj={
    title:'',
    body:''
  };

  filter:any ={
    title:'',
    body:''
  };

  toggle:boolean =false; 
  idx:number=0;
  constructor(private apicall:ApiCallService) { }

  ngOnInit(): void {
     this.fetchData()
  }

  submit(){
    this.apicall.postData(this.obj.title,this.obj.body).subscribe((data:any)=>{
      this.posts.push(data)
      this.obj={
        title:'',
        body:''
      }
    })
  }

  fetchData(){
    this.apicall.getData().subscribe((data:any)=>{
      this.posts = data
    })
  }

  edit(id:any){
    this.apicall.getDataById(id).subscribe((data:any)=>{
      this.toggle = true;
      this.obj.title = data.title;
      this.obj.body = data.body;
      this.idx = data.id;
    })
  }

  update(){
    this.apicall.updateDataById(this.idx,this.obj).subscribe((data:any)=>{
      this.toggle = false;
      window.alert("Update successfully")
      this.posts[this.idx - 1] = data;
      this.obj={
        title:'',
        body:''
      }
    })
  }

  delete(id:any){
    this.apicall.deleteDataById(id).subscribe((data:any)=>{
      this.posts.splice(id-1,1)
    })
  }

}
