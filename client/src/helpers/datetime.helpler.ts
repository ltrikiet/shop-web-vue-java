import moment from 'moment';

const DATE_TIME_FORMAT = 'MM-DD-YYYY HH:mm';

export const getCurrentISOString = () => moment().toISOString();

export const toDateTime = (isoString: string) => moment(isoString).utc().format(DATE_TIME_FORMAT);
