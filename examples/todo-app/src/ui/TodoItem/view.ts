import { ElementVirtualNode, VNode, button, input, label, li } from '@motorcycle/dom';
import { Model, TodoItemStyles } from './';

import { classes } from 'typestyle';

export function view(model: Model): VNode {
  const { todo, editing } = model;

  const host =
    li(
      {
        className: classes(
          TodoItemStyles.itemClass,
          todo.completed() && TodoItemStyles.completedClass,
          editing && TodoItemStyles.editingClass,
        ),
        attrs: {
          'data-id': todo.id(),
        },
      },
      [
        input(
          {
            className: TodoItemStyles.toggleClass,
            type: `checkbox`,
            checked: todo.completed(),
          },
        ),
        label(
          {
            className: TodoItemStyles.labelClass,
          },
          todo.title().value(),
        ),
        button(
          {
            className: TodoItemStyles.destroyClass,
          },
        ),
        input(
          {
            className: TodoItemStyles.editClass,
            update(_, vNode: ElementVirtualNode<HTMLInputElement>) {
              const element = vNode.element;

              if (editing) {
                element.style.display = `block`;
                element.value = todo.title().value();
                element.focus();
                element.selectionStart = element.value.length;
              } else {
                element.style.display = `none`;
              }
            },
          },
        ),
      ],
    );

  return host;
}
