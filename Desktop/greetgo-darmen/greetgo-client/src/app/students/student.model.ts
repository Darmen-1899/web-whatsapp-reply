export class Student {
  id!:number
  lastname!:string
  firstname!:string
  yearsOld!:null
  grade!:string


  constructor() {}

  isEmpty(): boolean {
    return this.lastname != '' &&
      this.firstname != '' &&
      this.yearsOld != null &&
      this.grade != ''
  }

}
