import React,{ Component } from 'react';
import '../assets/css/pcontent.css';
import { Link } from "react-router-dom";
import * as indexApi from '../IndexApi';
/**
 * https://react.docschina.org/docs/dom-elements.html
 * react解析html
 *  function createMarkup() {
      return {__html: 'First &middot; Second'};
    }

    function MyComponent() {
      return <div dangerouslySetInnerHTML={createMarkup()} />;
    }
 */

class Pcontent extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      baseUrl:'http://a.itying.com/'
    }
  }
  getDetailList=(pid)=>{
    indexApi.getProductDetailList({id: pid}).then((res)=>{
      console.log('res: ',res)
      this.setState({
        list: res.data.result[0]
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
  render(){
    return (
      <div className="pcontent">
        <div className="back">
          <Link to="/">返回</Link>
        </div>
        <div className="p_content">
          <div className="p_info">
            {this.state.list.img_url?<img src={`${this.state.baseUrl}${this.state.list.img_url}`} alt=""/>:""}
            <h2>{this.state.list.title}</h2>
            <p className="price">{this.state.list.price}/份</p>
          </div>
          <div className="p_detail">
            <h3>商品详情</h3>
            <div className="p_content" dangerouslySetInnerHTML={{__html: this.state.list.content}}></div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.getDetailList(id);
  }  
}

export default Pcontent;