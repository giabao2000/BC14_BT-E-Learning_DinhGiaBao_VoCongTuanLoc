import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs"
import { tap, catchError } from "rxjs/operators"
import { environment } from 'src/environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    urlApi = environment.urlApi;
  }

  // Observable: tương tự như promise(), nhưng có thể hủy gọi api dc
  // getListCourse(): Observable<any> {
  //   const url = 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';

  //   const observable = this.http.get(url).pipe(
  //     // Success
  //     tap(() => {}),
  //     // Failed
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );
    
  //   return observable;
  // }

  // getDetailCourse(id: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;

  //   const observable = this.http.get(url).pipe(
  //     // Success
  //     tap(() => {}),
  //     // Failed
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );

  //   return observable;
  // }

  // registerUser(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;

  //   const observable = this.http.post(url, user).pipe(
  //     // Success
  //     tap(() => {}),
  //     // Failed
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );

  //   return observable;

  // }

  // loginAdmin(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;

  //   const observable = this.http.post(url, user).pipe(
  //     // Success
  //     tap(() => {}),
  //     // Failed
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );

  //   return observable;

  // }

  // addUser(user: any): Observable<any> {
  //   const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`;

  //   const observable = this.http.post(url, user).pipe(
  //     // Success
  //     tap(() => {}),
  //     // Failed
  //     catchError((error: any) => {
  //       return this.handleError(error);
  //     })
  //   );

  //   return observable;

  // }

  get (uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

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

  post (uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;

    const observable = this.http.post(url, data).pipe(
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
