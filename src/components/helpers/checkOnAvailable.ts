const notAvailable = 'N/A';

const checkOnAvailable = (detail: string, component: any, blank: any) => {
  return detail === notAvailable ? blank : component;
};

export default checkOnAvailable;
