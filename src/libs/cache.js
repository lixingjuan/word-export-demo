let services = {};

export function cacheService(fn){
  let cache_name = fn.name;
  return function chachedService(){
    
    if (services[cache_name] instanceof Promise){
      return services[cache_name].then(data => data).catch(e => {
        services[cache_name] = null;
        throw e;
      })
    }

    services[cache_name] = fn.apply(this,arguments);

    return services[cache_name];
  }
}

export function clearCache(){
  services = {}
}
