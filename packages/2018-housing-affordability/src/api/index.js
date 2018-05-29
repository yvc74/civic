import axios from 'axios';
import { pathOr } from 'ramda';

const EXAMPLE_URL = 'http://45.55.145.111:8000/api/harvardjchs/?datapoint=OR&datatype=Price-to-Median&date=2016-01-01&limit=100&source=&valuetype=';

const grabPricingDataFromResponse = response => pathOr([], ['data', 'results'])(response);
const oregonRegex = /, OR(-\w*$|$)/g;
const filterForOregon = data => data
  .filter(x => typeof x.datapoint === 'string' && x.datapoint.search(oregonRegex) > -1);
const processOregonPricingData = d => filterForOregon(grabPricingDataFromResponse(d));
export const getOregonMedianPrices = () => axios.get(EXAMPLE_URL)
    .then(processOregonPricingData);