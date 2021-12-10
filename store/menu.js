import Menu from '../../data/menu'

const state = {
  data: Menu.data,
  searchData: [],
  togglesidebar: true
}

// getters
const getters = {

}

// mutations
const mutations = {
  opensidebar: (state) => {
    state.togglesidebar = !state.togglesidebar
  },
  resizetoggle: (state) => {
    if (window.innerWidth < 1199) {
      state.togglesidebar = false
    } else {
      state.togglesidebar = true
    }
  },
  searchTerm: (state, term) => {
    let items = [];
    var searchval = term.toLowerCase();
    state.data.filter(menuItems => {
      if (menuItems.title) {
        if (menuItems.title.toLowerCase().includes(searchval) && menuItems.type === 'link') {
          items.push(menuItems);
        }
        if (!menuItems.children) return false
        menuItems.children.filter(subItems => {
          if (subItems.title.toLowerCase().includes(searchval) && subItems.type === 'link') {
            subItems.icon = menuItems.icon
            items.push(subItems);
          }
          if (!subItems.children) return false
          subItems.children.filter(suSubItems => {
            if (suSubItems.title.toLowerCase().includes(searchval)) {
              suSubItems.icon = menuItems.icon
              items.push(suSubItems);
            }
          })
        })
        state.searchData = items
      }
    });
  },
  setNavActive: (state, item) => {
    if (!item.active) {
      state.data.forEach(a => {
        if (state.data.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  },
  setActiveRoute: (state, item) => {
    state.data.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }
};

// actions
const actions = {
  opensidebar: (context, term) => {
    context.commit('opensidebar', term)
  },
  resizetoggle: (context, term) => {
    context.commit('resizetoggle', term)
  },
  searchTerm: (context, term) => {
    context.commit('searchTerm', term)
  },
  setNavActive: (context, item) => {
    context.commit('setNavActive', item)
  },
  setActiveRoute: (context, item) => {
    context.commit('setActiveRoute', item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}