import { Component,  OnInit,  ViewEncapsulation } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToggleButtonComponent implements OnInit  {

  buttoncase:any;
  categoryList: any[] = [];
  
  constructor(private commonService: CommonService) { }
  
  
  changed(event:any){

    // console.log("button case :", this.buttoncase);
    this.buttoncase = event.target.checked
    if(this.buttoncase== true){
      document.body.classList.add("darkTheme")
      localStorage.setItem('DarkTheme','darkTheme')
    }
    else {
      document.body.classList.remove("darkTheme")
      localStorage.removeItem('DarkTheme');
      
    }  
  }

  ngOnInit():void{
    // this.getCategories();
    // this.getArticle();

    
    if(localStorage.getItem('DarkTheme') == 'darkTheme' ){
      this.buttoncase = true;
      console.log("button case :", this.buttoncase);

      document.body.classList.add("darkTheme")
     
    }else{
      this.buttoncase = false;
    }
  }
  

  // getCategories(){
  //   this.commonService.getCategory(8).subscribe((date) => {

  //     this.categoryList = date;

  //     console.log("category from apiiiiii", date);
  //   })
  // }

  // getArticle(){
  //   this.commonService.getArticle(82397).subscribe((date) => {
  //     console.log("article from apiiiiii", date);
  //   })
  // }
  
}
