import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs"
import { tap, catchError } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Observable: tương tự như promise(), nhưng có thể hủy gọi api dc
  getListCourse(): Observable<any> {
    const url = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';

    const observable = this.http.get(url).pipe(
      // Success
      tap(() => {}),
      // Failed
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
    
    return observable;
  }

  getDetailCourse(id: any): Observable<any> {
    const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;

    const observable = this.http.get(url).pipe(
      // Success
      tap(() => {}),
      // Failed
      catchError((error: any) => {
        return this.handleError(error);
      })
    );

    return observable;
  }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;
      
      case 400:
        break;
      
      case 500:
        break;
      
      default:
        break;
    }

    return throwError(error);
  }
}
