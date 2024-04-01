import dynamic from 'next/dynamic'
const NewsListing = dynamic(() => import('./components/NewsListing'), { ssr: false })

export default function Home() {

  return (
    <>
      <NewsListing />
    </>
  );
}
