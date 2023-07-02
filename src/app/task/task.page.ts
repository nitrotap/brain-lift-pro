import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskDataService } from '../services/task-data.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskType: new FormControl(''),
    taskTime: new FormControl(''),
    userID: new FormControl(''),
    sessionID: new FormControl(''),
  });

  constructor(private taskDataService: TaskDataService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  selectTaskTime(time: any) {
    this.taskForm.controls['taskTime'].setValue(time);
  }

  selectTaskType(type: any) {
    this.taskForm.controls['taskType'].setValue(type);
  }

  async saveLocalTask() {

    try {


      const response = await Preferences.get({ key: 'task_table' });
      const table: any = response.value;
      let tableData = JSON.parse(table);

      if (!tableData) {
        tableData = [];
      }

      const formData = {
        "taskName": this.taskForm.value.taskName,
        "taskType": this.taskForm.value.taskType,
        "taskTime": this.taskForm.value.taskTime,
        "taskID": this.taskForm.value.taskName
        // "userID": this.taskForm.value.userID,
        // "sessionID": this.taskForm.value.sessionID
      }
      let obj = tableData;
      obj.push(formData)
      let savedValue = JSON.stringify(obj)

      const data = await Preferences.set({
        key: 'task_table',
        value: savedValue
      })

      const alert = this.toastController.create({
        message: 'Your new task has been saved!',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });
      (await alert).present();

      this.router.navigateByUrl('/quiz');
    } catch {
      const alert = this.toastController.create({
        message: 'Error saving your task! Please try to login and retry saving your new task',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      (await alert).present();


    }



  }
  async saveTask() {

    // console.log(this.taskForm.value)

    // this.taskForm.value["sessionID"] = sessionStorage.getItem("sessionID")
    // this.taskForm.value["userID"] = sessionStorage.getItem("userID")

    const formData = {
      "taskName": this.taskForm.value.taskName,
      "taskType": this.taskForm.value.taskType,
      "taskTime": this.taskForm.value.taskTime,
      // "userID": this.taskForm.value.userID,
      // "sessionID": this.taskForm.value.sessionID
    }

    this.taskDataService.postData(formData).subscribe({
      next: async response => {
        console.log('Response from server:', response)
        const alert = this.toastController.create({
          message: 'Your new task has been saved!',
          duration: 2000,
          position: 'bottom',
          color: 'success'
        });
        (await alert).present();

        this.router.navigateByUrl('/quiz');


      },
      error: async error => {
        console.log('Error:', error)
        this.router.navigateByUrl('/login');
        const alert = this.toastController.create({
          message: 'Error saving your task! Please try to login and retry saving your new task',
          duration: 2000,
          position: 'bottom',
          color: 'danger'
        });
        (await alert).present();

      }
    });
  }

  async ionViewDidEnter() {
  }

}
