const response_params = ["page_number", "page_size"];

const extractResponseParams = (query) => {
  let new_query = {};
  for (const key in query)
    if (!response_params.includes(key)) new_query[key] = query[key];

  let res_params = {};
  for (const key in query)
    if (!response_params.includes(key)) res_params[key] = query[key];

  return [new_query, res_params];
};

module.exports = {
  extractResponseParams,
};
