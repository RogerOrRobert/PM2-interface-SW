import Feature from 'app/bundles/custom/pages/pm2s'
import { useSession } from 'protolib'

export default function Pm2sPage(props:any) {
  useSession(props.pageSession)
  return <Feature.component {...props} />
}

export const getServerSideProps = Feature.getServerSideProps