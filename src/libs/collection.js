import { Container } from 'unstated';

export default class Collection extends Container {
  constructor() {
    super();
    this.state = {
      list: [],
      pagination: {
        pageSize: 10,
        current: 0,
        total: 0
      },
      filter: {}
    }
    this.indexKey = 'id';
  }
  add(item) {
    return this.setState({
      list: [
        item,
        ...this.state.list
      ],
      pagination: {
        ...this.state.pagination,
        total: this.state.pagination.total + 1
      }

    })
  }
  remove(item) {
    const key = this.indexKey;
    const id = item[key];
    const list = [...this.state.list];
    let i = 0;
    for (; i < list.length; i++) {
      if (list[i][key] == id) break;
    }
    list.splice(i, 1);
    return this.setState({
      list: list,
      pagination: {
        ...this.state.pagination,
        total: (this.state.pagination.total - 1 > 0 ? this.state.pagination.total - 1 : 0)
      }

    })
  }
  edit(item) {
    const key = this.indexKey;
    const id = item[key];
    const list = [...this.state.list];
    let i = 0;
    for (; i < list.length; i++) {
      if (list[i][key] == id) break;
    }

    list[i] = { ...list[i], ...item };
    return this.setState({
      list: list
    })
  }
  list(list, pagination) {
    return this.setState({
      list: list,
      pagination: pagination
    })
  }

  filter(filter) {
    let data = { ...this.state.filter, ...filter };
    Object.keys(data).map(key => {
      if (data[key] === undefined){
        delete data[key]
      }
    })
    return this.setState({
      filter: data
    })
  }

}