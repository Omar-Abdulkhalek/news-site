import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home-main-show',
  templateUrl: './home-main-show.component.html',
  styleUrls: ['./home-main-show.component.scss']
})
export class HomeMainShowComponent implements OnInit {

  allPostsFromApi:any[]=[];
  theFirstFiveElmsInArr:any[]=[];

  constructor(private commonService: CommonService) {
    
   }

  getPostsOfMainPage(){
    this.commonService.getPostsOfMainPage().subscribe(data=>{
      // console.log("mainpagepost",data)
      this.allPostsFromApi = data;
      // console.log(this.allPostsFromApi);
      // console.log("image url",this.allPostsFromApi[0].yoast_head_json.og_image[0].url);
      this.theFirstFiveElmsInArr = this.allPostsFromApi.slice(0,5)
      // console.log(this.theFirstFiveElmsInArr);
      

      
    })
  }

  ngOnInit(): void {
    this.getPostsOfMainPage()
  }

}
