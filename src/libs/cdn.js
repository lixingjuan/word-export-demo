export default function cdn(source) {
  const host = window.location.host;
  const names = host.split(".");
  return "//" + process.env.CDN + "/" + names[0] + "/" + source;
}
