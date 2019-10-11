

export function getActiveMenuByPathname(menu, pathname) {
  let active_sub_menu = [];
  let active_pat_menu = [];
  if (typeof pathname !== "string") return [];
  menu.map((pm, ip) => {
    (pm.children || []).map((sm, is) => {
      if (pathname.indexOf(sm.url) >= 0) {
        active_pat_menu.push(ip + "");
        active_sub_menu.push(ip + "_" + is);
      }
    });
  });

  return [active_pat_menu, active_sub_menu];
}
