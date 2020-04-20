import { IOptions } from '@/options';
import { Task, IProps } from '@/tasks';
import { bundleCompiler } from './tools/bundleCompiler';

/* -----------------------------------
 *
 * Method
 *
 * -------------------------------- */

async function method(options: IOptions): Promise<Task> {
   const compiler = bundleCompiler(options);

   return async ({ data, name, path }: IProps) => {
      const fileName = `${name}.css`;

      const { cssValue } = await compiler(data, path);

      return {
         [fileName]: cssValue,
      };
   };
}

/* --------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { method };
