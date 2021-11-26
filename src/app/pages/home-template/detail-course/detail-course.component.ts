import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse(this.id);
  }

  getParamsFromUrl() {
    // lấy 1 param từ url
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);

    // lấy nhiều param từ url
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params);
    // });
  }

  getDetailCourse(id: any) {
    // muốn lấy data trong getDetailCourse() thì phải sử dụng subscribe()
    this.dataService.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`).subscribe((result: any) => {
      // console.log("get detail course:", result);
      this.course = result;
    })
  }

  handleClickRegister() {
    if (localStorage.getItem('User') || localStorage.getItem('UserAdmin')) {
      // Nếu đã login thì chuyến đến trang /detail-user
      this.router.navigate(['/detail-user']);
      return;
    }
    
    // Nếu chưa login thì chuyến đến trang /login
    this.router.navigate(['/login']);
    return;
  
  }

}
