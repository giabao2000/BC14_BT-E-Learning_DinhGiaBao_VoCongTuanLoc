import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-registered-course',
  templateUrl: './registered-course.component.html',
  styleUrls: ['./registered-course.component.scss']
})
export class RegisteredCourseComponent implements OnInit {
  mangKhoaHocDaXetDuyet: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('UserAdmin') || '{}');
    let value = {"taiKhoan": user.taiKhoan};
  
    if (user) {
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', value).subscribe((result) => {
        this.mangKhoaHocDaXetDuyet = result;
        console.log("Result:", this.mangKhoaHocDaXetDuyet);
      })
    }
  }
}
