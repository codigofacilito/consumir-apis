// Consultar via objetos y metodos
import performer from '/lib/request.js';

export class Todo {
  static async all(){
    let todos = await performer({
      type: "listAll"
    });
    return todos.map( todoJSON => new Todo(todoJSON)  )
  }

  constructor(args){
    this.userId = args.userId;
    this.title = args.title;
    this.completed = args.completed;
    this.id = args.id;
  }

  save = async () =>{
    // No cambie el contexto 
    if(this.id) return this.update();

    this.create();
  }

  create = async()=>{
    let response = await performer({
      type: "create",
      payload: {
        title: this.title
      }
    }).then(data => this.id = data.id );
    return response;
  }

  update = async()=>{
    let response = await performer({
      type: "update",
      payload: {
        id: this.id,
        title: this.title
      }
    });
    return response;
  }

  destroy = async()=>{
    let response = await performer({
      type: "destroy",
      payload: {
        id: this.id
      }
    });
    return response;
  }


}