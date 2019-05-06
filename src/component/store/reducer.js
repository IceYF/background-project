//component 整体上的仓库 reducer
const navcolumn = {
  menus: [
    { id: 1, name: '漫画管理', icon: 'icon-tushu', href: '/' },
    { id: 2, name: '会员管理', icon: 'icon-shenqingchengweiVIP', href: '/Members' },
    { id: 3, name: '人气排行', icon: 'icon-renqi', href: '/Sentiment' },
    { id: 4, name: '分类排行', icon: 'icon-kinds', href: '/Classification' },
    { id: 5, name: '管理员账号', icon: 'icon-guanliyuan', href: '/TheAdministrator' }
  ],
  defaultMenus: ['1'],
}

export default (start = navcolumn,action) => {
  let newStart = JSON.parse(JSON.stringify(start));
  switch (action.type) {
    default:
      break;
  }
  return newStart;
}