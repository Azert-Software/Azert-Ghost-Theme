/// <reference path="typings/jquery/jquery.d.ts" />

class Pagination{
  private totalPages:number;
  private currPage:number;
  private nextPage:number;
  private prevPage:number;
  private pageUrl:string;

  constructor(pages:number,
    curr:number,
    next:number,
    prev:number,
    url:string){
    this.totalPages = pages;
    this.currPage = curr;
    this.nextPage = next;
    this.prevPage = prev;
    this.pageUrl = url;
  }

  buildPagination(pageObj:JQuery){
    console.log(this.pageUrl);
    if(this.prevPage > 0)
        $(pageObj).append("<li class='waves-effect'><a href='" + this.pageUrl + this.prevPage +"'<i class='material-icons'>chevron_left</i></a></li>");
      else {
        $(pageObj).append("<li class='disabled'><a><i class='material-icons'>chevron_left</i></a></li>");
      }

    for(var i = 1; i <= this.totalPages;i++){
      if(i == this.currPage){
        $(pageObj).append(
            "<li class='active' role='presentation'><a href=''>" + i + "</a></li>");
      }
      else {
        $(pageObj).append(
            "<li class='waves-effect' role='presentation'><a href='"+ this.pageUrl + "page/" + i + "'>" + i + "</a></li>");
      }
    }

    if(this.nextPage > 0)
        $(pageObj).append("<li class='waves-effect'><a href='" + this.pageUrl + this.nextPage +"'><i class='material-icons'>chevron_right</i></a></li>");
      else {
        $(pageObj).append("<li class='disabled'><a><i class='material-icons'>chevron_right</i></a></li>");
      }
  }
}
