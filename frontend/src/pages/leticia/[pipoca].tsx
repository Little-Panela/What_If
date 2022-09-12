import { useRouter } from 'next/router'


function Leticia() {
  const Router = useRouter()
  return <h1>{Router.query.pipoca}</h1>
}

export default Leticia;