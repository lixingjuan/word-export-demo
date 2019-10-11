import { Container } from 'unstated';
export default class FormModel extends Container {
  constructor(props) {
    super(props);
    this.schema = props.schema;
    this.initialState = {
      submitting: false,
      fields: this.getFieldsFromSchema(props.schema)
    }
    this.state = {
      ...this.initialState
    }
    this.addAction = props.addAction;
    this.editAction = props.editAction;
  }

  transformReq(req) {
    return req;
  }

  submit(values) {
    this.setState({ submitting: true })
    let fn = values.id ? this.editAction : this.addAction;

    return fn(this.transformReq(values))
      .then(res => {
        this.setState({ submitting: false })
        return res;
      })
      .catch(e => {
        this.setState({ submitting: false })
        throw e;
      });

  };

  getDetail(form) {
    return this.setState({
      fields: { ...form }
    })
  }


  clearForm() {
    this.setState({
      ...this.initialState
    })
  };

  setData(props) {
    let keys = Object.keys(this.schema) || [];
    let fields = {};
    keys.map(key => {
      let field = this.schema[key].field || key;
      if (field in props) {
        fields[key] = props[field];
      }
    })

    this.setState({
      fields: {
        ...this.state.fields,
        ...fields
      }
    })
  }

  getData() {
    let schema = this.schema;
    let fields = this.state.fields;
    let keys = Object.keys(fields) || [];
    let data = {};
    keys.map(key => {
      let field = schema[key].field || key;
      data[field] = fields[key];
    })
    return data;
  }

  message(pattern, name) {
    if (typeof pattern === 'string') {
      return pattern.replace('${name}', name)
    }
    return '请输入' + name
  }

  checkType(value, type) {
    if (type === 'number') {
      return /^\d+$/.test(value)
    }
    return true;
  }
  validate(fields) {
    const schema = this.schema;
    
    for (let key in schema) {
      const rules = schema[key].rules || [];
      const name = schema[key].name;
      const value = fields[key];
      for (let rule of rules) {
        if ('required' in rule) {
          if (value === '' || value === undefined) return this.message(rule.message, name)
        }

        if ('type' in rule) {
          if (!this.checkType(value, rule.type)) return this.message(rule.message || '${name}格式不正确', name)
        }

        if (rule.pattern instanceof RegExp) {
          if (!rule.pattern.test(value)) return this.message(rule.message || '${name}格式不正确', name)
        }

        if ('max' in rule) {
          if (value && value.length > rule.max) return this.message(rule.message || '${name}长度不能超过' + rule.max + '个字符', name)
        }

        if ('validator' in rule) {
          let msg = rule.validator(value, fields);
          if (typeof msg === 'string') return this.message(msg, name)
        }
      }
    }

    return true;
  }

  getFieldsFromSchema(schema) {
    let fields = {};
    for (let key in schema) {
      if (schema.hasOwnProperty(key)) {
        let value = schema[key].value;
        fields[key] = (
          typeof value === 'object' ?
            Array.isArray(value) ?
              [...value]
              : { ...value }
            : value
        )

      }
    }

    return fields;
  }


}
