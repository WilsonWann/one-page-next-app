
import { ChangeType, ErrorProps } from '@/types';
import { recipientSchema } from '@/zodSchema';
import { z, ZodError, ZodIssue } from 'zod';

// const formatZodIssue = (issue: ZodIssue): string => {
//   const { path, message } = issue;
//   const pathString = path.join('.');

//   return `${pathString}: ${message}`;
// };

// Format the Zod error message with only the current error
export function formatZodError<T = CheckoutErrorProps>(error: ZodError) {
  const { issues } = error;
  console.log('🚀 ~ formatZodError ~ issues:', issues);

  if (issues.length > 0) {
    const flattenIssues = issues.reduce((accIssues, currentIssue) => {
      return {
        ...accIssues,
        [currentIssue.path[0]]: {
          errorType: currentIssue.path[0],
          errorMessage: currentIssue.message,
        },
      };
    }, {} as T);

    return flattenIssues;
  }

  return undefined;
};

export type CheckoutErrorProps = ChangeType<
  Partial<z.infer<typeof recipientSchema>>,
  ErrorProps
>;