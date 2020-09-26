import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';

import { DonutChartContainer } from './components/DonutChartContainer';
import { BarChartContainer } from './components/BarChartContainer';
import { GridContainer } from './components/GridContainer';
import { PanelBarItem } from '@progress/kendo-react-layout';
import { PanelBarContainer } from './components/PanelBarContainer';


import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.appContainer=React.createRef();
    this.state={
      showDialog:false
    }
  }

  handlePDFExport=()=>{
  savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' })
  }
  
  handleShare=()=>{
    this.setState({
      showDialog: !this.state.showDialog
    },()=>console.log(this.state))
  }

  render() {
    return (
      <Ripple>
      <div className="">
        <div className="app-container  panels" ref={(el)=>this.appContainer=el} style={{width:"100%"}}>
          <div className="row" style={{marginBottom:"1px",backgroundColor:"black",color:"white"}}>
              <div  className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <h1>Bob's Super Market | Sales Report | Q4 2019</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                <Button primary={true} onClick={this.handleShare}>Share</Button>
                <Button onClick={this.handlePDFExport}>Export to PDF</Button>
              </div>
          </div>
          <div className="row" style={{marginTop:"10px"}}>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
             <PanelBarContainer/>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">  
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div className="percentage-container charts">
                          <span className="percentage-number">64</span>
                          <span className="percentage-sign">%</span>
                          <p>CUSTOMER</p>
                        </div>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div className="percentage-container charts">
                          <span className="percentage-number">90</span>
                          <span className="percentage-sign">%</span>
                          <p>TARGET SALES</p>
                        </div>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div className="percentage-container charts">
                          <span className="percentage-number">89</span>
                          <span className="percentage-sign">%</span>
                          <p>ACTUAL SALES</p>
                        </div>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div className="percentage-container charts">
                          <span className="percentage-number">20</span>
                          <span className="percentage-sign">%</span>
                          <p>PROFIT</p>
                        </div>
                      </div>
                </div>

              <div className="row">
                  <div className="charts col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <DonutChartContainer className="charts"/>
                  </div>
                  <div className="charts col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <BarChartContainer/>
                  </div>
              </div>

                <div className="row">
                  <div className="charts col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <GridContainer/>
                  </div>
                </div>

            </div>
          </div>
         {/*Dialog box for save PDF*/}
         {
           this.state.showDialog && 
           <Dialog title={"Share Report"} onClose={this.handleShare}>
             <p>Please enter the Email address</p>
               <Input placeholder="abc@gmail.com"></Input>
               <DialogActionsBar>
                 <Button primary={true} onClick={this.handleShare}>Share</Button>
                 <Button onClick={this.handleShare}>Close</Button>
               </DialogActionsBar>
             </Dialog>
         }
        </div>
      </div>
      </Ripple>
    );
  }
}

export default App;