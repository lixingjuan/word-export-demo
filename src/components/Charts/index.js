import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legendScroll';
import { clear, bind } from 'size-sensor';
import tem from "./westeros.json";
echarts.registerTheme('westeros', tem);
class Charts extends Component {
    componentDidMount(){
        this.myChart = echarts.init(this.dom, "westeros");
        if (this.dom) {
            bind(this.dom, () => {//最好加个防抖
                this.myChart.resize();
            })
        }
    }
    componentWillReceiveProps( props ) {
          const { data }=props;
          this.myChart.setOption(data);
      }
    disposeCharts() {
        if (this.dom) {
            try {
                clear(this.dom)
            } catch (e) {
                console.warn(e);
            }
        }
        this.myChart && this.myChart.dispose();
    }
    componentWillUnmount() {
        this.disposeCharts();
    }
    
    render(){

        const{ height } = this.props;
        return (
        <div ref={dom => this.dom = dom } style={{ height: height}} />
        )
    }
    
}
export default Charts;