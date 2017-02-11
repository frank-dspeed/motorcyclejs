import { VNode, div, h1, header, input, section, ul } from '@motorcycle/dom';

import { todoAppStyles } from './';

const HEADING = `todos`;

const NEW_ITEM_PLACEHOLDER = `What needs to be done?`;

export function todoAppView(items: Array<VNode>): VNode {
  const host =
    div(
      {
        className: todoAppStyles.host,
      },
      [
        header(
          [
            h1(
              {
                className: todoAppStyles.heading,
              },
              HEADING
            ),
            input(
              {
                className: todoAppStyles.newItem,
                placeholder: NEW_ITEM_PLACEHOLDER,
                autofocus: true,
                update: (_, vNode) => { (vNode.element as HTMLInputElement).value = `` }
              },
            ),
          ]
        ),
        section(
          [
            ul(
              {
                className: todoAppStyles.items,
              },
              items
            ),
          ]
        )
      ]
    );

  return host;
}