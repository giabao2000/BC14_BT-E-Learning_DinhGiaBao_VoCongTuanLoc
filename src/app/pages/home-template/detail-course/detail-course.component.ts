import { DataService } from 'src/app/_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse(this.id);
  }

  getParamsFromUrl() {
    // lấy 1 param từ url
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    // lấy nhiều param từ url
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params);
    // });
  }

  getDetailCourse(id: any) {
    // muốn lấy data trong getDetailCourse() thì phải sử dụng subscribe()
    this.dataService.getDetailCourse(id).subscribe((result: any) => {
      console.log("get detail course:", result);
      this.course = result;
    })
  }

}
