import React,{Component} from 'react';
import Navbar from './navbar';
import './ss.css';

class TT extends Component{
    render(){
        return (
          <div className="t1 backgroundimg6"> 
                <Navbar/>
               <div className="container mt4"> 
                <div className="table-responsive">
                    <table className="table table-borderless" style={{width:"75%",margin:"auto"}}>
                      <tr>
                        <th style={{align:"center"}}>
                        <img class="ig1" style={{boxShadow:"2px 2px"}} src={this.props.info1.s} alt="Picture"/>
                        </th>
                        <th colspan="4" style={{align:"center"}}>
                          <p class="f1" style={{fontSize:"60px"}}>{this.props.info1.name}</p>
                          <p class="fw9-ns f3 ma0 tc ma0 red" style={{textShadow:"3px 3px black",fontSize:"30px"}}>Price : {this.props.info1.price}</p>
                          <button className="btn btn-danger mt4 grow fw7-ns black ml5 col-md-12" style={{color:"black",fontSize:"20px"}}>Add to Cart</button>
                        </th>
                      </tr>
                    </table>
            </div>
         </div>
       </div> 
        )
    }
}
export default TT;