import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {

  transform(tasks: any, ValueSearch?: any): any {
    if(ValueSearch === undefined){
      return tasks;
    }
    else{
      return tasks.filter(function(task){
        return task.name.toLowerCase().includes(ValueSearch.toLowerCase());
      })
    }
  }

}
