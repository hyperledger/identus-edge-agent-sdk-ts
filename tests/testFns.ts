import { vi } from "vitest";

/**
 * tests utility to mock a Task
 * so that the real implementation doesn't run
 * 
 * @param module imported Task module (`import * as someModule from "../path/to/task"`)
 * @param task the className of the Task
 * @param value value to be returned by the Task.run()
 */
export const mockTask = <T>(module: T, task: keyof T, value?: any) => {
  vi.spyOn(module as any, task as any)
    .mockReturnValue({
      run: () => Promise.resolve(value ?? {}),
      log: () => ({}),
    });
};
