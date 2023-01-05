# Autoconfig file used in HelloPKI lab environment
function FindProxyForURL(url, host) {
  if (shExpMatch(host,"*.lab")) return "PROXY 127.0.0.1:8080";
  if (shExpMatch(host,"10.228.183.199")) return "PROXY 127.0.0.1:8080";
  if (shExpMatch(host,"10.228.183.2*")) return "PROXY 127.0.0.1:8080";
  return "DIRECT";
}
