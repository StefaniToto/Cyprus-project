(function (window) {
  window.env = window.env || {};

  // Environment variables
  window.env.CONTAINER_ENGINE_URL = "${CONTAINER_ENGINE_URL}";
  window.env.METADATA_ENGINE_URL = "${METADATA_ENGINE_URL}";
  window.env.SIGNAL_R = "${SIGNAL_R}";
  window.env.SEARCH_ENGINE_URL = "${SEARCH_ENGINE_URL}";
})(this);
