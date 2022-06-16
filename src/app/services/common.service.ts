import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = 'https://ekhbareeat.com/index.php?rest_route=';
  mainPagePostsUrl='/wp/v2/posts/'
  // categoryUrl = '%2Fwp%2Fv2%2Fposts&categories=';
  // articleUrl = '/wp/v2/posts/'


  constructor(private http: HttpClient) { }

  // getCategory(categoryId: any){
  //   return this.http.get<any>(this.hostUrl + this.categoryUrl + categoryId)
  // }

  // getArticle(articleId: any){
  //   return this.http.get<any>(this.hostUrl + this.articleUrl + articleId)
  // }
  getPostsOfMainPage(){
    return this.http.get<any>(this.baseUrl + this.mainPagePostsUrl )
  }

  getPostDetails(id:number){
    return this.http.get<any>(this.baseUrl + this.mainPagePostsUrl +id)
  }
}
