import $ from 'jquery';
import { ITodoData } from '../typings';

export function getTodoList (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value;

  descriptor.value = function (todoData: ITodoData[]) {
    $.get('http://localhost:8080/todoList').then((res: string) => {
      if (!res) {
        return ;
      }
      todoData = JSON.parse(res);
    }).then(() => {
      _origin.call(this, todoData);
    })
  }
}

export function removeTodo (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value;

  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8080/remove', { id }).then((res: string) => {
      // if (!res) {
      //   return ;
      // }
      _origin.call(this, target, id);
    })
  }
}
