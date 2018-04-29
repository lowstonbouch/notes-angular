import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService
{

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {}
  addTodo( todo: Todo ): TodoService
  {
    if( !todo.title )
    {
      return;
    }

    if ( !todo.id )
    {
      todo.id = ++this.lastId;
    }

    this.todos.push( todo );

    return this;
  }

  /*
   * Имитируем метод DELETE при обращении к /todos/:id
   * */
  deleteTodoById( id: number ): TodoService
  {
    this.todos = this.todos
      .filter( todo => todo.id !== id );

    return this;
  }

  updateTodoById( id: number, values: Object = {} ): Todo
  {
    let todo = this.getTodoById( id );

    if ( !todo )
    {
      return null;
    }

    Object.assign( todo, values );

    return todo;
  }

  getAllTodos(): Todo[]
  {
    return this.todos;
  }

  getTodoById( id: number ): Todo
  {
    return this.todos
      .filter( todo => todo.id === id )
      .pop();
  }

  toggleTodoEdit( todo: Todo )
  {
    let updatedTodo = this.updateTodoById( todo.id, {
      title: todo.title,
      tags: todo.tags
    } );

    return updatedTodo;
  }
}