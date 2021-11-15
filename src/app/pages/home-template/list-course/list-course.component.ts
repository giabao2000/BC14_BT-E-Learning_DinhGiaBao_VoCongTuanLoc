import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse: any;

  constructor(private data: DataService) { }

  // tương đương componentDidMount() 
  // đầu tiên vào list-course thì hàm này sẽ chạy đầu tiên và chỉ chạy 1 lần
  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    // muốn lấy data trong getListCourse() thì phải sử dụng subscribe()
    this.data.getListCourse().subscribe((result: any) => {
      console.log(result);
      this.listCourse = result;
    });
  }

}
