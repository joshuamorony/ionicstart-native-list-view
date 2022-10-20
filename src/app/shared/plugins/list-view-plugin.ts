/* eslint-disable @typescript-eslint/naming-convention */
import { registerPlugin } from '@capacitor/core';

export interface ListViewPlugin {
  present(options: { items: string[] }): void;
}

const ListView = registerPlugin<ListViewPlugin>('ListViewPlugin');

export default ListView;
