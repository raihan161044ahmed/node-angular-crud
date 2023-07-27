import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.scss']
})
export class StudentcrudComponent {

  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  stname: string ="";
  course: string ="";
  fee: string ="";
  currentStudentID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }

  ngOnInit(): void {
  }

  getAllStudent()
  { 
    this.http.get("http://localhost:3000/api/student/")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.StudentArray = resultData.data;
    });
  }


  register() {
    let bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };
  
    this.http.post("http://localhost:3000/api/student/add", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        if (resultData.status) {
          alert("Student Registered Successfully");
          const newStudent = { id: resultData.data.id, ...bodyData };
          this.StudentArray.push(newStudent);
          //this.resetForm(); // Assuming you have a method to reset the form fields
        } else {
          alert("Failed to register student");
        }
      },
      (error) => {
        console.error(error);
        alert("Error while registering student");
      }
    );
  }

  setUpdate(data: any) 
  {
   this.stname = data.stname;
   this.course = data.course;
   this.fee = data.fee;
  

   this.currentStudentID = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "stname" : this.stname,
      "course" : this.course,
      "fee" : this.fee
    };
    
    this.http.put("http://localhost:3000/api/student/update"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updated")
        this.getAllStudent();
      
    });
  }
 
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data: any)
  {
    this.http.delete("http://localhost:3000/api/student/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllStudent();
    });
  }
}