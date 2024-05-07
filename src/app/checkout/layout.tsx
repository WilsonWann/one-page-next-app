import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '陌聲一頁式廣告',
  description: 'Checkout Page',
};

export default async function Layout(props: { children: React.ReactNode }) {
  return (
    <div className='w-full flex flex-col justify-between items-stretch p-4'>
      {props.children}
    </div>
  );
}
