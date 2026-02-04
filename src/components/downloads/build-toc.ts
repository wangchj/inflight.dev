import releases from '@site/src/releases.json';
import { platformNameMap, sortPlatforms } from './releases';

/**
 * Build download page outline (TOC).
 *
 * @returns An array in Docusaurus toc format.
 */
export function buildToc() {
  return buildReleases();
}

/**
 * Builds releases TOC array.
 *
 * @returns @returns An array in Docusaurus toc format.
 */
function buildReleases() {
  return releases.map(release => buildRelease(release)).flat();
}

/**
 * Builds release TOC array.
 *
 * @returns @returns An array in Docusaurus toc format.
 */
function buildRelease(release) {
  const id = `${release.version}`;

  return [
     { id, value: id, level: 2 },
     ...buildPlatforms(release.version, release.platforms)
  ]
}

/**
 * Builds platform TOC array.
 *
 * @returns @returns An array in Docusaurus toc format.
 */
function buildPlatforms(version, platforms) {
  return Object.entries(platforms)
    .sort(sortPlatforms)
    .map(platform => {
      const id = `${platform[0]}-${version}`
      const value = platformNameMap.get(platform[0]);
      return {id, value, level: 3};
    });
}
