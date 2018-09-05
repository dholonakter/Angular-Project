export class Task {
public title: string;
public description: string;
public author: string;

  constructor(Title: string, Description: string, Author: string) {
    this.author = Author;
    this.description = Description;
    this.title = Title;
   }
}
