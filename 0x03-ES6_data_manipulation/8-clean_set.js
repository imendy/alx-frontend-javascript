function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let last_str = '';
  set.forEach((the_ele) => {
    if (the_ele && the_ele.startsWith(startString)) last_str += `${the_ele.slice(startString.length)}-`;
  });

  return last_str.slice(0, last_str.length - 1);
}

export default cleanSet;
