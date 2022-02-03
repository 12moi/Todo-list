import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  list:any[]=[];
  AddTask(item:string){
       this.list.push({id:this.list.length, name:item})
       console.warn(this.list)
  }

  removeTask(id:number){
     this.list=this.list.filter(item=>item.id!==id);
  }
  
   
}
