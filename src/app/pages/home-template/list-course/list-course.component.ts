import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/_core/services/data.service';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse: any;
  subListCourse = new Subscription();

  constructor(private data: DataService) { }

  // tương đương componentDidMount() 
  // đầu tiên vào list-course thì hàm này sẽ chạy đầu tiên và chỉ chạy 1 lần
  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    // muốn lấy data trong getListCourse() thì phải sử dụng subscribe()
    // subscribe(): đăng kí theo dõi
    this.subListCourse =  this.data.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01').subscribe((result: any) => {
      console.log(result);
      this.listCourse = result;
    });
  }

  ngOnDestroy() {
    // hủy bỏ theo dõi
    this.subListCourse.unsubscribe();
  }

}
