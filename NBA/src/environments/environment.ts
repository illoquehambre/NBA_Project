// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_BASE_URL: 'https://data.nba.net/data/10s/prod/v1',
  API_IMG_TEAM_URL: 'https://es.global.nba.com/media/img/teams/00/logos/',
  API_INFO_PLAYERS: 'https://data.nba.net/data/10s/prod/v1',
  API_URL_IMG_PLAYERS:
    'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190',
  API_IMG_PLAYER_URL:'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
