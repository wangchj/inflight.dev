import releases from '@site/src/releases.json';

export const platformNameMap = new Map<string, string>([
  ['darwin', 'Mac Builds'],
  ['win32',  'Windows Builds'],
]);

const darwinMap = new Map<string, string>([
  ['arm64', 'Mac Apple Silicon'],
  ['x64',   'Mac Intel Chip'],
]);

const win32Map = new Map<string, string>([
  ['arm64', 'Windows Arm64'],
  ['x64',   'Windows x64'],
]);

const buildNameMap = new Map([
  ['darwin', darwinMap],
  ['win32',  win32Map],
]);

/**
 * The Releases section React component.
 */
export function Releases() {
  return releases.map(release => <Release release={release}/>)
}

/**
 * The Release React component for a release.
 * @param release The release data model object.
 */
function Release({release}) {
  return (
    <>
      <h2 id={`${release.version}`}>{release.version}</h2>

      {Object.entries(release.platforms).sort(sortPlatforms).map(
        platform => <Platform version={release.version} platform={platform}/>
      )}
    </>
  )
}

/**
 * The platform section React component for a platform.
 *
 * @param version The release version.
 * @param platform The platform data model object.
 */
function Platform({version, platform}) {
  const name = platform[0];
  const builds = platform[1];
  return (
    <>
      <h3 id={`${name}-${version}`}>{platformNameMap.get(name)}</h3>

      <Builds version={version} platform={name} builds={builds}/>
    </>
  )
}

/**
 * The builds table React component.
 *
 * @param version The release version, e.g., 2.1.0
 * @param platform The platform name, e.g., arm64
 * @param builds The builds data model objects.
 */
function Builds({version, platform, builds}: {version: string, platform: string, builds: any[]}) {
  return (
    <table style={{width: '100%', display: 'table'}}>
      <thead>
        <tr>
          <th style={{width: '25%'}}>Platform</th>
          <th style={{width: '40%'}}>Package</th>
          <th style={{width: '35%'}}>SHA-265 Checksum</th>
        </tr>
      </thead>
      <tbody>
        {builds.map(build => (
          <tr>
            <td>{getBuildName(platform,build.arch)}</td>
            <td><a href={getBuildUrl(version, build)}>{build.package}</a></td>
            <td style={{overflowWrap: 'anywhere'}}><small><code>{build.sha256}</code></small></td>
          </tr>
        ))
        }
      </tbody>
    </table>
  )
}

/**
 * Compares release platforms via platform name.
 *
 * @param a The first platform data model.
 * @param b The second platform data model.
 * @returns 0 if names are equal, 1 if a > b, -1 if a < b.
 */
export function sortPlatforms(a, b) {
  return a[0] === b[0] ? 0 : a[0] > b[0] ? 1 : -1;
}

/**
 * Gets build package download URL.
 *
 * @param version The release version
 * @param build The build data model object that contains package file name.
 */
export function getBuildUrl(version: string, build: any) {
  return `https://inflight.dev/releases/${version}/${build.package}`;
}

/**
 * Gets the user friendly name of the build.
 *
 * @param platform The internal platform name, e.g., darwin or win32.
 * @param arch The CPU architecture name, e.g., arm64 or x64.
 */
export function getBuildName(platform: string, arch: string) {
  return buildNameMap.get(platform)?.get(arch) ?? 'Unknown build';
}
