import Head from "@docusaurus/Head"
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Index() {
  return (
    <>
      <Head>
        <title>Inflight - Delightful REST API Client</title>
      </Head>

      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Hero Section */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '25px' }}>
            <img src={useBaseUrl('/icon.svg')} width="75px" height="75px" alt="Inflight Icon" />
            <div style={{ fontSize: '72px', fontWeight: 700, marginBlock: '2rem' }}>
              Inflight
            </div>
          </div>

          <div style={{ fontSize: '50px', fontWeight: 700, marginBottom: '2.5rem', paddingInline: '1em', textAlign: 'center' }}>
            Delightful REST API Client
          </div>

          {/* Download Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', marginBottom: '2.8rem' }}>
            <div><strong>Download the desktop app (v2.1.0)</strong></div>
            <div style={{ display: 'flex', textAlign: 'center', columnGap: '0.5rem'}}>
              <a role="button" className="button button--secondary" href="https://inflight.dev/releases/2.1.0/Inflight-darwin-arm64-2.1.0.zip">
                Mac Apple Silicon
              </a>
              <a role="button" className="button button--secondary" href="https://inflight.dev/releases/2.1.0/Inflight-darwin-x64-2.1.0.zip">
                Mac Intel Chip
              </a>
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.95em' }}>
              or <a href="https://app.inflight.dev" target="_blank" style={{ textDecoration: 'none' }}>use the Web App</a>
            </div>
          </div>

          {/* Screenshot */}
          <div style={{ width: '100%', paddingInline: '1rem', maxWidth: '1312px' }}>
            <img
              src={useBaseUrl('/screen.png')}
              style={{ border: '1px solid #ced4da', borderRadius: '10px', width: '100%' }}
              alt="App Screenshot"
            />
          </div>

          {/* Features Grid */}
          <div className={styles.featureGrid}>
            <FeatureBlock
              title="Requests"
              text="Configure REST API requests using intuitive, powerful UI. Easily choose HTTP method, add request headers and body with full control."
              icon={<path d="M10 14l11 -11M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />}
            />
            <FeatureBlock
              title="Dimensions"
              text="Parameterize requests with dimensions and variants. Group multiple variants under dimensions to easily switch contexts and keep requests generic."
              icon={<><path d="M12 4l-8 4l8 4l8 -4l-8 -4" /><path d="M4 12l8 4l8 -4" /><path d="M4 16l8 4l8 -4" /></>}
            />
            <FeatureBlock
              title="Privacy by Design"
              text="Your requests and environment variables stay on your machine. No syncing your private API endpoints and information to remote server."
              icon={<><path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" /><path d="M15 19l2 2l4 -4" /></>}
            />
            <FeatureBlock
              title="Secure AWS CLI Integration"
              text="Get credentials directly from AWS CLI profiles. No more storing AWS credentials in requests and environments making projects easily shareable."
              icon={<><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></>}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

function FeatureBlock({ title, text, icon }) {
  return (
    <div className={`col col-12 col-md-6 ${styles.block}`}>
      <div className={styles.blockIcon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div>
        <div className={styles.blockHeader}>{title}</div>
        <div className={styles.blockText}>{text}</div>
      </div>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
      <path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  );
}