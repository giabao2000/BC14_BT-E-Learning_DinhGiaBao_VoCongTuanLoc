import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-registered-course',
  templateUrl: './registered-course.component.html',
  styleUrls: ['./registered-course.component.scss']
})
export class RegisteredCourseComponent implements OnInit {
  mangKhoaHocDaXetDuyet: any = [];
  mangKhoaHocTimKiem: any = [];
  inputSearch: any = null;
  user = JSON.parse(localStorage.getItem('UserAdmin') || '{}');
  value = {"taiKhoan": this.user?.taiKhoan};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.user) {
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.value).subscribe((result) => {
        this.mangKhoaHocDaXetDuyet = result;
      })
    }
  }

  ngDoCheck() {
    if (this.inputSearch) {
      this.mangKhoaHocTimKiem = this.mangKhoaHocDaXetDuyet.filter((item: any) => {
        return item.tenKhoaHoc.toLowerCase().includes(this.inputSearch?.toLowerCase());
      })
  
      if (this.mangKhoaHocTimKiem) {
        this.mangKhoaHocDaXetDuyet = [...this.mangKhoaHocTimKiem];
      }
    }
    else {
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', this.value).subscribe((result) => {
        this.mangKhoaHocDaXetDuyet = result;
      })
    }
  }
}
