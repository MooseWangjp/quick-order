import React,{ Component } from 'react';
import * as indexApi from '../IndexApi';
import '../assets/css/home.css';
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      baseUrl:'http://a.itying.com/'
    }
  }
  getProList = ()=>{
    indexApi.getProductList().then(res => {
        this.setState({
          list: res.data.result
        })  
    }).catch((error)=>{
      console.log(error);
    })
  }
  render(){
    return (
      <div className="home">
        <div className="list">
          {
            this.state.list.map((value, key)=>{
              return(
                <div className="item" key={key}>
                  <h3 className="item_cate">{value.title}</h3>
                  <ul className="item_list">
                    {
                      value.list.map((v,k)=>{
                        return(
                          <li key={k}>
                            <Link to={`/pcontent/${v._id}`}>
                              <div className="inner">
                                <img className="inner-img" src={`${this.state.baseUrl}${v.img_url}`} alt=""/>
                                <p className="title">{v.title}</p>
                                <p className="price">{v.price}元</p>
                              </div>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.getProList();
  }
}
export default Home;