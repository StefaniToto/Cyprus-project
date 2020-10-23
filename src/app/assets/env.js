(function (window) {
  window.env = window.env || {};
  // Environment variables
  window.env.CONTAINER_ENGINE_URL = "http://192.168.34.193:9001/api/v1/";
  window.env.METADATA_ENGINE_URL = "http://192.168.34.193:9005/api/v1/";
  window.env.SIGNAL_R = "http://192.168.34.193:9003/hub/";
  window.env.SEARCH_ENGINE_URL = "http://192.168.1.118:9006/";
})(this);
