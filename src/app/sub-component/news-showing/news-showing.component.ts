import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
ActivatedRoute 
@Component({
  selector: 'app-news-showing',
  templateUrl: './news-showing.component.html',
  styleUrls: ['./news-showing.component.scss']
})
export class NewsShowingComponent implements OnInit {

  currentUrlId:any=0;
  postDetails:any={};
  constructor(private route: ActivatedRoute ,private commonService: CommonService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.currentUrlId = params.get('id');
      // console.log(this.currentUrlId);
    });

    this.getPostDetails(this.currentUrlId);

  }

  getPostDetails(currentUrlId:any){
    // console.log(currentUrlId);
    this.commonService.getPostDetails(currentUrlId).subscribe(data=>{
      // console.log(data);
      this.postDetails = data;
      console.log(this.postDetails);
      

    })
  }

  
}
